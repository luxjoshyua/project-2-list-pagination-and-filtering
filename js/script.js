/*
/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing
/*
Two main tasks to this project
  1. add buttons to the bottom of the page
  2. show different sets of student information when each button is clicked
 */

/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/

"use strict";

// 1. select the list parameter

// Global variables
const studentList = document.querySelector('.student-item cf');

// select the page buttons
// let page = 1;

/*
-- the showPage function --

Create the `showPage` function to hide all of the items in the
  list except for the ten you want to show.

   Loop over items in the list parameter
     -- if the index of a list item is >= the index of the first item
     that should be shown on the page
     -- && the list item index is <= the index of the last item
     that should be shown on the page, show it

  Pro Tips:
    - Keep in mind that with a list of 54 students, the last page
      will only display four.
    - Remember that the first student has an index of 0.
    - Remember that a function `parameter` goes in the parens when
      you initially define the function, and it acts as a variable
      or a placeholder to represent the actual function `argument`
      that will be passed into the parens later when you call or
      "invoke" the function
 */

const showPage = (list, page) => {
  // show ten students per page
  const studentsPerPage = 10;
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
 -- the appendPageLinks function --

 Create the `appendPageLinks function` to generate, append, and add
functionality to the pagination buttons.

 then we could use a function that creates all the pagination buttons, adds them to
 the DOM, and adds their functionality. So you would see a button with the number 1 which,
 when clicked, would show the first ten students (the first "page"). When each link is clicked,
 the showPage function displays the corresponding page (set of ten students), and highlights
 that page's link. For example, clicking the link to page 2 will display students 11
 through 20 and highlight button 2.
*/

/*
const appendPageLinks = (list) => {


    1. Determine how many pages are needed for the list by dividing the total number of list items
    by the max number of items per page

    2. Create a <div>, give it the "pagination" class, and append it to the .page div

    3. Add a <ul> to the "pagination" div to store the pagination links

    4. <for> every page, add <li> and <a> tags with the page number text

    5. Add an event listener to each a tag. When they are clicked, call the showPage function
    to display the appropriate page

    6. Loop over pagination links to remove active class from all links

    7. Add the active class to the link that was just clicked. You can identify that
    clicked link using <event.target>


}
*/


// call showPage function
// showPage(studentList);






// Remember to delete the comments that came with this file, and replace them with your own code comments.
