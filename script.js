// Mobile Menu Handler
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuItems = document.querySelectorAll('.mobile-menu .menu-item');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            this.setAttribute('aria-expanded', 
                this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
            );
        });
    }

    // Handle mobile menu item clicks
    menuItems.forEach(item => {
        const link = item.querySelector('a');
        if (item.classList.contains('has-mega-menu')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                item.classList.toggle('active');
            });
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu && mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
});

// Mega Menu Handler
document.addEventListener('DOMContentLoaded', function() {
    const megaMenuItems = document.querySelectorAll('.has-mega-menu');
    
    megaMenuItems.forEach(item => {
        const megaMenu = item.querySelector('.mega-menu');
        const overlay = document.createElement('div');
        overlay.className = 'mega-menu-overlay';
        
        // Add overlay when hovering over menu item
        item.addEventListener('mouseenter', function() {
            document.body.appendChild(overlay);
            setTimeout(() => overlay.style.opacity = '1', 0);
        });
        
        // Remove overlay when leaving menu item
        item.addEventListener('mouseleave', function() {
            overlay.style.opacity = '0';
            setTimeout(() => {
                if (overlay.parentNode === document.body) {
                    document.body.removeChild(overlay);
                }
            }, 300);
        });
    });
});

// Header scroll behavior
let lastScroll = 0;
const header = document.querySelector('.main-header');
const headerHeight = header ? header.offsetHeight : 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= headerHeight) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scrolling down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scrolling up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Search bar enhancement
const searchBar = document.querySelector('.search-bar input');
if (searchBar) {
    searchBar.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    searchBar.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });

    // Add search suggestions
    searchBar.addEventListener('input', debounce(function() {
        // Implement search suggestions logic here
        console.log('Searching for:', this.value);
    }, 300));
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle Modal Open/Close
document.addEventListener('DOMContentLoaded', () => {
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const closeButtons = document.querySelectorAll('.modal .close');

    document.querySelector('.login').addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    document.querySelector('.signup').addEventListener('click', () => {
        signupModal.style.display = 'block';
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        });
    });

    window.addEventListener('click', e => {
        if (e.target === loginModal || e.target === signupModal) {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        }
    });

    // Switch between login and signup
    document.querySelector('.switch-to-signup').addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        signupModal.style.display = 'block';
    });

    document.querySelector('.switch-to-login').addEventListener('click', (e) => {
        e.preventDefault();
        signupModal.style.display = 'none';
        loginModal.style.display = 'block';
    });

    // Handle file upload in AI Recognition
    const uploadArea = document.querySelector('.upload-area');
    const fileInput = document.getElementById('image-upload');

    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', handleFileUpload);

    // Handle drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#65c051';
    });

    uploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#ddd';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) {
            fileInput.files = files;
            handleFileUpload();
        }
    });

    // Initialize all scroll containers
    const scrollContainers = document.querySelectorAll('.scroll-container');
    
    scrollContainers.forEach(container => {
        const wrapper = container.querySelector('.scroll-wrapper');
        const leftArrow = container.querySelector('.scroll-arrow.left');
        const rightArrow = container.querySelector('.scroll-arrow.right');
        
        // Scroll amount (width of one card plus gap)
        const scrollAmount = container.classList.contains('contributors-grid') ? 424 : 344; // card width + gap
        
        leftArrow.addEventListener('click', () => {
            wrapper.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        rightArrow.addEventListener('click', () => {
            wrapper.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Update arrow visibility
        const updateArrows = () => {
            leftArrow.style.opacity = wrapper.scrollLeft <= 0 ? '0.5' : '1';
            rightArrow.style.opacity = 
                wrapper.scrollLeft >= wrapper.scrollWidth - wrapper.clientWidth ? '0.5' : '1';
        };
        
        wrapper.addEventListener('scroll', updateArrows);
        window.addEventListener('resize', updateArrows);
        updateArrows(); // Initial check
    });

    const addTagBtn = document.querySelector('.add-tag-btn');
    const modal = document.querySelector('.add-tag-modal');
    const saveTagBtn = document.querySelector('.save-tag-btn');
    const tagInput = document.querySelector('#newTagInput');
    const tagsContainer = document.querySelector('.preference-tags');

    // Show modal when plus button is clicked
    addTagBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        tagInput.focus();
    });

    // Hide modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Add new tag
    saveTagBtn.addEventListener('click', addNewTag);
    tagInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addNewTag();
        }
    });

    function addNewTag() {
        const tagText = tagInput.value.trim();
        if (tagText) {
            const newTag = document.createElement('span');
            newTag.className = 'tag';
            newTag.textContent = tagText;
            
            // Insert before the add button
            tagsContainer.insertBefore(newTag, addTagBtn);
            
            // Clear input and hide modal
            tagInput.value = '';
            modal.style.display = 'none';
        }
    }
});

function handleFileUpload() {
    // Add your image processing logic here
    console.log('File uploaded');
}

// Carousel (Future Development Placeholder)
function initCarousel() {
    console.log('Initialize carousel logic here.');
}

