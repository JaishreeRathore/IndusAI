document.addEventListener('DOMContentLoaded', function() {
    const transactionForm = document.getElementById('transactionForm');
    const contactForm = document.getElementById('contactForm');

    transactionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const accountNumber = document.getElementById('account-number').value.trim();
        const amount = document.getElementById('amount').value.trim();

        if (name === '' || accountNumber === '' || amount === '') {
            alert('Please fill in all fields before submitting the form.');
        } else {
            alert('Thank You, Your Transaction  is successful!');
            transactionForm.reset();
        }
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields before submitting the form.');
        } else {
            alert('Message sent successfully!');
            contactForm.reset();
        }
    });
});





