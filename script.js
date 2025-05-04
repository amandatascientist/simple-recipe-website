// 0. Selected ingredients variable at the very top
let selectedIngredients = [];

// 1. Data/constants
const indianRecipeCategories = {
    north_indian: {
        ingredients: [
            "ghee", "butter", "cream", "yogurt", "paneer", "milk", "cashews", "almonds", "raisins",
            "wheat flour", "maida", "besan", "rice", "lentils", "chickpeas", "kidney beans",
            "potatoes", "cauliflower", "peas", "carrots", "beans", "onions", "tomatoes", "ginger",
            "garlic", "green chilies", "coriander leaves", "mint leaves", "fenugreek leaves",
            "cumin seeds", "coriander seeds", "mustard seeds", "fennel seeds", "turmeric",
            "red chili powder", "garam masala", "kasuri methi", "asafoetida", "cardamom",
            "cloves", "cinnamon", "bay leaves", "black pepper", "saffron", "rose water"
        ],
        dishes: [
            "Butter Chicken", "Paneer Butter Masala", "Dal Makhani", "Chole Bhature", "Rajma Chawal",
            "Aloo Paratha", "Gobi Paratha", "Methi Paratha", "Lachha Paratha", "Poori",
            "Samosa", "Kachori", "Chole Kulche", "Aloo Tikki", "Dahi Bhalla",
            "Pav Bhaji", "Chole Bhature", "Rajma Chawal", "Kadhi Pakora", "Aloo Gobi",
            "Baingan Bharta", "Malai Kofta", "Navratan Korma", "Shahi Paneer", "Mutter Paneer",
            "Dal Tadka", "Dal Fry", "Yellow Dal", "Masoor Dal", "Moong Dal",
            "Jeera Rice", "Vegetable Pulao", "Peas Pulao", "Kashmiri Pulao", "Biryani",
            "Naan", "Roti", "Tandoori Roti", "Missi Roti", "Phulka",
            "Gulab Jamun", "Rasmalai", "Rasgulla", "Jalebi", "Kheer",
            "Lassi", "Mango Lassi", "Masala Chai", "Kadhi Chawal", "Aloo Matar"
        ]
    },
    south_indian: {
        ingredients: [
            "rice", "idli rice", "dosa rice", "urad dal", "toor dal", "chana dal", "moong dal",
            "coconut", "coconut oil", "curry leaves", "mustard seeds", "urad dal", "chana dal",
            "red chilies", "green chilies", "ginger", "garlic", "tamarind", "jaggery",
            "fenugreek seeds", "asafoetida", "turmeric", "coriander seeds", "cumin seeds",
            "black pepper", "coconut milk", "yogurt", "curd", "buttermilk",
            "vegetables", "lentils", "spices", "herbs", "ghee", "oil"
        ],
        dishes: [
            "Idli", "Dosa", "Vada", "Sambar", "Rasam",
            "Upma", "Pongal", "Bisi Bele Bath", "Puliyogare", "Tamarind Rice",
            "Coconut Rice", "Lemon Rice", "Curd Rice", "Tomato Rice", "Vegetable Rice",
            "Medu Vada", "Masala Dosa", "Rava Dosa", "Set Dosa", "Neer Dosa",
            "Appam", "Puttu", "Idiyappam", "Paniyaram", "Adai",
            "Avial", "Kootu", "Poricha Kuzhambu", "Vatha Kuzhambu", "Sambar",
            "Rasam", "Pachadi", "Thayir Pachadi", "Kootu", "Poricha Kuzhambu",
            "Payasam", "Kesari", "Mysore Pak", "Laddu", "Halwa"
        ]
    },
    east_indian: {
        ingredients: [
            "rice", "mustard oil", "mustard seeds", "poppy seeds", "panch phoron",
            "bay leaves", "green chilies", "ginger", "garlic", "turmeric",
            "red chili powder", "coriander powder", "cumin powder", "garam masala",
            "curd", "yogurt", "milk", "cream", "ghee",
            "vegetables", "fish", "prawns", "chicken", "mutton",
            "lentils", "spices", "herbs", "coconut", "jaggery"
        ],
        dishes: [
            "Macher Jhol", "Chingri Malai Curry", "Kosha Mangsho", "Aloo Posto",
            "Shukto", "Cholar Dal", "Luchi", "Puri", "Kachori",
            "Rasgulla", "Sandesh", "Mishti Doi", "Cham Cham", "Rasmalai",
            "Pitha", "Puli Pitha", "Naru", "Patishapta", "Malpua",
            "Macher Paturi", "Doi Maach", "Chingri Macher Malai Curry", "Kosha Mangsho",
            "Aloo Dum", "Posto Bora", "Shukto", "Cholar Dal", "Luchi",
            "Kachori", "Rasgulla", "Sandesh", "Mishti Doi"
        ]
    },
    west_indian: {
        ingredients: [
            "rice", "wheat", "jowar", "bajra", "ragi",
            "coconut", "coconut milk", "tamarind", "jaggery", "kokum",
            "curry leaves", "mustard seeds", "cumin seeds", "fenugreek seeds",
            "turmeric", "red chili powder", "coriander powder", "cumin powder",
            "garam masala", "god masala", "kala masala", "malvani masala",
            "vegetables", "fish", "prawns", "chicken", "mutton",
            "lentils", "spices", "herbs", "oil", "ghee"
        ],
        dishes: [
            "Vada Pav", "Pav Bhaji", "Misal Pav", "Poha", "Upma",
            "Sabudana Khichdi", "Thalipeeth", "Pithla Bhakri", "Zunka Bhakri",
            "Puran Poli", "Modak", "Shrikhand", "Basundi", "Aamras",
            "Sol Kadhi", "Kokum Sharbat", "Aam Panna", "Nimbu Pani",
            "Bombay Duck Fry", "Pomfret Fry", "Surmai Fry", "Kolambi Fry",
            "Chicken Kolhapuri", "Mutton Sukka", "Prawns Sukka", "Fish Curry",
            "Dal Tadka", "Yellow Dal", "Masoor Dal", "Moong Dal"
        ]
    },
    street_food: {
        ingredients: [
            "potatoes", "onions", "tomatoes", "green chilies", "ginger",
            "garlic", "coriander leaves", "mint leaves", "lemon", "tamarind",
            "chickpea flour", "rice flour", "wheat flour", "maida", "semolina",
            "yogurt", "curd", "buttermilk", "paneer", "cheese",
            "spices", "herbs", "oil", "ghee", "butter",
            "chutneys", "sauces", "pickles", "papad", "seeds"
        ],
        dishes: [
            "Pani Puri", "Bhel Puri", "Sev Puri", "Dahi Puri", "Ragda Pattice",
            "Vada Pav", "Dabeli", "Pav Bhaji", "Misal Pav", "Frankie",
            "Kathi Roll", "Chole Bhature", "Aloo Tikki", "Dahi Bhalla", "Samosa",
            "Kachori", "Poha", "Upma", "Idli", "Dosa",
            "Vada", "Bonda", "Pakora", "Bhajiya", "Cutlet",
            "Chaat", "Papdi Chaat", "Dahi Vada", "Aloo Chaat", "Fruit Chaat"
        ]
    },
    sweets: {
        ingredients: [
            "milk", "cream", "khoya", "paneer", "ghee",
            "sugar", "jaggery", "honey", "cardamom", "saffron",
            "nuts", "dry fruits", "flour", "semolina", "vermicelli",
            "coconut", "rose water", "kesar", "elaichi", "vanilla",
            "chocolate", "cocoa", "butter", "cream", "yogurt"
        ],
        dishes: [
            "Gulab Jamun", "Rasgulla", "Rasmalai", "Sandesh", "Mishti Doi",
            "Kheer", "Phirni", "Sevaiyan", "Halwa", "Laddu",
            "Barfi", "Peda", "Kaju Katli", "Besan Laddu", "Moti Pak",
            "Jalebi", "Imarti", "Malpua", "Shrikhand", "Basundi",
            "Aamras", "Mango Shrikhand", "Kalakand", "Milk Cake", "Rabri",
            "Gajar Halwa", "Moong Dal Halwa", "Suji Halwa", "Besan Halwa", "Badam Halwa"
        ]
    }
};

