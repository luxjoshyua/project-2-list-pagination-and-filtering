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
  // check it's working up to this point!
  // console.log(totalPages);

  // 4. <for> every page, add <li> and <a> tags with the page number text
  for (let i = 0; i < totalPages; i++) {
    // create li
    const li = document.createElement('li');
    // create a
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
  // const searchBarContainer = document.getElementsByClassName('page-header');
  const searchParent = document.querySelector('.page-header');
  searchParent.style.backgroundColor = 'red'; 

  // create search element div
  const searchDiv = document.createElement('div');
  // searchDiv.className += 'student-search'; 
  // append the searchDiv to the searchBarContainer parent
  searchParent.appendChild(searchDiv);

  // create input element
  const input = document.createElement('input');
  // set the input type to 'search'
  input.type = 'search';
  // input.className = 'student-search'; 
  // append the input to the searchDiv
  searchDiv.appendChild(input);
  filter = input.value.toUpperCase();

  // create search button element
  // give search button text content
  // Unsure if I need this?
  /* const searchBtn = document.createElement('button');
  searchBtn.textContent = 'search here';
  searchDiv.appendChild(searchBtn); */

  const student = document.getElementsByTagName('h3');

  for (i = 0; i < studentList.length; i++) {
    // j = studentList[i].getElementsByTagName('h3')[0];
    j = studentList[i].student[0];
    txt = j.textContent || j.innerText;
    if (txt.toUpperCase().indexOf(filter) > -1) {
      student[i].style.display = '';
    } else {
      student[i].style.display = '';
    }
  }
};



// after search, clear input with searchInput.value = ''; 