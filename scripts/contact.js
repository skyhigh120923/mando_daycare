// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const form = document.querySelector('form');
const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  const userName = document.querySelector('#user-name');
  const userEmail = document.querySelector('#user-email');
  const userMessage = document.querySelector('#user-message');

  if (userName.value === '' || userEmail.value === '' || userMessage.value === '') {
    window.alert('Please fill all the fields');
    return;
  }

  const contactPage = document.querySelector('#contact-page');
  contactPage.innerHTML = '<p class="large-text">Thank you for your message</p>';
});