// 2. Functions
function generateIndianInstructions(ingredients, category, dish) {
    const baseSteps = {
        north_indian: [
            {
                step: "Prepare all ingredients",
                time: "15 minutes",
                explanation: "Wash and chop all vegetables. Soak lentils if using. Measure all spices and keep them ready. Prepare ginger-garlic paste if needed."
            },
            {
                step: "Heat oil/ghee and add whole spices",
                time: "2-3 minutes",
                explanation: "Heat oil or ghee in a kadai or pan. Add whole spices like cumin seeds, mustard seeds, bay leaves, and let them splutter to release their aroma."
            },
            {
                step: "Sauté onions and aromatics",
                time: "5-7 minutes",
                explanation: "Add chopped onions and cook until golden brown. Add ginger-garlic paste and green chilies. Cook until raw smell disappears."
            },
            {
                step: "Add main ingredients and spices",
                time: "10-15 minutes",
                explanation: "Add main vegetables or meat along with ground spices. Cook until ingredients are well coated with spices and start to soften."
            },
            {
                step: "Add liquids and simmer",
                time: "15-20 minutes",
                explanation: "Add water, stock, or gravy base. Cover and simmer on low heat until ingredients are cooked through and flavors are well combined."
            },
            {
                step: "Finish with garnishes",
                time: "2 minutes",
                explanation: "Add fresh coriander leaves, cream, or other garnishes. Adjust seasoning if needed."
            },
            {
                step: "Serve hot",
                time: "2 minutes",
                explanation: "Serve immediately with roti, naan, or rice. Garnish with additional fresh herbs if desired."
            }
        ],
        south_indian: [
            {
                step: "Prepare all ingredients",
                time: "15 minutes",
                explanation: "Soak rice and lentils if making idli/dosa. Chop vegetables. Prepare coconut paste or grated coconut. Keep spices ready."
            },
            {
                step: "Temper spices",
                time: "2-3 minutes",
                explanation: "Heat oil in a pan. Add mustard seeds, urad dal, chana dal, curry leaves, and other tempering ingredients. Let them splutter."
            },
            {
                step: "Cook main ingredients",
                time: "10-15 minutes",
                explanation: "Add main ingredients and cook with basic spices. For sambar, cook dal separately and combine with vegetables."
            },
            {
                step: "Add coconut and final spices",
                time: "5 minutes",
                explanation: "Add coconut paste or grated coconut. Add final spices and adjust consistency with water if needed."
            },
            {
                step: "Prepare accompaniments",
                time: "10 minutes",
                explanation: "Make coconut chutney, tomato chutney, or other accompaniments while the main dish cooks."
            },
            {
                step: "Final touches",
                time: "2 minutes",
                explanation: "Add final garnishes like coriander leaves. Adjust seasoning and consistency."
            },
            {
                step: "Serve hot",
                time: "2 minutes",
                explanation: "Serve immediately with idli, dosa, rice, or other accompaniments. Add ghee if desired."
            }
        ],
        east_indian: [
            {
                step: "Prepare all ingredients",
                time: "15 minutes",
                explanation: "Clean and prepare fish or meat if using. Chop vegetables. Make mustard paste if needed. Keep spices ready."
            },
            {
                step: "Make mustard paste",
                time: "5 minutes",
                explanation: "Grind mustard seeds with water to make a smooth paste. This is essential for authentic Bengali flavors."
            },
            {
                step: "Cook main ingredients",
                time: "15-20 minutes",
                explanation: "Cook main ingredients with basic spices. For fish, cook gently to prevent breaking. For meat, cook until tender."
            },
            {
                step: "Add mustard paste and other flavors",
                time: "5 minutes",
                explanation: "Add mustard paste, poppy seed paste, or other characteristic flavors. Cook gently to preserve flavors."
            },
            {
                step: "Adjust consistency",
                time: "5 minutes",
                explanation: "Add water or coconut milk to achieve desired consistency. Simmer gently to combine flavors."
            },
            {
                step: "Final touches",
                time: "2 minutes",
                explanation: "Add final garnishes and adjust seasoning. Add a drizzle of mustard oil if desired."
            },
            {
                step: "Serve hot",
                time: "2 minutes",
                explanation: "Serve immediately with steamed rice. Add a wedge of lemon if desired."
            }
        ],
        west_indian: [
            {
                step: "Prepare all ingredients",
                time: "15 minutes",
                explanation: "Clean and prepare main ingredients. Make coconut paste if needed. Keep spices and masalas ready."
            },
            {
                step: "Make masala paste",
                time: "5 minutes",
                explanation: "Grind fresh spices and coconut to make a smooth paste. This forms the base of many Maharashtrian dishes."
            },
            {
                step: "Cook main ingredients",
                time: "15-20 minutes",
                explanation: "Cook main ingredients with basic spices. For seafood, cook gently. For vegetables, cook until tender."
            },
            {
                step: "Add masala paste",
                time: "5 minutes",
                explanation: "Add the prepared masala paste and cook until oil separates. This develops deep flavors."
            },
            {
                step: "Add kokum or tamarind",
                time: "5 minutes",
                explanation: "Add kokum or tamarind for tanginess. Adjust sourness to taste."
            },
            {
                step: "Final touches",
                time: "2 minutes",
                explanation: "Add fresh coriander leaves and adjust seasoning. Add a drizzle of coconut oil if desired."
            },
            {
                step: "Serve hot",
                time: "2 minutes",
                explanation: "Serve immediately with bhakri, rice, or other accompaniments. Add fresh coconut if desired."
            }
        ],
        street_food: [
            {
                step: "Prepare all ingredients",
                time: "15 minutes",
                explanation: "Chop vegetables finely. Prepare chutneys and sauces. Keep all components ready for quick assembly."
            },
            {
                step: "Make chutneys",
                time: "10 minutes",
                explanation: "Prepare green chutney, tamarind chutney, and other sauces. These are essential for street food flavors."
            },
            {
                step: "Prepare main components",
                time: "15-20 minutes",
                explanation: "Cook potatoes, chickpeas, or other main ingredients. Prepare puris or other bases if needed."
            },
            {
                step: "Assemble components",
                time: "5 minutes",
                explanation: "Layer ingredients carefully. Add chutneys and sauces in the right order for best flavor."
            },
            {
                step: "Add garnishes",
                time: "2 minutes",
                explanation: "Add sev, chopped onions, coriander leaves, and other garnishes. These add texture and freshness."
            },
            {
                step: "Final touches",
                time: "1 minute",
                explanation: "Add final garnishes and a squeeze of lemon. Adjust seasoning if needed."
            },
            {
                step: "Serve immediately",
                time: "1 minute",
                explanation: "Serve immediately while fresh and crisp. Add additional chutneys on the side if desired."
            }
        ],
        sweets: [
            {
                step: "Prepare all ingredients",
                time: "15 minutes",
                explanation: "Measure all ingredients precisely. Soak ingredients if needed. Keep utensils ready."
            },
            {
                step: "Make sugar syrup",
                time: "10 minutes",
                explanation: "Prepare sugar syrup to the correct consistency. This is crucial for many Indian sweets."
            },
            {
                step: "Prepare main mixture",
                time: "15-20 minutes",
                explanation: "Cook main ingredients like khoya, milk, or flour until the right consistency is achieved."
            },
            {
                step: "Shape and form",
                time: "10 minutes",
                explanation: "Shape the mixture into desired forms while still warm. This step requires quick work."
            },
            {
                step: "Add flavorings",
                time: "5 minutes",
                explanation: "Add cardamom, saffron, or other flavorings. Mix well to distribute flavors evenly."
            },
            {
                step: "Cool and set",
                time: "30 minutes",
                explanation: "Allow sweets to cool and set properly. This ensures the right texture."
            },
            {
                step: "Garnish and serve",
                time: "2 minutes",
                explanation: "Garnish with nuts, silver leaf, or other decorations. Serve at room temperature."
            }
        ]
    };
    
    return baseSteps[category] || [
        {
            step: "Prepare all ingredients",
            time: "15 minutes",
            explanation: "Wash, chop, and measure all ingredients. Keep spices and utensils ready."
        },
        {
            step: "Cook main ingredients",
            time: "15-20 minutes",
            explanation: "Cook the main ingredients with basic spices until tender."
        },
        {
            step: "Add spices and seasonings",
            time: "5 minutes",
            explanation: "Add ground spices and adjust seasoning to taste."
        },
        {
            step: "Combine all components",
            time: "5 minutes",
            explanation: "Bring all elements together and cook until flavors combine."
        },
        {
            step: "Adjust consistency",
            time: "5 minutes",
            explanation: "Add water or other liquids to achieve desired consistency."
        },
        {
            step: "Add garnishes",
            time: "2 minutes",
            explanation: "Add fresh herbs and final garnishes."
        },
        {
            step: "Serve hot",
            time: "2 minutes",
            explanation: "Serve immediately with appropriate accompaniments."
        }
    ];
}

