document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-appointment');
    const formContainer = document.getElementById('appointment-form-container');

    toggleButton.addEventListener('click', function() {
        formContainer.classList.toggle('hidden');
        if (formContainer.classList.contains('hidden')) {
            toggleButton.textContent = 'Request an Appointment';
        } else {
            toggleButton.textContent = 'Close';
        }
    });
});

