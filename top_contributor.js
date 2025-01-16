// Chef data object containing information for all contributors
const chefData = {
    'chef-maria': {
        name: 'Chef Maria',
        title: 'Asian Fusion Specialist',
        avatar: 'pictures/top_contributor_4.png',
        banner: 'pictures/banner.png',
        recipeCount: '32 Recipes',
        avgRating: '4.9 ★',
        totalLikes: '15.2K Likes',
        bio: 'Award-winning chef with over 15 years of experience specializing in Asian-Mediterranean fusion cuisine. Known for innovative combinations of Eastern and Western flavors, Maria has revolutionized fusion cooking with her unique approach to traditional recipes.',
        specialties: [
            { name: 'Asian Fusion', icon: '🍜' },
            { name: 'Mediterranean', icon: '🫒' },
            { name: 'Seafood', icon: '🦐' },
            { name: 'Dim Sum', icon: '🥟' }
        ],
        achievements: [
            { title: 'Master Chef 2023', icon: '🏆' },
            { title: 'Innovation Award', icon: '🌟' },
            { title: 'Top Contributor', icon: '👑' },
            { title: 'Recipe of the Year', icon: '🎯' }
        ]
    },
    'chef-alex': {
        name: 'Chef Alex',
        title: 'Mediterranean Expert',
        avatar: 'pictures/top_contributor_1.png',
        banner: 'pictures/banner.png',
        recipeCount: '28 Recipes',
        avgRating: '4.8 ★',
        totalLikes: '12.8K Likes',
        bio: 'Passionate about bringing Mediterranean flavors to modern dishes, Alex has spent a decade perfecting the art of fusion cuisine. Specializing in combining traditional Mediterranean techniques with contemporary cooking methods.',
        specialties: [
            { name: 'Mediterranean', icon: '🫒' },
            { name: 'Pasta', icon: '🍝' },
            { name: 'Seafood', icon: '🐟' },
            { name: 'Grilling', icon: '🔥' }
        ],
        achievements: [
            { title: 'Best Mediterranean', icon: '🏆' },
            { title: 'Community Choice', icon: '💫' },
            { title: 'Fusion Master', icon: '🎨' },
            { title: 'Top Rated', icon: '⭐' }
        ]
    },
    'chef-sarah': {
        name: 'Chef Sarah',
        title: 'Fusion Innovation',
        avatar: 'pictures/top_contributor_5.png',
        banner: 'pictures/banner.png',
        recipeCount: '25 Recipes',
        avgRating: '4.7 ★',
        totalLikes: '11.5K Likes',
        bio: 'A culinary innovator who specializes in creating unique fusion experiences with global influences. Sarah brings together unexpected flavor combinations that delight and surprise, drawing inspiration from her extensive travels.',
        specialties: [
            { name: 'Global Fusion', icon: '🌎' },
            { name: 'Modern Asian', icon: '🍱' },
            { name: 'Street Food', icon: '🥘' },
            { name: 'Desserts', icon: '🍰' }
        ],
        achievements: [
            { title: 'Innovation Star', icon: '🌟' },
            { title: 'Rising Chef', icon: '📈' },
            { title: 'Creativity Award', icon: '🎨' },
            { title: 'People\'s Choice', icon: '👥' }
        ]
    },
    'chef-john': {
        name: 'Chef John',
        title: 'Classic Fusion',
        avatar: 'pictures/top_contributor_2.png',
        banner: 'pictures/banner.png',
        recipeCount: '30 Recipes',
        avgRating: '4.9 ★',
        totalLikes: '14.3K Likes',
        bio: 'With a foundation in classical cooking and a passion for innovation, John excels at blending traditional techniques with modern fusion concepts. His approach brings a fresh perspective to time-honored recipes.',
        specialties: [
            { name: 'Classic Fusion', icon: '👨‍🍳' },
            { name: 'French', icon: '🥖' },
            { name: 'Italian', icon: '🍝' },
            { name: 'Modern Tech', icon: '🔬' }
        ],
        achievements: [
            { title: 'Classic Master', icon: '🏆' },
            { title: 'Technique Expert', icon: '⚜️' },
            { title: 'Most Popular', icon: '❤️' },
            { title: 'Elite Chef', icon: '👑' }
        ]
    },
    'chef-carlos': {
        name: 'Chef Carlos',
        title: 'Latin Fusion',
        avatar: 'pictures/top_contributor_3.png',
        banner: 'pictures/banner.png',
        recipeCount: '22 Recipes',
        avgRating: '4.8 ★',
        totalLikes: '10.9K Likes',
        bio: 'A master of Latin American cuisine who brings vibrant flavors to global fusion dishes. Carlos combines traditional Latin techniques with international influences to create exciting new flavor profiles.',
        specialties: [
            { name: 'Latin Fusion', icon: '🌮' },
            { name: 'Spice Master', icon: '🌶️' },
            { name: 'Grilling', icon: '🔥' },
            { name: 'Sauces', icon: '🥫' }
        ],
        achievements: [
            { title: 'Latin Star', icon: '⭐' },
            { title: 'Spice Master', icon: '🌶️' },
            { title: 'Flavor Expert', icon: '🏆' },
            { title: 'Community Favorite', icon: '💫' }
        ]
    },
    'chef-lisa': {
        name: 'Chef Lisa',
        title: 'Modern Asian Fusion',
        avatar: 'pictures/top_contributor_6.png',
        banner: 'pictures/banner.png',
        recipeCount: '27 Recipes',
        avgRating: '4.8 ★',
        totalLikes: '13.1K Likes',
        bio: 'Specializing in modern Asian fusion cuisine, Lisa combines traditional Asian cooking techniques with contemporary presentation and flavors. Her innovative approach has earned her recognition in the culinary world.',
        specialties: [
            { name: 'Asian Fusion', icon: '🍜' },
            { name: 'Modern Tech', icon: '🔬' },
            { name: 'Presentation', icon: '🎨' },
            { name: 'Molecular', icon: '⚗️' }
        ],
        achievements: [
            { title: 'Innovation Award', icon: '🏆' },
            { title: 'Modern Master', icon: '🌟' },
            { title: 'Top Creator', icon: '👑' },
            { title: 'Style Expert', icon: '🎨' }
        ]
    }
};