function generateIndianRecipes() {
    const recipes = [];
    const recipeCount = 500;
    
    for (let i = 0; i < recipeCount; i++) {
        // Randomly select a category
        const categories = Object.keys(indianRecipeCategories);
        const category = categories[Math.floor(Math.random() * categories.length)];
        
        // Get base ingredients for the category
        const baseIngredients = [...indianRecipeCategories[category].ingredients];
        
        // Get dishes for the category
        const dishes = indianRecipeCategories[category].dishes;
        const dish = dishes[Math.floor(Math.random() * dishes.length)];
        
        // Add some random common ingredients
        const commonIngredients = ["salt", "water", "oil", "ghee", "lemon", "curry leaves", "coriander leaves"];
        const additionalIngredients = commonIngredients.slice(0, Math.floor(Math.random() * 3) + 2);
        
        // Combine ingredients
        const allIngredients = [...baseIngredients, ...additionalIngredients];
        
        // Randomly select 5-10 ingredients for this recipe
        const recipeIngredients = [];
        const ingredientCount = Math.floor(Math.random() * 6) + 5;
        for (let j = 0; j < ingredientCount; j++) {
            const randomIndex = Math.floor(Math.random() * allIngredients.length);
            recipeIngredients.push(allIngredients[randomIndex]);
        }
        
        // Generate recipe details
        const recipe = {
            id: i + 1,
            title: dish,
            description: `A delicious ${category.replace('_', ' ')} ${dish.toLowerCase()} made with authentic Indian flavors`,
            category: category,
            subCategory: "indian",
            ingredients: [...new Set(recipeIngredients)],
            instructions: generateIndianInstructions(recipeIngredients, category, dish),
            totalTime: generateIndianInstructions(recipeIngredients, category, dish).reduce((acc, step) => {
                const time = parseInt(step.time);
                return acc + (isNaN(time) ? 0 : time);
            }, 0) + " minutes",
            difficulty: ["Easy", "Medium", "Hard"][Math.floor(Math.random() * 3)],
            serves: Math.floor(Math.random() * 4) + 2
        };
        
        recipes.push(recipe);
    }
    
    return recipes;
}

