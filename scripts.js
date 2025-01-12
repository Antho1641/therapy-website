document.getElementById('toggle-appointment').addEventListener('click', function() {
    var formContainer = document.getElementById('appointment-form-container');
    var toggleButton = document.getElementById('toggle-appointment');
    var appointmentHeading = document.getElementById('appointment-heading');
    if (formContainer.classList.contains('hidden')) {
        formContainer.classList.remove('hidden');
        toggleButton.textContent = 'Close';
        appointmentHeading.style.display = 'block';
    } else {
        formContainer.classList.add('hidden');
        toggleButton.textContent = 'Request an Appointment';
        appointmentHeading.style.display = 'none';
    }
});