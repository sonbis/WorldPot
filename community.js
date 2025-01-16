// Toggle Join Button
function toggleJoin(button) {
    if (button.classList.contains('joined')) {
        button.textContent = 'Join Community';
        button.classList.remove('joined');
    } else {
        button.textContent = 'Joined';
        button.classList.add('joined');
    }
}

// Toggle Register Button
function toggleRegister(button) {
    if (button.classList.contains('registered')) {
        button.textContent = 'Register Now';
        button.classList.remove('registered');
    } else {
        button.textContent = 'Registered';
        button.classList.add('registered');
    }
}

// Calendar Popup
document.querySelector('.view-all').addEventListener('click', function(e) {
    if (e.target.textContent === 'View Calendar') {
        e.preventDefault();
        document.getElementById('calendar-popup').style.display = 'block';
    }
});

document.querySelector('.close-calendar').addEventListener('click', function() {
    document.getElementById('calendar-popup').style.display = 'none';
});

// Close calendar when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('calendar-popup')) {
        document.getElementById('calendar-popup').style.display = 'none';
    }
}); 