// Function to get chef ID from URL parameters
function getChefIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('chef');
}

// Sample featured recipes data (you can replace this with real data)
const featuredRecipes = {
    'chef-maria': [
        {
            title: 'Asian Fusion Salmon Bowl',
            image: 'pictures/buddha_bowl.jpg',
            rating: 4.9,
            time: '30 min'
        },
        {
            title: 'Mediterranean Sushi Roll',
            image: 'pictures/sushi_roll.jpg',
            rating: 4.8,
            time: '45 min'
        },
        {
            title: 'Spicy Dim Sum Platter',
            image: 'pictures/mexican_bimbimbap.jpg',
            rating: 4.7,
            time: '60 min'
        }
    ],
    // Add similar recipe arrays for other chefs
};

// Add this section to link contributors
const relatedChefs = {
    'chef-maria': ['chef-alex', 'chef-lisa', 'chef-sarah'],
    'chef-alex': ['chef-maria', 'chef-john', 'chef-carlos'],
    'chef-sarah': ['chef-maria', 'chef-lisa', 'chef-carlos'],
    'chef-john': ['chef-alex', 'chef-carlos', 'chef-lisa'],
    'chef-carlos': ['chef-alex', 'chef-sarah', 'chef-john'],
    'chef-lisa': ['chef-maria', 'chef-sarah', 'chef-john']
};

// Function to populate chef profile
function populateChefProfile() {
    const chefId = getChefIdFromUrl();
    const chef = chefData[chefId];

    if (!chef) {
        console.error('Chef not found');
        return;
    }

    // Set basic information
    document.getElementById('chef-avatar').src = chef.avatar;
    document.getElementById('chef-banner').src = chef.banner;
    document.getElementById('chef-name').textContent = chef.name;
    document.getElementById('chef-title').textContent = chef.title;
    document.getElementById('chef-bio').textContent = chef.bio;

    // Set stats
    document.getElementById('recipe-count').textContent = chef.recipeCount;
    document.getElementById('avg-rating').textContent = chef.avgRating;
    document.getElementById('total-likes').textContent = chef.totalLikes;

    // Populate specialties
    const specialtiesContainer = document.getElementById('specialties-list');
    specialtiesContainer.innerHTML = chef.specialties.map(specialty => `
        <div class="specialty-item">
            <span class="specialty-icon">${specialty.icon}</span>
            <span class="specialty-name">${specialty.name}</span>
        </div>
    `).join('');

    // Populate achievements
    const achievementsContainer = document.getElementById('achievements-list');
    achievementsContainer.innerHTML = chef.achievements.map(achievement => `
        <div class="achievement-item">
            <span class="achievement-icon">${achievement.icon}</span>
            <span class="achievement-title">${achievement.title}</span>
        </div>
    `).join('');

    // Populate featured recipes
    const recipesContainer = document.getElementById('recipes-grid');
    const chefRecipes = featuredRecipes[chefId] || [];
    
    recipesContainer.innerHTML = chefRecipes.map(recipe => `
        <div class="recipe-card">
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}">
            </div>
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <div class="recipe-meta">
                    <div class="recipe-rating">
                        ⭐ ${recipe.rating}
                    </div>
                    <div class="recipe-time">
                        ⏱️ ${recipe.time}
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Add related chefs section
    const relatedChefsContainer = document.createElement('div');
    relatedChefsContainer.className = 'related-chefs';
    
    const relatedTitle = document.createElement('h2');
    relatedTitle.textContent = 'More Amazing Chefs';
    relatedChefsContainer.appendChild(relatedTitle);

    const chefsGrid = document.createElement('div');
    chefsGrid.className = 'chefs-grid';
    
    // Get related chefs for current chef
    const relatedChefIds = relatedChefs[chefId] || [];
    
    chefsGrid.innerHTML = relatedChefIds.map(relatedId => {
        const relatedChef = chefData[relatedId];
        return `
            <a href="?chef=${relatedId}" class="chef-card">
                <div class="chef-card-avatar">
                    <img src="${relatedChef.avatar}" alt="${relatedChef.name}">
                </div>
                <div class="chef-card-info">
                    <h3>${relatedChef.name}</h3>
                    <p>${relatedChef.title}</p>
                    <div class="chef-card-stats">
                        <span>${relatedChef.recipeCount}</span>
                        <span>${relatedChef.avgRating}</span>
                    </div>
                </div>
            </a>
        `;
    }).join('');

    relatedChefsContainer.appendChild(chefsGrid);
    document.querySelector('.chef-content').appendChild(relatedChefsContainer);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', populateChefProfile); 