/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;
let dayCounter = 0;
let daysSelected = [];

const dayButtons = document.querySelectorAll('.day-selector li');
const fullDayButton = document.querySelector('#full');
const halfDayButton = document.querySelector('#half');
const clearButton = document.querySelector('#clear-button');
const calculatedCost = document.querySelector('#calculated-cost');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function selectDay(dayButton) {
    if (!dayButton.classList.contains('clicked')) {
      dayButton.classList.add('clicked');
      dayCounter++;
      daysSelected.push(dayButton.id);
      updateCost();
    }
  }
  
  dayButtons.forEach(function(dayButton) {
    dayButton.addEventListener('click', function() {
      selectDay(dayButton);
    });
  });




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearDays() {
    dayCounter = 0;
    daysSelected = [];
  
    dayButtons.forEach(function(dayButton) {
      dayButton.classList.remove('clicked');
    });
  
    updateCost();
  }
  clearButton.addEventListener('click', clearDays);





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function selectFullDay() {
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    dailyRate = 35;
    updateCost();
  }
  
  function selectHalfDay() {
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    dailyRate = 20;
    updateCost();
  }
  
  fullDayButton.addEventListener('click', selectFullDay);
  halfDayButton.addEventListener('click', selectHalfDay);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateCost() {
    let totalCost = dailyRate * dayCounter;
    calculatedCost.innerHTML = totalCost;
  }
