document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-appointment');
    const formContainer = document.getElementById('appointment-form-container');

    toggleButton.addEventListener('click', function() {
        formContainer.classList.toggle('hidden');
        if (formContainer.classList.contains('hidden')) {
            toggleButton.textContent = 'Free 15 minute consultation';
        } else {
            toggleButton.textContent = 'Close';
        }
    });
});

