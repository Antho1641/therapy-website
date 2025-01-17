document.getElementById('toggle-appointment').addEventListener('click', function (event) {
    const appointmentBox = document.getElementById('appointment');
    const isExpanded = appointmentBox.classList.toggle('expanded');
    this.setAttribute('aria-expanded', isExpanded);
    event.stopPropagation(); // Prevent the click from propagating to the document
});

// Close appointment box when clicking outside
document.addEventListener('click', function (event) {
    const appointmentBox = document.getElementById('appointment');
    if (appointmentBox.classList.contains('expanded') && !appointmentBox.contains(event.target)) {
        appointmentBox.classList.remove('expanded');
    }
});

// Move appointment box to top
document.getElementById('move-top').addEventListener('click', function () {
    const appointmentBox = document.getElementById('appointment');
    appointmentBox.classList.remove('bottom');
    appointmentBox.classList.add('top');
});

// Move appointment box to bottom
document.getElementById('move-bottom').addEventListener('click', function () {
    const appointmentBox = document.getElementById('appointment');
    appointmentBox.classList.remove('top');
    appointmentBox.classList.add('bottom');
});
