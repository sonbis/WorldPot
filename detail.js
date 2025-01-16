// Detailed recipe data
const recipeDetails = {
    1: {  // Thai Basil Chicken
        title: "Thai Basil Chicken",
        category: "FEATURED RECIPES",
        chef: "Chef Maria",
        date: "January 15, 2024",
        image: "pictures/thai_chicken.jpg",
        description: "This aromatic Thai basil chicken recipe is a perfect blend of sweet, savory, and spicy flavors. Made with fresh Thai holy basil, tender chicken, and a rich sauce that's ready in minutes. A restaurant-quality dish you can easily make at home.",
        prepTime: "15 min",
        cookTime: "15 min",
        totalTime: "30 min",
        servings: "4 servings",
        ingredients: [
            "1 lb chicken breast, thinly sliced",
            "4 cloves garlic, minced",
            "2-3 Thai chilies, chopped",
            "1 cup Thai holy basil leaves",
            "2 tbsp vegetable oil",
            "3 tbsp oyster sauce",
            "1 tbsp soy sauce",
            "1 tbsp fish sauce",
            "1 tsp sugar",
            "1/4 cup chicken broth",
            "Steamed jasmine rice, for serving"
        ],
        steps: [
            "In a small bowl, combine oyster sauce, soy sauce, fish sauce, and sugar. Set aside.",
            "Heat oil in a large wok or skillet over high heat. Add minced garlic and Thai chilies, stir-fry for 30 seconds.",
            "Add sliced chicken and stir-fry until nearly cooked through, about 5-7 minutes.",
            "Pour in the sauce mixture and chicken broth. Cook for 2-3 minutes until the sauce thickens slightly.",
            "Add Thai basil leaves and stir until just wilted, about 30 seconds.",
            "Serve hot over steamed jasmine rice."
        ],
        notes: "For the best flavor, try to find Thai holy basil (bai gaprow), though regular Thai basil can be substituted. Adjust the number of chilies to your preferred spice level. The dish can also be made with ground chicken for a more traditional preparation.",
        tags: ["Thai Cuisine", "Spicy", "Quick & Easy", "Chicken", "Stir-Fry", "Asian Fusion"]
    },
    4: {  // Miso Carbonara
        title: "Miso Carbonara",
        category: "FEATURED RECIPES",
        chef: "Chef John",
        date: "January 18, 2024",
        image: "pictures/miso_carbonara.jpg",
        description: "A Japanese-Italian fusion that combines the umami richness of miso with the creamy decadence of traditional carbonara. This innovative dish maintains the soul of carbonara while adding a unique Asian twist.",
        prepTime: "15 min",
        cookTime: "15 min",
        totalTime: "30 min",
        servings: "4 servings",
        ingredients: [
            "400g spaghetti",
            "200g pancetta or guanciale, diced",
            "3 large eggs",
            "1 egg yolk",
            "3 tbsp white miso paste",
            "1 cup Pecorino Romano, freshly grated",
            "1/2 cup Parmigiano Reggiano, freshly grated",
            "2 tbsp olive oil",
            "Black pepper to taste",
            "Nori strips for garnish"
        ],
        steps: [
            "Bring a large pot of salted water to boil for the pasta.",
            "In a bowl, whisk together eggs, egg yolk, miso paste, and grated cheeses.",
            "Cook pancetta in olive oil until crispy. Reserve the rendered fat.",
            "Cook pasta al dente, reserve 1 cup pasta water before draining.",
            "Working quickly, toss hot pasta with pancetta and fat.",
            "Off heat, add egg-miso mixture, stirring vigorously.",
            "Add pasta water as needed for creamy consistency.",
            "Serve with extra cheese, black pepper, and nori strips."
        ],
        notes: "The key is to work quickly when combining the hot pasta with the egg mixture to create a creamy sauce without scrambling the eggs. The miso adds umami depth while complementing the traditional flavors.",
        tags: ["Italian-Japanese", "Fusion", "Pasta", "Comfort Food", "Innovative"]
    },
    5: {  // Tandoori Tacos
        title: "Tandoori Tacos",
        category: "FEATURED RECIPES",
        chef: "Chef Priya",
        date: "January 19, 2024",
        image: "pictures/tacos.jpg",
        description: "Experience the perfect marriage of Indian and Mexican cuisines with these flavorful tandoori tacos. Tender, spiced chicken wrapped in warm tortillas with a cooling mint-yogurt sauce and vibrant toppings.",
        prepTime: "30 min",
        cookTime: "25 min",
        totalTime: "55 min",
        servings: "6 servings",
        ingredients: [
            "For Tandoori Chicken:",
            "1kg chicken thighs, boneless",
            "1 cup yogurt",
            "2 tbsp tandoori masala",
            "2 tbsp ginger-garlic paste",
            "1 lemon, juiced",
            "Salt to taste",
            
            "For Assembly:",
            "12 corn tortillas",
            "1 red onion, finely sliced",
            "2 cups cabbage slaw",
            "Fresh cilantro",
            "Lime wedges",
            
            "For Mint-Yogurt Sauce:",
            "1 cup yogurt",
            "1/2 cup mint leaves",
            "1 green chili",
            "Salt to taste"
        ],
        steps: [
            "Marinate chicken in yogurt and spices for at least 4 hours.",
            "Blend mint-yogurt sauce ingredients until smooth.",
            "Grill chicken until charred and cooked through.",
            "Slice chicken into strips.",
            "Warm tortillas and assemble tacos with chicken, slaw, and sauce.",
            "Garnish with cilantro and serve with lime wedges."
        ],
        notes: "For extra authenticity, try grilling the marinated chicken in a tandoor or on a very hot grill to get that characteristic char. The mint-yogurt sauce can be made ahead of time.",
        tags: ["Indian-Mexican", "Fusion", "Grilling", "Spicy", "Street Food"]
    },
    6: {  // Sushi Burrito
        title: "Sushi Burrito",
        category: "FEATURED RECIPES",
        chef: "Chef Yuki",
        date: "January 20, 2024",
        image: "pictures/sushi_burrito.jpg",
        description: "A fusion masterpiece that combines the fresh flavors of sushi with the handheld convenience of a burrito. Packed with sashimi-grade fish, fresh vegetables, and sushi rice, all wrapped in nori.",
        prepTime: "30 min",
        cookTime: "20 min",
        totalTime: "50 min",
        servings: "4 servings",
        ingredients: [
            "4 cups sushi rice",
            "4 large nori sheets",
            "400g sashimi-grade salmon",
            "1 avocado, sliced",
            "1 cucumber, julienned",
            "2 cups mixed greens",
            "Pickled ginger",
            "Wasabi to taste",
            "Spicy mayo",
            "Soy sauce for serving",
            "Rice vinegar",
            "Sesame seeds"
        ],
        steps: [
            "Cook sushi rice according to package instructions, season with rice vinegar.",
            "Lay out nori sheet on bamboo mat, cover with even layer of rice.",
            "Layer fish, vegetables, and condiments in the center.",
            "Roll tightly using bamboo mat, seal edges with water.",
            "Slice in half diagonally.",
            "Serve with soy sauce, pickled ginger, and extra wasabi."
        ],
        notes: "Use the freshest fish possible. The rice should be at room temperature when rolling. Don't overfill or the burrito will be difficult to roll.",
        tags: ["Japanese-Mexican", "Fusion", "Seafood", "Fresh", "Innovative"]
    },
    7: {  // Curry Mac and Cheese
        title: "Curry Mac and Cheese",
        category: "FEATURED RECIPES",
        chef: "Chef Alex",
        date: "January 21, 2024",
        image: "pictures/curry_mac.jpg",
        description: "A comforting fusion of classic American mac and cheese with aromatic Indian curry spices. Creamy, rich, and warmly spiced, this dish brings together the best of both worlds.",
        prepTime: "15 min",
        cookTime: "25 min",
        totalTime: "40 min",
        servings: "6 servings",
        ingredients: [
            "500g elbow macaroni",
            "4 tbsp butter",
            "1/4 cup all-purpose flour",
            "4 cups whole milk",
            "2 tbsp curry powder",
            "1 tsp turmeric",
            "1 tsp garam masala",
            "2 cups sharp cheddar, grated",
            "1 cup gruyere, grated",
            "1/2 cup panko breadcrumbs",
            "Fresh cilantro for garnish",
            "Salt and pepper to taste"
        ],
        steps: [
            "Cook macaroni according to package instructions.",
            "Make roux with butter and flour, cook until golden.",
            "Gradually whisk in milk and spices, simmer until thickened.",
            "Add cheeses, stir until melted and smooth.",
            "Combine sauce with cooked pasta.",
            "Top with breadcrumbs and bake at 375°F for 20 minutes.",
            "Garnish with fresh cilantro before serving."
        ],
        notes: "Adjust curry powder to taste. For extra depth, try adding caramelized onions or roasted garlic. The sauce should be slightly looser than you want as it will thicken while baking.",
        tags: ["Indian-American", "Comfort Food", "Pasta", "Vegetarian", "Baked"]
    },
    8: {  // Pho French Dip
        title: "Pho French Dip",
        category: "FEATURED RECIPES",
        chef: "Chef Maria",
        date: "January 22, 2024",
        image: "pictures/pho_french.jpg",
        description: "A creative fusion combining the rich, aromatic broth of Vietnamese pho with the classic French dip sandwich. Tender beef, fresh herbs, and a side of pho-inspired dipping broth.",
        prepTime: "40 min",
        cookTime: "3 hours",
        totalTime: "3 hours 40 min",
        servings: "4 servings",
        ingredients: [
            "For the Broth:",
            "Beef bones",
            "Star anise",
            "Cinnamon stick",
            "Ginger, sliced",
            "Onion, charred",
            "Fish sauce",
            
            "For the Sandwich:",
            "French baguette",
            "Thinly sliced beef",
            "Bean sprouts",
            "Thai basil",
            "Hoisin sauce",
            "Sriracha"
        ],
        steps: [
            "Simmer bones and spices for 3 hours to make broth",
            "Strain and season broth with fish sauce",
            "Toast baguette until crispy",
            "Layer with sliced beef and fresh herbs",
            "Serve with hot pho broth for dipping"
        ],
        notes: "The key is in the broth - take time to develop those flavors. You can make the broth a day ahead.",
        tags: ["Vietnamese-French", "Fusion", "Sandwich", "Soup", "Beef"]
    },
    9: {  // Korean BBQ Tacos
        title: "Korean BBQ Tacos",
        category: "TRENDING RECIPES",
        chef: "Chef Sarah",
        date: "January 23, 2024",
        image: "pictures/bbq_tacos.jpg",
        description: "Street food fusion at its finest: tender Korean BBQ bulgogi beef wrapped in warm corn tortillas, topped with kimchi slaw and gochujang crema. A perfect blend of Korean and Mexican flavors.",
        prepTime: "30 min",
        cookTime: "15 min",
        totalTime: "45 min",
        servings: "6 servings",
        ingredients: [
            "For Bulgogi:",
            "1 lb thinly sliced beef",
            "1/4 cup soy sauce",
            "2 tbsp brown sugar",
            "2 tbsp sesame oil",
            "4 cloves garlic, minced",
            
            "For Kimchi Slaw:",
            "2 cups chopped kimchi",
            "2 cups shredded cabbage",
            "1/4 cup rice vinegar",
            
            "For Gochujang Crema:",
            "1/2 cup sour cream",
            "2 tbsp gochujang",
            
            "For Assembly:",
            "12 corn tortillas",
            "Sesame seeds",
            "Green onions",
            "Lime wedges"
        ],
        steps: [
            "Marinate beef in bulgogi sauce for 30 minutes",
            "Make kimchi slaw by combining ingredients",
            "Mix gochujang crema",
            "Grill beef until caramelized",
            "Warm tortillas",
            "Assemble tacos with beef, slaw, and crema",
            "Garnish with sesame seeds and green onions"
        ],
        notes: "For best results, use thinly sliced ribeye or sirloin. The kimchi should be well-fermented for optimal flavor.",
        tags: ["Korean-Mexican", "Fusion", "Street Food", "Spicy", "Grilling"]
    },
    10: {  // Mediterranean Sushi Roll
        title: "Mediterranean Sushi Roll",
        category: "TRENDING RECIPES",
        chef: "Chef Alex",
        date: "January 24, 2024",
        image: "pictures/sushi_roll.jpg",
        description: "A creative fusion roll combining Japanese sushi techniques with Mediterranean ingredients. Filled with grilled vegetables, feta cheese, and sun-dried tomatoes.",
        prepTime: "45 min",
        cookTime: "15 min",
        totalTime: "60 min",
        servings: "4 servings",
        ingredients: [
            "2 cups sushi rice",
            "4 nori sheets",
            "Grilled zucchini strips",
            "Roasted red peppers",
            "Sun-dried tomatoes",
            "Feta cheese",
            "Fresh basil leaves",
            "Kalamata olives, chopped",
            "Balsamic reduction",
            "Rice vinegar",
            "Olive oil"
        ],
        steps: [
            "Cook and season sushi rice",
            "Grill and slice vegetables",
            "Assemble rolls with Mediterranean ingredients",
            "Roll tightly using bamboo mat",
            "Slice into pieces",
            "Drizzle with balsamic reduction",
            "Garnish with fresh basil"
        ],
        notes: "Ensure vegetables are well-drained to prevent soggy rolls. The rice should be at room temperature for best rolling results.",
        tags: ["Mediterranean-Japanese", "Fusion", "Vegetarian", "Creative", "Fresh"]
    },
    11: {  // Banh Mi Burger
        title: "Banh Mi Burger",
        category: "TRENDING RECIPES",
        chef: "Chef Maria",
        date: "January 25, 2024",
        image: "pictures/banhmi_burger.jpg",
        description: "A fusion masterpiece combining the classic American burger with Vietnamese banh mi flavors. Juicy pork patty topped with pickled vegetables, cilantro, and spicy mayo on a crispy baguette roll.",
        prepTime: "30 min",
        cookTime: "15 min",
        totalTime: "45 min",
        servings: "4 servings",
        ingredients: [
            "For Patties:",
            "1 lb ground pork",
            "2 tbsp fish sauce",
            "2 tbsp lemongrass, minced",
            "2 cloves garlic, minced",
            
            "For Pickled Vegetables:",
            "2 carrots, julienned",
            "1 daikon, julienned",
            "Rice vinegar",
            "Sugar",
            
            "For Assembly:",
            "4 baguette rolls",
            "Fresh cilantro",
            "Jalapeño slices",
            "Sriracha mayo",
            "Cucumber slices",
            "Pâté (optional)"
        ],
        steps: [
            "Mix and form pork patties",
            "Quick pickle vegetables",
            "Grill patties until cooked",
            "Toast baguette rolls",
            "Assemble with toppings",
            "Serve immediately"
        ],
        tags: ["Vietnamese-American", "Fusion", "Burger", "Street Food"]
    },
    12: {  // Masala Ramen
        title: "Masala Ramen",
        category: "TRENDING RECIPES",
        chef: "Chef Priya",
        date: "January 26, 2024",
        image: "pictures/ramen.jpg",
        description: "An innovative fusion of Japanese ramen and Indian curry. Rich, spiced broth with classic ramen noodles, topped with curry-marinated chicken and Indian-inspired garnishes.",
        prepTime: "40 min",
        cookTime: "2 hours",
        totalTime: "2 hours 40 min",
        servings: "4 servings",
        ingredients: [
            "For Broth:",
            "Chicken bones",
            "Garam masala",
            "Curry leaves",
            "Onion, ginger, garlic",
            "Coconut milk",
            
            "For Toppings:",
            "Tandoori chicken",
            "Soft-boiled eggs",
            "Corn kernels",
            "Naan croutons",
            "Fresh cilantro",
            "Ramen noodles"
        ],
        steps: [
            "Prepare spiced broth",
            "Cook noodles",
            "Prepare toppings",
            "Assemble bowls",
            "Garnish and serve"
        ],
        tags: ["Indian-Japanese", "Fusion", "Soup", "Spicy", "Noodles"]
    },
    13: {  // Mediterranean Pizza
        title: "Mediterranean Pizza",
        category: "TRENDING RECIPES",
        chef: "Chef Alex",
        date: "January 27, 2024",
        image: "pictures/mediterranean_pizza.jpg",
        description: "A delightful fusion of Italian pizza and Mediterranean flavors, featuring za'atar-spiced crust, hummus base, and fresh Mediterranean toppings.",
        prepTime: "30 min",
        cookTime: "15 min",
        totalTime: "45 min",
        servings: "4 servings",
        ingredients: [
            "For Dough:",
            "3 cups bread flour",
            "1 tsp active dry yeast",
            "2 tbsp za'atar",
            "Olive oil",
            
            "For Toppings:",
            "1 cup hummus",
            "Cherry tomatoes",
            "Kalamata olives",
            "Red onion, sliced",
            "Feta cheese",
            "Fresh mint",
            "Pine nuts"
        ],
        steps: [
            "Prepare za'atar pizza dough",
            "Spread hummus as base",
            "Add toppings",
            "Bake at 450°F",
            "Garnish with fresh mint"
        ],
        tags: ["Mediterranean-Italian", "Fusion", "Vegetarian", "Pizza"]
    },
    14: {  // Tempura Fish Tacos
        title: "Tempura Fish Tacos",
        category: "TRENDING RECIPES",
        chef: "Chef Yuki",
        date: "January 28, 2024",
        image: "pictures/tempura_fish.jpg",
        description: "Light and crispy Japanese tempura-battered fish served in Mexican-style tacos with wasabi crema and Asian slaw.",
        prepTime: "25 min",
        cookTime: "20 min",
        totalTime: "45 min",
        servings: "6 servings",
        ingredients: [
            "For Tempura Fish:",
            "1 lb white fish fillets",
            "Tempura flour",
            "Ice-cold water",
            
            "For Asian Slaw:",
            "Napa cabbage",
            "Carrots",
            "Rice vinegar",
            "Sesame oil",
            
            "For Assembly:",
            "Corn tortillas",
            "Wasabi mayo",
            "Pickled ginger",
            "Cilantro",
            "Lime wedges"
        ],
        steps: [
            "Prepare tempura batter",
            "Fry fish until golden",
            "Make Asian slaw",
            "Warm tortillas",
            "Assemble tacos",
            "Serve with wasabi mayo"
        ],
        tags: ["Japanese-Mexican", "Fusion", "Seafood", "Crispy"]
    },
    15: {  // Moroccan Ramen
        title: "Moroccan Ramen",
        category: "SEASONAL RECIPES",
        chef: "Chef Maria",
        date: "January 29, 2024",
        description: "A warming fusion bowl combining Japanese ramen noodles with rich Moroccan spices and tender braised lamb.",
        prepTime: "30 min",
        cookTime: "2 hours",
        totalTime: "2.5 hours",
        servings: "4 servings",
        ingredients: [
            "For Broth:",
            "Lamb bones",
            "Ras el hanout",
            "Harissa paste",
            "Onions, garlic",
            "Tomato paste",
            
            "For Bowl:",
            "Ramen noodles",
            "Braised lamb",
            "Soft-boiled eggs",
            "Preserved lemon",
            "Fresh mint",
            "Chickpeas"
        ],
        steps: [
            "Prepare spiced broth",
            "Braise lamb",
            "Cook noodles",
            "Prepare toppings",
            "Assemble bowls"
        ],
        tags: ["Moroccan-Japanese", "Fusion", "Soup", "Winter", "Spicy"]
    },
    16: {  // Thai Green Curry Lasagna
        title: "Thai Green Curry Lasagna",
        category: "SEASONAL RECIPES",
        chef: "Chef Sarah",
        date: "January 30, 2024",
        description: "Italian comfort food meets Thai flavors in this innovative lasagna featuring green curry sauce, coconut milk béchamel, and Thai herbs.",
        prepTime: "45 min",
        cookTime: "1 hour",
        totalTime: "1 hour 45 min",
        servings: "8 servings",
        ingredients: [
            "Lasagna noodles",
            "Green curry paste",
            "Coconut milk",
            "Ground chicken",
            "Thai basil",
            "Kaffir lime leaves",
            "Mozzarella cheese",
            "Thai eggplants",
            "Bamboo shoots"
        ],
        steps: [
            "Make green curry sauce",
            "Prepare coconut béchamel",
            "Layer ingredients",
            "Bake until bubbly",
            "Rest before serving"
        ],
        tags: ["Thai-Italian", "Fusion", "Pasta", "Spicy", "Baked"]
    },
    17: {  // Autumn Pumpkin Ramen
        title: "Autumn Pumpkin Ramen",
        category: "SEASONAL RECIPES",
        chef: "Chef Yuki",
        date: "January 31, 2024",
        description: "A seasonal fusion bowl combining Japanese ramen with fall flavors. Rich pumpkin-based broth with classic ramen toppings and autumn spices.",
        prepTime: "30 min",
        cookTime: "1 hour",
        totalTime: "1.5 hours",
        servings: "4 servings",
        ingredients: [
            "For Broth:",
            "Pumpkin puree",
            "Dashi stock",
            "Miso paste",
            "Maple syrup",
            "Ginger, garlic",
            
            "For Bowl:",
            "Ramen noodles",
            "Chashu pork",
            "Soft-boiled eggs",
            "Roasted pumpkin seeds",
            "Crispy sage leaves",
            "Corn kernels"
        ],
        steps: [
            "Prepare pumpkin-miso broth",
            "Cook chashu pork",
            "Prepare toppings",
            "Cook noodles",
            "Assemble and garnish"
        ],
        tags: ["Japanese-American", "Fusion", "Seasonal", "Fall", "Soup"]
    },
    18: {  // Winter Curry Pot Pie
        title: "Winter Curry Pot Pie",
        category: "SEASONAL RECIPES",
        chef: "Chef Priya",
        date: "February 1, 2024",
        description: "A warming fusion of British pot pie and Indian curry, featuring tender chicken and vegetables in a rich curry sauce under flaky pastry.",
        prepTime: "45 min",
        cookTime: "1 hour",
        totalTime: "1 hour 45 min",
        servings: "6 servings",
        ingredients: [
            "For Filling:",
            "Chicken thighs",
            "Winter vegetables",
            "Curry powder",
            "Coconut milk",
            "Garam masala",
            
            "For Crust:",
            "Puff pastry",
            "Egg wash",
            "Nigella seeds"
        ],
        steps: [
            "Prepare curry filling",
            "Cook until tender",
            "Top with pastry",
            "Bake until golden",
            "Rest before serving"
        ],
        tags: ["Indian-British", "Fusion", "Winter", "Comfort Food", "Baked"]
    },
    19: {  // Spring Roll Lasagna
        title: "Spring Roll Lasagna",
        category: "SEASONAL RECIPES",
        chef: "Chef Maria",
        date: "February 2, 2024",
        description: "A creative fusion combining Vietnamese spring roll flavors with Italian lasagna structure. Fresh, light, and perfect for spring.",
        prepTime: "40 min",
        cookTime: "30 min",
        totalTime: "1 hour 10 min",
        servings: "8 servings",
        ingredients: [
            "Rice paper wrappers",
            "Rice noodles",
            "Shrimp",
            "Pork belly",
            "Fresh herbs",
            "Fish sauce",
            "Hoisin sauce",
            "Vegetables"
        ],
        steps: [
            "Layer rice paper",
            "Add fillings",
            "Create layers",
            "Steam gently",
            "Serve with sauces"
        ],
        tags: ["Vietnamese-Italian", "Fusion", "Spring", "Light", "Creative"]
    },
    20: {  // Summer Gazpacho Ramen
        title: "Summer Gazpacho Ramen",
        category: "SEASONAL RECIPES",
        chef: "Chef John",
        date: "February 3, 2024",
        description: "A refreshing summer fusion combining Spanish gazpacho with Japanese ramen elements. Served chilled with traditional ramen toppings.",
        prepTime: "30 min",
        cookTime: "15 min",
        totalTime: "45 min + chilling",
        servings: "4 servings",
        ingredients: [
            "Tomatoes",
            "Cucumber",
            "Red pepper",
            "Garlic",
            "Cold ramen noodles",
            "Soft-boiled eggs",
            "Nori",
            "Olive oil"
        ],
        steps: [
            "Blend gazpacho",
            "Chill thoroughly",
            "Prepare cold noodles",
            "Add toppings",
            "Serve immediately"
        ],
        tags: ["Spanish-Japanese", "Fusion", "Summer", "Cold", "Soup"]
    },
    21: {  // Harvest Buddha Bowl
        title: "Harvest Buddha Bowl",
        category: "SEASONAL RECIPES",
        chef: "Chef Sarah",
        date: "February 4, 2024",
        description: "A nourishing fusion bowl combining Asian-inspired dressings with seasonal fall vegetables and grains.",
        prepTime: "30 min",
        cookTime: "45 min",
        totalTime: "1 hour 15 min",
        servings: "4 servings",
        ingredients: [
            "Quinoa",
            "Roasted squash",
            "Kale",
            "Chickpeas",
            "Miso dressing",
            "Toasted seeds",
            "Pickled vegetables"
        ],
        steps: [
            "Cook quinoa",
            "Roast vegetables",
            "Prepare dressing",
            "Assemble bowls",
            "Add toppings"
        ],
        tags: ["Asian-Mediterranean", "Fusion", "Fall", "Healthy", "Vegetarian"]
    },
    22: {  // Winter Miso Stew
        title: "Winter Miso Stew",
        category: "SEASONAL RECIPES",
        chef: "Chef Yuki",
        date: "February 5, 2024",
        description: "A warming fusion of French beef stew and Japanese miso soup. Rich, hearty, and perfect for cold winter days.",
        prepTime: "30 min",
        cookTime: "3 hours",
        totalTime: "3.5 hours",
        servings: "6 servings",
        ingredients: [
            "Beef chuck",
            "Root vegetables",
            "Red wine",
            "Miso paste",
            "Dashi stock",
            "Mushrooms",
            "Pearl onions"
        ],
        steps: [
            "Brown beef",
            "Add vegetables",
            "Simmer slowly",
            "Add miso",
            "Finish with herbs"
        ],
        tags: ["Japanese-French", "Fusion", "Winter", "Stew", "Comfort Food"]
    },
    23: {  // Autumn Spice Udon
        title: "Autumn Spice Udon",
        category: "SEASONAL RECIPES",
        chef: "Chef Alex",
        date: "February 6, 2024",
        description: "Thick udon noodles in a warming sauce combining Japanese and Indian spices, perfect for fall weather.",
        prepTime: "20 min",
        cookTime: "25 min",
        totalTime: "45 min",
        servings: "4 servings",
        ingredients: [
            "Udon noodles",
            "Masala spices",
            "Mushrooms",
            "Spinach",
            "Tofu",
            "Coconut milk",
            "Green onions"
        ],
        steps: [
            "Cook udon",
            "Prepare sauce",
            "Combine ingredients",
            "Add toppings",
            "Serve hot"
        ],
        tags: ["Japanese-Indian", "Fusion", "Fall", "Noodles", "Vegetarian"]
    },
    24: {  // Spring Kimchi Paella
        title: "Spring Kimchi Paella",
        category: "SEASONAL RECIPES",
        chef: "Chef Maria",
        date: "February 7, 2024",
        description: "A vibrant fusion of Spanish paella and Korean flavors, featuring kimchi, seafood, and traditional paella rice.",
        prepTime: "30 min",
        cookTime: "45 min",
        totalTime: "1 hour 15 min",
        servings: "6 servings",
        ingredients: [
            "Bomba rice",
            "Kimchi",
            "Seafood mix",
            "Gochugaru",
            "Saffron",
            "Spring vegetables",
            "Fish stock"
        ],
        steps: [
            "Toast rice",
            "Add kimchi",
            "Layer seafood",
            "Create socarrat",
            "Rest and serve"
        ],
        tags: ["Korean-Spanish", "Fusion", "Spring", "Seafood", "Rice"]
    }
};