function checkScrollPosition(wrapper, leftArrow, rightArrow) {
    // Check if scrolling is possible
    const scrollWidth = wrapper.scrollWidth - wrapper.clientWidth;
    
    // Disable left arrow if at start
    leftArrow.disabled = wrapper.scrollLeft <= 0;
    
    // Disable right arrow if at end
    rightArrow.disabled = Math.ceil(wrapper.scrollLeft) >= scrollWidth;
    
    // Add visual feedback
    leftArrow.style.opacity = leftArrow.disabled ? '0.5' : '1';
    rightArrow.style.opacity = rightArrow.disabled ? '0.5' : '1';
}

// Optional: Add keyboard navigation
document.addEventListener('keydown', (e) => {
    const activeContainer = document.querySelector('.scroll-container:hover');
    if (!activeContainer) return;
    
    const wrapper = activeContainer.querySelector('.scroll-wrapper');
    const scrollAmount = 320;
    
    if (e.key === 'ArrowLeft') {
        wrapper.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (e.key === 'ArrowRight') {
        wrapper.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
});

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Here you would typically validate with your backend
    // For now, we'll just store in localStorage
    localStorage.setItem('currentUser', JSON.stringify({
        email: email,
        isLoggedIn: true
    }));

    window.location.href = 'profile.html';
    return false;
}

function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const dietaryPreferences = Array.from(document.querySelectorAll('.checkbox-group input:checked'))
        .map(checkbox => checkbox.value);

    // Store user data
    localStorage.setItem('currentUser', JSON.stringify({
        name: name,
        email: email,
        dietaryPreferences: dietaryPreferences,
        isLoggedIn: true
    }));

    window.location.href = 'profile.html';
    return false;
}

// Check login status on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userNav = document.querySelector('.user-profile-nav');
    const ctaButtons = document.querySelector('.cta-buttons');

    if (currentUser && currentUser.isLoggedIn) {
        userNav.style.display = 'block';
        ctaButtons.style.display = 'none';
    } else {
        userNav.style.display = 'none';
        ctaButtons.style.display = 'flex';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const recipeGrid = document.querySelector('.recipe-grid');
    const scrollUpBtn = document.querySelector('.scroll-up');
    const scrollDownBtn = document.querySelector('.scroll-down');
    
    // Scroll amount for each button click
    const scrollAmount = 300;
    
    // Scroll up button click handler
    scrollUpBtn.addEventListener('click', () => {
        recipeGrid.scrollBy({
            top: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Scroll down button click handler
    scrollDownBtn.addEventListener('click', () => {
        recipeGrid.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Update button states based on scroll position
    function updateScrollButtons() {
        const { scrollTop, scrollHeight, clientHeight } = recipeGrid;
        
        // Disable up button if at top
        scrollUpBtn.disabled = scrollTop <= 0;
        
        // Disable down button if at bottom
        scrollDownBtn.disabled = scrollTop + clientHeight >= scrollHeight;
    }
    
    // Listen for scroll events to update button states
    recipeGrid.addEventListener('scroll', updateScrollButtons);
    
    // Initial button state check
    updateScrollButtons();
});

document.addEventListener('DOMContentLoaded', function() {
    // Add ingredient handler
    document.querySelector('.add-ingredient').addEventListener('click', function() {
        const ingredientsList = document.getElementById('ingredients-list');
        const newIngredient = document.createElement('div');
        newIngredient.className = 'ingredient-item';
        newIngredient.innerHTML = `
            <input type="text" placeholder="Add ingredient...">
            <button type="button" class="add-ingredient">
                <i class="fas fa-plus"></i>
            </button>
        `;
        ingredientsList.appendChild(newIngredient);
    });

    // Add instruction step handler
    document.querySelector('.add-step').addEventListener('click', function() {
        const instructionsList = document.getElementById('instructions-list');
        const newStep = document.createElement('div');
        const stepNumber = instructionsList.children.length + 1;
        newStep.className = 'instruction-item';
        newStep.innerHTML = `
            <span class="step-number">${stepNumber}</span>
            <textarea placeholder="Add instruction step..."></textarea>
            <button type="button" class="add-step">
                <i class="fas fa-plus"></i>
            </button>
        `;
        instructionsList.appendChild(newStep);
    });
});

// Image Detector Functionality
document.addEventListener('DOMContentLoaded', function() {
    const uploadArea = document.getElementById('upload-area');
    const imageInput = document.getElementById('image-input');
    const previewArea = document.getElementById('preview-area');
    const previewImage = document.getElementById('preview-image');
    const removeBtn = document.querySelector('.remove-btn');
    const loadingIndicator = document.querySelector('.loading-indicator');
    const resultsContent = document.getElementById('detection-results');

    // Handle file selection via button
    uploadArea.addEventListener('click', () => {
        imageInput.click();
    });

    // Handle drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#65c051';
    });

    uploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#ddd';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleImage(file);
        }
    });

    // Handle file input change
    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            handleImage(file);
        }
    });

    // Remove preview image
    removeBtn.addEventListener('click', () => {
        previewArea.style.display = 'none';
        uploadArea.style.display = 'block';
        resultsContent.innerHTML = '<p class="placeholder-text">Upload an image to see detection results</p>';
        imageInput.value = '';
    });

    function handleImage(file) {
        // Show preview
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImage.src = e.target.result;
            uploadArea.style.display = 'none';
            previewArea.style.display = 'block';
            
            // Convert image to base64
            const base64Image = e.target.result.split(',')[1];
            
            // Show loading indicator
            loadingIndicator.style.display = 'flex';
            resultsContent.innerHTML = '';

            // Make API call to Roboflow
            axios({
                method: "POST",
                url: "https://detect.roboflow.com/image-detector-huesx/3",
                params: {
                    api_key: "ypBmohztxZAFp0qzDa56"
                },
                data: base64Image,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(function(response) {
                loadingIndicator.style.display = 'none';
                displayResults(response.data);
            })
            .catch(function(error) {
                loadingIndicator.style.display = 'none';
                resultsContent.innerHTML = `<p class="error-text">Error: ${error.message}</p>`;
            });
        };
        reader.readAsDataURL(file);
    }

    function displayResults(data) {
        // Format and display the detection results
        let resultsHTML = '<div class="detection-results">';
        if (data.predictions && data.predictions.length > 0) {
            data.predictions.forEach(pred => {
                resultsHTML += `
                    <div class="detection-item">
                        <span class="detection-class">${pred.class}</span>
                        <span class="detection-confidence">${(pred.confidence * 100).toFixed(1)}%</span>
                    </div>
                `;
            });
        } else {
            resultsHTML += '<p>No objects detected in the image.</p>';
        }
        resultsHTML += '</div>';
        resultsContent.innerHTML = resultsHTML;
    }
});