// Add the missing generateRecipeDatabase function for other cuisines
function generateRecipeDatabase() {
    // Use your previous recipeCategories object for other cuisines
    const recipeCategories = {
        italian: [
            "pasta", "tomatoes", "olive oil", "garlic", "basil", "oregano", "cheese", "mushrooms", 
            "bell peppers", "zucchini", "eggplant", "artichokes", "olives", "capers", "anchovies",
            "prosciutto", "parmesan", "mozzarella", "ricotta", "white wine", "balsamic vinegar",
            "rosemary", "thyme", "sage", "pancetta", "sausage", "eggplant", "arugula", "spinach"
        ],
        chinese: [
            "rice", "noodles", "soy sauce", "ginger", "garlic", "green onions", "sesame oil", 
            "vegetables", "tofu", "chicken", "pork", "beef", "shrimp", "oyster sauce", "hoisin sauce",
            "rice vinegar", "five-spice powder", "star anise", "Sichuan pepper", "bok choy", "water chestnuts",
            "bamboo shoots", "wood ear mushrooms", "dried shiitake", "bean sprouts", "snow peas"
        ],
        // ... add other cuisines as needed ...
    };
    const database = [];
    const recipeCount = 100; // per cuisine
    Object.entries(recipeCategories).forEach(([category, ingredients]) => {
        for (let i = 0; i < recipeCount; i++) {
            // Randomly select 5-8 ingredients
            const recipeIngredients = [];
            const ingredientCount = Math.floor(Math.random() * 4) + 5;
            for (let j = 0; j < ingredientCount; j++) {
                const randomIndex = Math.floor(Math.random() * ingredients.length);
                recipeIngredients.push(ingredients[randomIndex]);
            }
            database.push({
                id: `${category}_${i+1}`,
                title: `${category.charAt(0).toUpperCase() + category.slice(1)} Recipe ${i+1}`,
                description: `A delicious ${category} dish with authentic flavors`,
                category: category,
                subCategory: category,
                ingredients: [...new Set(recipeIngredients)],
                instructions: [
                    {step: "Prepare all ingredients", time: "10 minutes", explanation: "Chop and measure all ingredients."},
                    {step: "Cook main ingredients", time: "15-20 minutes", explanation: "Cook the main ingredients using appropriate techniques."},
                    {step: "Add seasonings", time: "5 minutes", explanation: "Add herbs, spices, and other seasonings."},
                    {step: "Combine and finish", time: "5 minutes", explanation: "Bring all elements together and finish the dish."},
                    {step: "Serve", time: "2 minutes", explanation: "Serve hot and enjoy!"}
                ],
                totalTime: "35-40 minutes",
                difficulty: ["Easy", "Medium", "Hard"][Math.floor(Math.random() * 3)],
                serves: Math.floor(Math.random() * 4) + 2
            });
        }
    });
    return database;
}

