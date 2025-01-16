// Expanded recipe data with more entries for each section
const recipes = {
    featured: [
        {
            id: 1,
            title: 'Thai Basil Chicken',
            image: 'pictures/thai_chicken.jpg',
            rating: 4.8,
            time: '30 min',
            difficulty: 'Medium',
            chef: 'Chef Maria',
            cuisine: 'Thai Fusion'
        },
        {
            id: 2,
            title: 'Mediterranean Quinoa Bowl',
            image: 'pictures/quinoa_bowl.jpg',
            rating: 4.9,
            time: '25 min',
            difficulty: 'Easy',
            chef: 'Chef Alex',
            cuisine: 'Mediterranean'
        },
        {
            id: 3,
            title: 'Kimchi Grilled Cheese',
            image: 'pictures/kimchi_grilledcheese.jpg',
            rating: 4.7,
            time: '15 min',
            difficulty: 'Easy',
            chef: 'Chef Sarah',
            cuisine: 'Korean Fusion'
        },
        {
            id: 4,
            title: 'Miso Carbonara',
            image: 'pictures/miso_carbonara.jpg',
            rating: 4.9,
            time: '20 min',
            difficulty: 'Medium',
            chef: 'Chef John',
            cuisine: 'Italian-Japanese'
        },
        {
            id: 5,
            title: 'Tandoori Tacos',
            image: 'pictures/tacos.jpg',
            rating: 4.8,
            time: '35 min',
            difficulty: 'Medium',
            chef: 'Chef Priya',
            cuisine: 'Indian-Mexican'
        },
        {
            id: 6,
            title: 'Sushi Burrito',
            image: 'pictures/sushi_burrito.jpg',
            rating: 4.6,
            time: '40 min',
            difficulty: 'Medium',
            chef: 'Chef Yuki',
            cuisine: 'Japanese-Mexican'
        },
        {
            id: 7,
            title: 'Curry Mac and Cheese',
            image: 'pictures/curry_mac.jpg',
            rating: 4.7,
            time: '35 min',
            difficulty: 'Easy',
            chef: 'Chef Alex',
            cuisine: 'Indian-American'
        },
        {
            id: 8,
            title: 'Pho French Dip',
            image: 'pictures/pho_french.jpg',
            rating: 4.9,
            time: '45 min',
            difficulty: 'Medium',
            chef: 'Chef Maria',
            cuisine: 'Vietnamese-French'
        }
    ],
    trending: [
        {
            id: 9,
            title: 'Korean BBQ Tacos',
            image: 'pictures/bbq_tacos.jpg',
            rating: 4.7,
            time: '45 min',
            difficulty: 'Medium',
            chef: 'Chef Sarah',
            cuisine: 'Korean-Mexican'
        },
        {
            id: 10,
            title: 'Mediterranean Sushi Roll',
            image: 'pictures/sushi_roll.jpg',
            rating: 4.8,
            time: '50 min',
            difficulty: 'Hard',
            chef: 'Chef Yuki',
            cuisine: 'Japanese-Mediterranean'
        },
        {
            id: 11,
            title: 'Butter Chicken Pasta',
            image: 'pictures/chicken_pasta.jpg',
            rating: 4.9,
            time: '40 min',
            difficulty: 'Medium',
            chef: 'Chef Priya',
            cuisine: 'Indian-Italian'
        },
        {
            id: 12,
            title: 'Banh Mi Burger',
            image: 'pictures/banhmi_burger.jpg',
            rating: 4.6,
            time: '35 min',
            difficulty: 'Medium',
            chef: 'Chef John',
            cuisine: 'Vietnamese-American'
        },
        {
            id: 13,
            title: 'Moroccan Ramen',
            image: 'pictures/ramen.jpg',
            rating: 4.7,
            time: '55 min',
            difficulty: 'Hard',
            chef: 'Chef Maria',
            cuisine: 'Japanese-Moroccan'
        },
        {
            id: 14,
            title: 'Greek Sushi Bowl',
            image: 'pictures/greek_sushi.jpg',
            rating: 4.8,
            time: '30 min',
            difficulty: 'Easy',
            chef: 'Chef Alex',
            cuisine: 'Greek-Japanese'
        },
        {
            id: 15,
            title: 'Thai Pizza',
            image: 'pictures/thai_pizza.jpg',
            rating: 4.5,
            time: '40 min',
            difficulty: 'Medium',
            chef: 'Chef Sarah',
            cuisine: 'Thai-Italian'
        },
        {
            id: 16,
            title: 'Mexican Bibimbap',
            image: 'pictures/mexican_bimbimbap.jpg',
            rating: 4.7,
            time: '45 min',
            difficulty: 'Medium',
            chef: 'Chef Yuki',
            cuisine: 'Korean-Mexican'
        }
    ],
    seasonal: [
        {
            id: 17,
            title: 'Autumn Pumpkin Ramen',
            image: 'pictures/autumn_ramen.jpg',
            rating: 4.9,
            time: '50 min',
            difficulty: 'Medium',
            chef: 'Chef Yuki',
            cuisine: 'Japanese-American'
        },
        {
            id: 18,
            title: 'Winter Curry Pot Pie',
            image: 'pictures/winter_pie.jpg',
            rating: 4.8,
            time: '65 min',
            difficulty: 'Hard',
            chef: 'Chef Priya',
            cuisine: 'Indian-British'
        },
        {
            id: 19,
            title: 'Spring Roll Lasagna',
            image: 'pictures/spring_roll.jpg',
            rating: 4.7,
            time: '55 min',
            difficulty: 'Medium',
            chef: 'Chef Maria',
            cuisine: 'Vietnamese-Italian'
        },
        {
            id: 20,
            title: 'Summer Gazpacho Ramen',
            image: 'pictures/summer_ramen.jpg',
            rating: 4.6,
            time: '40 min',
            difficulty: 'Medium',
            chef: 'Chef John',
            cuisine: 'Spanish-Japanese'
        },
        {
            id: 21,
            title: 'Harvest Buddha Bowl',
            image: 'pictures/buddha_bowl.jpg',
            rating: 4.9,
            time: '35 min',
            difficulty: 'Easy',
            chef: 'Chef Sarah',
            cuisine: 'Asian-Mediterranean'
        },
        {
            id: 22,
            title: 'Winter Miso Stew',
            image: 'pictures/winter_miso.jpg',
            rating: 4.8,
            time: '45 min',
            difficulty: 'Medium',
            chef: 'Chef Yuki',
            cuisine: 'Japanese-French'
        },
        {
            id: 23,
            title: 'Autumn Spice Udon',
            image: 'pictures/autumn_udon.jpg',
            rating: 4.7,
            time: '40 min',
            difficulty: 'Medium',
            chef: 'Chef Alex',
            cuisine: 'Japanese-Indian'
        },
        {
            id: 24,
            title: 'Spring Kimchi Paella',
            image: 'pictures/spring_kimchi.jpg',
            rating: 4.8,
            time: '55 min',
            difficulty: 'Hard',
            chef: 'Chef Maria',
            cuisine: 'Korean-Spanish'
        }
    ]
};

