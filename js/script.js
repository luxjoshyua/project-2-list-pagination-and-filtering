/*
/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

"use strict";

/* -- Part One: Global variables -- */

// 1. select the list parameter
const studentList = document.querySelectorAll('.student-item.cf');

// show ten students per page
const studentsPerPage = 10;
// const studentsPerPage = 20; 

/*
-- Part Two: the showPage Function --
*/

const showPage = (list, page) => {
  // console.log(page); check it's working
  const listLength = list.length;
  // start at 0, find 0 to 10 list students
  const firstItem = (page * studentsPerPage) - studentsPerPage;
  const lastItem = page * studentsPerPage - 1;
  // loop over the list parameter so we can show 10 students per page
  for (let i = 0; i < list.length; i++) {
    // i is now the first list item on the page
    if (i >= firstItem && i <= lastItem) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
};

/*
 -- Part Three: The appendPageLinks Function --
*/
// setup appendPageLinks function, takes full student list as its argument
const appendPageLinks = (studentList) => {
  /* 1. Determine how many pages are needed for the list by dividing the total number of list items
   by the max number of items per page */
  // this needs to be let becuause it's dynamic!
  let totalPages = studentList.length / studentsPerPage;

  // 2. Create a <div>, give it the "pagination" class, and append it to the .page div
  const newDiv = document.createElement('div');
  newDiv.className = 'pagination';
  const pageDiv = document.querySelector('.page');
  pageDiv.appendChild(newDiv);

  // 3. Add a <ul> to the "pagination" div to store the pagination links
  const newUL = document.createElement('ul');
  newDiv.appendChild(newUL);

  // 4. <for> every page, add <li> and <a> tags with the page number text
  for (let i = 0; i < totalPages; i++) {
    // create li
    const li = document.createElement('li');
    // create a tag
    const aTag = document.createElement('a');

    // 5. Add an event listener to each a tag. When they are clicked, call the showPage function to display the appropriate page */
    aTag.addEventListener('click', (event) => {
      // select every ahref that is a child of a div with pagination class
      const listA = document.querySelectorAll('.pagination a');
      // 6. Loop over pagination links to remove active class from all links
      for (let i = 0; i < listA.length; i++) {
        listA[i].classList.remove('active');
      }
      // 7. Add the active class to the link that was just clicked.
      aTag.classList.add('active');
      showPage(studentList, i + 1);
    });

    aTag.textContent = i + 1;
    li.appendChild(aTag);
    newUL.appendChild(li);
  }
};

/* -- Part Four: Call the Functions! */
// call showPage function
showPage(studentList, 1);
// call appendPageLinks function
appendPageLinks(studentList);

/* -- Part Five: Search Functionality -- */
function searchTool() {
  // select the header
  const searchParent = document.querySelector('.page-header');
  // create search element div
  const searchDiv = document.createElement('div');
  // append the searchDiv to the searchBarContainer parent
  searchParent.appendChild(searchDiv);
  // add .student-search class to the searchDiv
  searchDiv.classList.add('student-search'); 
  // create input element
  const input = document.createElement('input');
  // set the input type to 'search'
  input.type = 'search';
  // append the input to the searchDiv
  searchDiv.appendChild(input);
  // make search input work when user hits enter 
  input.addEventListener('search', function(e) {
      search(input); 
  }); 

  // create search button user clicks to search
  const searchBtn = document.createElement('button');
  // set the button's text content to search
  searchBtn.textContent = 'Search';
  // addEventListener always has a type and a function with a parameter
  searchBtn.addEventListener('click', function(e) {
      search(input); 
  });
  // append the search button the search div
  searchDiv.appendChild(searchBtn);
};

// use e because want to get the value of the event
function search(el) {
  // e.target instead of input because in new function
  const filter = el.value.toUpperCase();
  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i].getElementsByTagName('h3')[0].innerText.toUpperCase();
    if (student.includes(filter)) {
      studentList[i].style.display = 'block'; 
    } else {
      studentList[i].style.display = 'none'; 
    }
  }
};
searchTool(); 
