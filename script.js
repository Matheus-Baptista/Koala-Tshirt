// script.js

function addToCart(product) {
  alert(product + ' has been added to your cart!');
}

function submitFeedback(event) {
  event.preventDefault();
  const name = event.target.name.value.trim();
  const email = event.target.email.value.trim();
  const comments = event.target.comments.value.trim();

  if (name && email && comments) {
    document.getElementById('feedbackMessage').textContent = 
      `Thank you, ${name}, for your feedback! We appreciate your input.`;
    event.target.reset();
  } else {
    document.getElementById('feedbackMessage').textContent = '';
    alert('Please fill out all fields before submitting.');
  }
}