// 3. Initialize database with all cuisines
const recipeDatabase = [
    ...generateIndianRecipes(),
    ...generateRecipeDatabase()
];

// 4. All other code
function addIngredient() {
    const input = document.getElementById('ingredientInput');
    const ingredient = input.value.trim().toLowerCase();
    
    if (ingredient && !selectedIngredients.includes(ingredient)) {
        selectedIngredients.push(ingredient);
        updateSelectedIngredients();
        input.value = '';
        input.focus(); // Keep focus on input for next ingredient
    }
}

function removeIngredient(ingredient) {
    selectedIngredients = selectedIngredients.filter(item => item !== ingredient);
    updateSelectedIngredients();
}

function updateSelectedIngredients() {
    const container = document.getElementById('selectedIngredients');
    container.innerHTML = '';
    
    selectedIngredients.forEach(ingredient => {
        const tag = document.createElement('div');
        tag.className = 'ingredient-tag';
        tag.innerHTML = `
            ${ingredient}
            <button onclick="removeIngredient('${ingredient}')">×</button>
        `;
        container.appendChild(tag);
    });
}

function generateRecipe() {
    if (selectedIngredients.length === 0) {
        alert('Please add at least one ingredient');
        return;
    }

    const recipeResult = document.getElementById('recipeResult');
    recipeResult.innerHTML = '<div class="loading">Finding the perfect recipes from all cuisines...</div>';

    // Group recipes by cuisine
    const cuisineGroups = {};
    recipeDatabase.forEach(recipe => {
        const cuisine = recipe.subCategory || recipe.category || 'Other';
        if (!cuisineGroups[cuisine]) cuisineGroups[cuisine] = [];
        // Calculate match count and missing ingredients
        const matchingIngredients = recipe.ingredients.filter(ing => 
            selectedIngredients.includes(ing.toLowerCase())
        );
        cuisineGroups[cuisine].push({
            ...recipe,
            matchCount: matchingIngredients.length,
            missingIngredients: recipe.ingredients.filter(ing => 
                !selectedIngredients.includes(ing.toLowerCase())
            )
        });
    });

    // For each cuisine, sort by matchCount and pick top 2
    const cuisineSections = Object.entries(cuisineGroups).map(([cuisine, recipes]) => {
        const topRecipes = recipes
            .filter(r => r.matchCount > 0)
            .sort((a, b) => b.matchCount - a.matchCount)
            .slice(0, 2);
        if (topRecipes.length === 0) return '';
        return `
            <div class="cuisine-section">
                <h2>${cuisine.charAt(0).toUpperCase() + cuisine.slice(1)} Recipes</h2>
                <div class="recipe-suggestions">
                    ${topRecipes.map(recipe => `
                        <div class="recipe-card">
                            <h3>${recipe.title}</h3>
                            <p>${recipe.description}</p>
                            <p class="category">Category: ${recipe.category}</p>
                            <p class="total-time">Total Time: ${recipe.totalTime}</p>
                            <h4>Ingredients:</h4>
                            <ul>
                                ${recipe.ingredients.map(ing => `
                                    <li class="${selectedIngredients.includes(ing.toLowerCase()) ? 'available' : 'missing'}">
                                        ${ing} ${selectedIngredients.includes(ing.toLowerCase()) ? '✓' : ''}
                                    </li>
                                `).join('')}
                            </ul>
                            <h4>Instructions:</h4>
                            <ol>
                                ${recipe.instructions.map(step => `
                                    <li>
                                        <strong>${step.step}</strong>
                                        <span class="time">(${step.time})</span>
                                        <p class="explanation">${step.explanation}</p>
                                    </li>
                                `).join('')}
                            </ol>
                            ${recipe.missingIngredients.length > 0 ? `
                                <div class="missing-ingredients">
                                    <h4>Missing Ingredients:</h4>
                                    <p>${recipe.missingIngredients.join(', ')}</p>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).filter(Boolean).join('');

    if (!cuisineSections) {
        recipeResult.innerHTML = `
            <div class="error">
                <h3>No recipes found</h3>
                <p>Try adding more ingredients or different ingredients.</p>
            </div>
        `;
        return;
    }

    recipeResult.innerHTML = cuisineSections;
}

// Allow adding ingredients by pressing Enter
const ingredientInput = document.getElementById('ingredientInput');
ingredientInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addIngredient();
    }
});

function scrollToGenerator() {
    document.getElementById('generate').scrollIntoView({ behavior: 'smooth' });
} 