// Function to create recipe cards
function createRecipeCard(recipe) {
    return `
        <a href="detail.html?id=${recipe.id}" class="recipe-card">
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="recipe-overlay">
                    <span class="cuisine-tag">${recipe.cuisine}</span>
                    <button class="save-recipe" aria-label="Save Recipe">
                        <i class="far fa-bookmark"></i>
                    </button>
                </div>
            </div>
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <div class="recipe-meta">
                    <span class="recipe-rating">
                        <i class="fas fa-star"></i> ${recipe.rating}
                    </span>
                    <span class="recipe-time">
                        <i class="far fa-clock"></i> ${recipe.time}
                    </span>
                    <span class="recipe-difficulty ${recipe.difficulty.toLowerCase()}">
                        ${recipe.difficulty}
                    </span>
                </div>
                <div class="recipe-chef">
                    <img src="pictures/chefs/${recipe.chef.toLowerCase().replace(' ', '-')}.jpg" 
                         alt="${recipe.chef}" 
                         class="chef-avatar">
                    <span>By ${recipe.chef}</span>
                </div>
            </div>
        </a>
    `;
}

// Function to populate recipe grids
function populateRecipeGrids() {
    // Populate featured recipes
    const featuredGrid = document.querySelector('.featured-recipes .recipes-grid');
    if (featuredGrid) {
        featuredGrid.innerHTML = recipes.featured.map(recipe => 
            createRecipeCard(recipe)
        ).join('');
    }

    // Populate trending recipes
    const trendingGrid = document.querySelector('.trending-recipes .recipes-grid');
    if (trendingGrid) {
        trendingGrid.innerHTML = recipes.trending.map(recipe => 
            createRecipeCard(recipe)
        ).join('');
    }

    // Populate seasonal recipes
    const seasonalGrid = document.querySelector('.seasonal-recipes .recipes-grid');
    if (seasonalGrid) {
        seasonalGrid.innerHTML = recipes.seasonal.map(recipe => 
            createRecipeCard(recipe)
        ).join('');
    }
}

// Handle sidebar category filtering
function handleCategoryFilter() {
    const categoryLinks = document.querySelectorAll('.category-group ul li a');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('href').replace('#', '');
            
            // Add active state to clicked category
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // In a real application, you would fetch recipes by category
            // For now, we'll just log the category
            console.log(`Filtering by category: ${category}`);
        });
    });
}

// Handle sticky sidebar
function handleStickySidebar() {
    const sidebar = document.querySelector('.recipes-sidebar');
    const header = document.querySelector('.main-header');
    
    if (sidebar && window.innerWidth > 768) {
        const headerHeight = header.offsetHeight;
        const sidebarTop = sidebar.offsetTop;
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > sidebarTop - headerHeight - 20) {
                sidebar.style.position = 'sticky';
                sidebar.style.top = `${headerHeight + 20}px`;
            } else {
                sidebar.style.position = 'static';
            }
        });
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    populateRecipeGrids();
    handleCategoryFilter();
    handleStickySidebar();
});