// Recipe Canvas Functions
document.addEventListener('DOMContentLoaded', function() {
    // Clear Canvas functionality
    const clearCanvasBtn = document.querySelector('.tool-btn[title="Clear Canvas"]');
    if (clearCanvasBtn) {
        clearCanvasBtn.addEventListener('click', function() {
            // Reset all form inputs
            document.getElementById('recipe-title').value = '';
            document.getElementById('recipe-description').value = '';
            
            // Clear ingredients
            const ingredientsList = document.getElementById('ingredients-list');
            ingredientsList.innerHTML = `
                <div class="ingredient-item">
                    <input type="text" placeholder="Add ingredient...">
                    <button type="button" class="add-ingredient">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            `;

            // Clear instructions
            const instructionsList = document.getElementById('instructions-list');
            instructionsList.innerHTML = `
                <div class="instruction-item">
                    <span class="step-number">1</span>
                    <textarea placeholder="Add instruction step..."></textarea>
                    <button type="button" class="add-step">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            `;
        });
    }

    // Add Ingredient functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.add-ingredient')) {
            const ingredientsList = document.getElementById('ingredients-list');
            const newIngredient = document.createElement('div');
            newIngredient.className = 'ingredient-item';
            newIngredient.innerHTML = `
                <input type="text" placeholder="Add ingredient...">
                <button type="button" class="remove-ingredient">
                    <i class="fas fa-minus"></i>
                </button>
            `;
            ingredientsList.appendChild(newIngredient);
        }

        // Remove ingredient when minus button is clicked
        if (e.target.closest('.remove-ingredient')) {
            e.target.closest('.ingredient-item').remove();
        }
    });

    // Add Instruction functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.add-step')) {
            const instructionsList = document.getElementById('instructions-list');
            const stepCount = instructionsList.children.length + 1;
            const newInstruction = document.createElement('div');
            newInstruction.className = 'instruction-item';
            newInstruction.innerHTML = `
                <span class="step-number">${stepCount}</span>
                <textarea placeholder="Add instruction step..."></textarea>
                <button type="button" class="remove-step">
                    <i class="fas fa-minus"></i>
                </button>
            `;
            instructionsList.appendChild(newInstruction);
        }

        // Remove instruction when minus button is clicked
        if (e.target.closest('.remove-step')) {
            const instructionsList = document.getElementById('instructions-list');
            e.target.closest('.instruction-item').remove();
            // Update step numbers
            const steps = instructionsList.querySelectorAll('.step-number');
            steps.forEach((step, index) => {
                step.textContent = index + 1;
            });
        }
    });

    // Save Recipe functionality
    const saveRecipeBtn = document.querySelector('.tool-btn[title="Save Recipe"]');
    if (saveRecipeBtn) {
        saveRecipeBtn.addEventListener('click', function() {
            // Create notification
            const notification = document.createElement('div');
            notification.className = 'save-notification';
            notification.innerHTML = `
                <i class="fas fa-check-circle"></i>
                Recipe Saved
            `;
            
            // Add notification to the page
            document.body.appendChild(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.classList.add('fade-out');
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 3000);
        });
    }
});
