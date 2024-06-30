document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.querySelector('.burger-icon');
    const navLinks = document.querySelector('.nav-links');

    burgerIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Get the modal
    const modal = document.getElementById('signUpModal');

    // Get the button that opens the modal
    const btn = document.getElementById('signUpBtn');

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName('close-btn')[0];

    // When the user clicks the button, open the modal
    btn.onclick = () => {
        modal.style.display = 'block';
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = () => {
        modal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Handle form submission
    const form = document.getElementById('signUpForm');
    form.onsubmit = (event) => {
        event.preventDefault();
        // Here you can add your form submission logic, e.g., sending data to the server
        alert('Sign Up Successful!');
        modal.style.display = 'none';
    }
});
