document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser || !currentUser.isLoggedIn) {
        window.location.href = 'index.html';
        return;
    }

    // Update profile information
    document.getElementById('userName').textContent = currentUser.name || 'User';
    document.getElementById('userEmail').textContent = currentUser.email;

    // Update dietary preferences
    if (currentUser.dietaryPreferences) {
        const preferencesContainer = document.getElementById('dietaryPreferences');
        currentUser.dietaryPreferences.forEach(pref => {
            const tag = document.createElement('span');
            tag.className = 'preference-tag';
            tag.textContent = pref;
            preferencesContainer.appendChild(tag);
        });
    }
}); 