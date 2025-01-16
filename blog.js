// Recipe data object
const recipes = {
    'sushi-burrito': {
        title: 'Sushi Burrito',
        author: 'Chef John',
        image: 'assets/recipe1.jpg',
        rating: '4.8',
        likes: '234',
        prepTime: '30 mins',
        cookTime: '15 mins',
        servings: '4',
        difficulty: 'Intermediate',
        ingredients: [
            '2 cups sushi rice',
            '4 nori sheets',
            '1/2 lb sushi-grade tuna',
            '2 ripe avocados',
            '1 cucumber, julienned',
            '1/2 cup spicy mayo',
            '1/4 cup soy sauce',
            '2 tbsp rice vinegar',
            '1 tbsp wasabi paste',
            'Pickled ginger for serving'
        ],
        instructions: [
            'Cook sushi rice according to package instructions and season with rice vinegar.',
            'Lay out nori sheet on bamboo mat with the shiny side down.',
            'Spread rice evenly on nori, leaving 1 inch at the top edge bare.',
            'Layer tuna, avocado slices, and cucumber in the center.',
            'Add a line of spicy mayo along the filling.',
            'Using the bamboo mat, roll tightly while keeping the filling in place.',
            'Seal the edge with water and let rest for 2 minutes.',
            'Cut in half diagonally and serve with soy sauce and pickled ginger.'
        ],
        chefNotes: 'For best results, use fresh fish and properly seasoned sushi rice. The key to a good sushi burrito is in the rolling technique - keep it tight! You can also experiment with different fish or make it vegetarian with extra avocado and cucumber.'
    },
    'thai-pizza': {
        title: 'Thai Pizza',
        author: 'Chef Maria',
        image: 'assets/recipe2.jpg',
        rating: '4.9',
        likes: '312',
        prepTime: '45 mins',
        cookTime: '20 mins',
        servings: '6',
        difficulty: 'Advanced',
        ingredients: [
            '1 pizza dough',
            '1/2 cup peanut sauce',
            '2 cups mozzarella cheese',
            '1 cup cooked chicken, shredded',
            '1 red bell pepper, sliced',
            '1/2 cup carrots, julienned',
            '1/4 cup green onions',
            '1/2 cup bean sprouts',
            'Fresh cilantro',
            'Crushed peanuts',
            'Sriracha sauce for drizzling'
        ],
        instructions: [
            'Preheat oven to 450°F (230°C) with a pizza stone if available.',
            'Roll out pizza dough into a 14-inch circle.',
            'Spread peanut sauce evenly over the dough.',
            'Top with mozzarella cheese and shredded chicken.',
            'Add bell peppers and carrots.',
            'Bake for 15-20 minutes until crust is golden.',
            'Top with bean sprouts, green onions, cilantro, and crushed peanuts.',
            'Drizzle with Sriracha sauce before serving.'
        ],
        chefNotes: 'The key to this fusion pizza is balancing the Thai flavors with traditional pizza elements. Make sure not to overload the toppings to ensure the crust cooks properly. For extra authenticity, try making your own peanut sauce!'
    },
    'korean-tacos': {
        title: 'Korean Tacos',
        author: 'Chef Sarah',
        image: 'assets/recipe3.jpg',
        rating: '4.7',
        likes: '189',
        prepTime: '1 hour',
        cookTime: '30 mins',
        servings: '8',
        difficulty: 'Intermediate',
        ingredients: [
            '2 lbs Korean-style bulgogi beef',
            '16 corn tortillas',
            '2 cups kimchi, chopped',
            'Asian slaw mix',
            'Gochujang mayo',
            'Sesame seeds',
            'Green onions',
            'Lime wedges',
            'Cilantro for garnish'
        ],
        instructions: [
            'Marinate beef in bulgogi sauce for at least 1 hour.',
            'Cook beef in a hot skillet until caramelized.',
            'Warm tortillas on a griddle or in the oven.',
            'Assemble tacos with beef, kimchi, and slaw.',
            'Top with gochujang mayo and sesame seeds.',
            'Garnish with green onions and cilantro.',
            'Serve with lime wedges.'
        ],
        chefNotes: 'These tacos bring together the best of Korean and Mexican cuisines. The key is getting a good char on the bulgogi beef and balancing it with fresh, crunchy toppings. Make extra gochujang mayo - people always want more!'
    },
    'mediterranean-sushi': {
        title: 'Mediterranean Sushi',
        author: 'Chef Alex',
        image: 'assets/recipe4.jpg',
        rating: '4.6',
        likes: '156',
        prepTime: '40 mins',
        cookTime: '10 mins',
        servings: '4',
        difficulty: 'Advanced',
        ingredients: [
            '2 cups sushi rice',
            '4 nori sheets',
            'Grilled Mediterranean vegetables',
            'Feta cheese',
            'Kalamata olives',
            'Sun-dried tomatoes',
            'Fresh basil leaves',
            'Balsamic reduction',
            'Olive oil',
            'Greek seasoning'
        ],
        instructions: [
            'Prepare sushi rice and season with olive oil and Greek seasoning.',
            'Grill and slice Mediterranean vegetables.',
            'Layer nori with rice, leaving top edge bare.',
            'Add vegetables, feta, olives, and basil in center.',
            'Roll tightly using bamboo mat.',
            'Slice into 8 pieces.',
            'Drizzle with balsamic reduction.',
            'Garnish with fresh basil.'
        ],
        chefNotes: 'This fusion combines Mediterranean flavors with Japanese rolling techniques. The key is to not overfill and to choose vegetables that will hold their shape. The balsamic reduction adds the perfect finishing touch!'
    },
    'indian-pasta': {
        title: 'Indian Pasta',
        author: 'Chef Priya',
        image: 'assets/recipe5.jpg',
        rating: '4.8',
        likes: '245',
        prepTime: '25 mins',
        cookTime: '20 mins',
        servings: '6',
        difficulty: 'Easy',
        ingredients: [
            '1 lb penne pasta',
            '2 cups tikka masala sauce',
            'Grilled chicken tikka',
            'Red onions',
            'Bell peppers',
            'Fresh spinach',
            'Heavy cream',
            'Garam masala',
            'Fresh cilantro',
            'Garlic naan for serving'
        ],
        instructions: [
            'Cook pasta according to package instructions.',
            'Prepare chicken tikka and cut into bite-sized pieces.',
            'Sauté onions and peppers until softened.',
            'Add tikka masala sauce and cream.',
            'Mix in chicken and cooked pasta.',
            'Fold in fresh spinach until wilted.',
            'Garnish with cilantro.',
            'Serve with garlic naan.'
        ],
        chefNotes: 'This fusion dish brings together Italian pasta with Indian curry flavors. The sauce should be rich but not too heavy. Adding the spinach at the end keeps it fresh and adds nice color to the dish.'
    },
    'mexican-sushi': {
        title: 'Mexican Sushi Roll',
        author: 'Chef Carlos',
        image: 'assets/recipe6.jpg',
        rating: '4.9',
        likes: '278',
        prepTime: '35 mins',
        cookTime: '15 mins',
        servings: '4',
        difficulty: 'Intermediate',
        ingredients: [
            '2 cups sushi rice',
            '4 nori sheets',
            'Grilled carne asada',
            'Avocado',
            'Roasted corn',
            'Black beans',
            'Queso fresco',
            'Cilantro',
            'Chipotle mayo',
            'Lime wedges'
        ],
        instructions: [
            'Cook sushi rice and season with lime juice.',
            'Grill and slice carne asada thinly.',
            'Spread rice on nori sheets.',
            'Layer with carne asada, corn, and beans.',
            'Add avocado and queso fresco.',
            'Roll tightly with bamboo mat.',
            'Slice and top with chipotle mayo.',
            'Garnish with cilantro and serve with lime.'
        ],
        chefNotes: 'This Mexican-Japanese fusion combines the best of both worlds. The key is to season the rice with lime instead of rice vinegar and to not overcook the carne asada. The chipotle mayo adds a perfect spicy kick!'
    }
};

// Get recipe ID from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('recipe');

// Load recipe content
function loadRecipe(recipeId) {
    const recipe = recipes[recipeId];
    if (!recipe) return;

    document.getElementById('recipe-image').src = recipe.image;
    document.getElementById('recipe-title').textContent = recipe.title;
    document.getElementById('recipe-author').textContent = `by ${recipe.author}`;
    document.getElementById('recipe-rating').textContent = `⭐ ${recipe.rating}`;
    document.getElementById('recipe-likes').textContent = `❤️ ${recipe.likes}`;
    
    document.getElementById('prep-time').textContent = recipe.prepTime;
    document.getElementById('cook-time').textContent = recipe.cookTime;
    document.getElementById('servings').textContent = recipe.servings;
    document.getElementById('difficulty').textContent = recipe.difficulty;

    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = recipe.ingredients
        .map(ingredient => `<li>${ingredient}</li>`)
        .join('');

    const instructionsList = document.getElementById('instructions-list');
    instructionsList.innerHTML = recipe.instructions
        .map(instruction => `<li>${instruction}</li>`)
        .join('');

    document.getElementById('chef-notes').textContent = recipe.chefNotes;
}

// Load recipe when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadRecipe(recipeId);
}); 