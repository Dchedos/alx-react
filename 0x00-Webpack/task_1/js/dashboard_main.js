// Import jQuery and lodash
import $ from 'jquery';
import debounce from 'lodash/debounce';

// Function to update the click counter
let count = 0;
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
};

  // Add paragraphs and button elements
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="clickButton">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Bind debounce function to click event
  $('#clickButton').on('click', debounce(updateCounter, 500));