// Function to get recipe ID from URL
function getRecipeId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Function to populate recipe details
function populateRecipeDetails(recipeId) {
    const recipe = recipeDetails[recipeId];
    if (!recipe) {
        console.error('Recipe not found');
        return;
    }

    // Set default image if none provided
    const imagePath = recipe.image || 'pictures/recipes/default-recipe.jpg';
    document.getElementById('recipe-image').src = imagePath;
    document.getElementById('recipe-image').alt = recipe.title;
    
    // Update page title
    document.title = `${recipe.title} - WorldPot`;

    // Populate basic info
    document.getElementById('recipe-title').textContent = recipe.title;
    document.querySelector('.recipe-category').textContent = recipe.category;
    document.getElementById('recipe-chef').textContent = recipe.chef;
    document.getElementById('recipe-date').textContent = recipe.date;
    document.getElementById('recipe-description').textContent = recipe.description;

    // Populate time and servings
    document.getElementById('prep-time').textContent = recipe.prepTime;
    document.getElementById('cook-time').textContent = recipe.cookTime;
    document.getElementById('total-time').textContent = recipe.totalTime;
    document.getElementById('servings').textContent = recipe.servings;

    // Populate ingredients
    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = recipe.ingredients
        .map(ingredient => `<li>${ingredient}</li>`)
        .join('');

    // Populate preparation steps
    const preparationSteps = document.getElementById('preparation-steps');
    preparationSteps.innerHTML = recipe.steps
        .map(step => `<li>${step}</li>`)
        .join('');

    // Populate chef's notes
    document.getElementById('chef-notes').textContent = recipe.notes;

    // Populate tags
    const tagsContainer = document.getElementById('recipe-tags');
    tagsContainer.innerHTML = recipe.tags
        .map(tag => `<span class="tag">${tag}</span>`)
        .join('');
}

// Update recipe cards in recipes.js to link to detail page
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

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    const recipeId = getRecipeId();
    if (recipeId) {
        populateRecipeDetails(recipeId);
    }
});
