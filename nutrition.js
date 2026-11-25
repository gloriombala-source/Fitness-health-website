// All 5 recipes
const recipes = [
  {
    title: "Avocado Toast and Eggs",
    course: "breakfast",
    prep: "5 mins",
    cook: "5 mins",
    serves: "2",
    nutrition: ["-","321kcal","-","21g", "8%", "12g", "31%", "12g", "24%", "23g", "29%", "amber", "green", "green", "amber"],
    image: "images/avo-egg.png",
    alt: "Avocado slices and a fried egg on multigrain toast, presented as a breakfast dish. The simple food setting feels fresh and inviting; no text is visible.",
    desc: "A nutritious breakfast packed with protein, healthy fats and fibre to keep you energised.",
    ingredients: [
      "1 teaspoon butter",
      "2 large eggs",
      "2 slices multigrain bread",
      "1 ripe avocado, peeled and pitted",
      "1 teaspoon lemon juice, or to taste",
      "1 pinch cayenne pepper",
      "Sea salt to taste",
      "Ground black pepper to taste"
    ],
    method: [
      "1. Melt butter in a large skillet over medium-low heat.",
      "2. Crack eggs into skillet side-by-side and cook in butter until eggs are white on the bottom and firm enough to flip, 2 to 3 minutes.",
      "3. Flip eggs, try not to crack the yolk, and cook until egg is done, 2 to 5 minutes more.",
      "4. Toast bread slices to desired doneness, 3 to 5 minutes.",
      "5. Slice avocados and place on the toast.",
      "6. Sprinkle cayenne pepper and sea salt.",
      "7. Top with fried egg and season with sea salt and pepper."
    ]
  },
  {
    title: "Chicken Caesar Salad",
    course: "lunch",
    prep: "5 mins",
    cook: "15 mins",
    serves: "4",
    nutrition: ["1026kJ", "245kcal", "12%", "11g", "16%", "2.1g", "11%", "4g", "4%", "1.8g", "30%", "amber", "green", "green", "amber"],
    image: "images/caeser-salad.jpg",
    alt: "Chicken Caesar salad with lettuce, chicken, croutons, and Parmesan, served as a meal. The food presentation feels fresh and hearty; no text is visible.",
    desc: "A fresh, protein rich salad with grilled chicken, crisp lettuce, parmeasan and caesar dressing.",
    ingredients: [
      "1 medium ciabatta loaf (about 90g)",
      "30ml olive oil",
      "2 chicken breasts or 200g chicken cut in strips",
      "1 large cos lettuce (about 500g)",
      "6 tablespoons reduced-fat Caesar salad dressing (about 90ml)",
      "Parmesan shavings for serving"
    ],
    method: [
      "1. Preheat the oven to 200°C or use the airfryer on 180°C.",
      "2. Slice the ciabatta with a bread knife into large dice.",
      "3. Spread the bread over a baking tray and sprinkle over 20ml of olive oil.",
      "4. Bake for 8-10 minutes, turning regularly until evenly browned.",
      "5. Heat 10ml of olive oil in a frying pan over medium heat.",
      "6. Place the chicken in the pan and fry for 4 minutes on each side.",
      "7. Tear the lettuce into large pieces and place in a bowl.",
      "8. Scatter the chicken over the lettuce, along with the croutons.",
      "9. Drizzle the dressing over the salad and sprinkle with parmesan to serve."
    ]
  },
  {
    title: "Grilled Cajun Salmon",
    course: "dinner",
    prep: "10 mins",
    cook: "10 mins",
    serves: "4",
    nutrition: ["778kJ", "186kcal", "9%", "11.8g", "17%", "2g", "10%", "0g", "0%", "0.1g", "2%", "amber", "amber", "green", "green"],
    image: "images/grill-slamon.jpg",
    alt: "Grilled Cajun salmon fillets presented as a dinner dish. The simple food setting feels warm and appetizing; no text is visible.",
    desc: "A flavourful and protein rich meal packed with omega-3 fatty acids. Served with brown rice, couscous, or broccoli.",
    ingredients: [
      "400g / 14 oz. salmon fillets (around 4 fillets)",
      "1 teaspoon olive oil",
      "1 tablespoon Cajun spice mix"
    ],
    method: [
      "1. Preheat the grill for 10 minutes at a medium heat.",
      "2. Rub a little olive oil over each salmon fillet.",
      "3. Add Cajun spice to the salmon and leave to marinate in the fridge for 5 minutes.",
      "4. Cook the salmon gently for 8-10 minutes, turning occasionally.",
      "5. Before serving, check the salmon is fully cooked by cutting into the centre. Fish is fully cooked when the flesh is opaque and flaky."
    ]
  },
  {
    title: "Bruschetta",
    course: "snack",
    prep: "2 mins",
    cook: "3 mins",
    serves: "4",
    nutrition: ["423kJ", "101kcal", "5%", "2.5g", "4%", "0.4g", "2%", "1.6g", "2%", "0.4g", "7%", "amber", "green", "green", "amber"],
    image: "images/bruschetta.jpg",
    alt: "Toasted bread topped with chopped tomatoes and herbs, arranged on a serving plate. The food setting feels casual and inviting; no text is visible.",
    desc: "A light, Italien appetiser made with fresh tomatoes, olive oil and garlic on toasted bread. Perfect for a snack or starter!",
    ingredients: [
      "4 slices of thick crusty wholegrain bread",
      "1 clove of garlic, cut in half",
      "2 teaspoons of olive oil",
      "2 medium tomatoes"
    ],
    method: [
      "1. Cover each slice of bread with less than half a teaspoon of olive oil.",
      "2. Put the slices under the grill until golden brown.",
      "3. Chop the tomatoes and mix with the remaining olive oil.",
      "4. Season tomatoes with salt and pepper.",
      "5. Place loosely on top of the cooked bruschetta and enjoy!"
    ]
  },
  {
    title: "Fruit Crumble",
    course: "dessert",
    prep: "10 mins",
    cook: "40 mins",
    serves: "8",
    nutrition: ["848kJ", "201kcal", "10%", "4.3g", "6%", "2.1g", "11%", "16g", "18%", "0.005g", "0%", "amber", "amber", "amber", "green"],
    image: "images/fruit-crumble.jpg",
    alt: "Mixed berry crumble with a golden oat topping, presented as a warm dessert. The serving setting feels cozy and comforting; no text is visible.",
    desc: "A delicious baked fruit desert with natural sweetness, fibre and essential vitamins",
    ingredients: [
      "95g / 3.5 oz. whole oats",
      "30g / 1.1 oz. wholewheat flour",
      "1 teaspoon ground cinnamon",
      "5 tablespoons agave syrup or honey",
      "2 tablespoons unsalted butter, melted",
      "700g / 25 oz. mixed berries",
      "3 tablespoons cornflour",
      "1 teaspoon vanilla extract"
    ],
    method: [
      "1. Preheat the oven to 180°C.",
      "2. Mix the oats, flour, and cinnamon. Add the honey and butter until combined.",
      "3. In another bowl, toss together the berries, cornflour, and vanilla extract.",
      "4. Spread the berry mixture in a tin and sprinkle the oat crumbs on top.",
      "5. Bake for 35-40 minutes until bubbling and crunchy.",
      "6. Allow to cool and serve."
    ]
  }
];

const grid = document.getElementById("recipe-grid");
const header = document.getElementById("header");
const gridView = document.getElementById("grid-view");
const detailView = document.getElementById("detail-view");

function showCards(list) {
  grid.innerHTML = "";
  list.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${r.image}" alt="${r.alt}"><h3>${r.title}</h3>`;
    card.onclick = () => openRecipe(r);
    grid.appendChild(card);
  });
}

// Open a single recipe
function openRecipe(r) {
  header.classList.add("hidden");
  gridView.classList.add("hidden");
  detailView.classList.remove("hidden");

  document.getElementById("detail-path").textContent = "HOME / RECIPES / " + r.title.toUpperCase();
  document.getElementById("detail-title").textContent = r.title;
  document.getElementById("detail-img").src = r.image;
  document.getElementById("detail-img").alt = r.alt;
  document.getElementById("detail-prep").textContent = "PREP: " + r.prep;
  if (r.nutrition) {
    const ids = ["n-kj", "n-kcal", "n-epct", "n-fat", "n-fpct", "n-sat", "n-spct", "n-sug", "n-sugpct", "n-salt", "n-saltpct"];
    ids.forEach((id, i) => document.getElementById(id).textContent = r.nutrition[i]);

    document.getElementById("box-fat").className  = "nutri-top " + r.nutrition[11];
    document.getElementById("box-sat").className  = "nutri-top " + r.nutrition[12];
    document.getElementById("box-sug").className  = "nutri-top " + r.nutrition[13];
    document.getElementById("box-salt").className = "nutri-top " + r.nutrition[14];
  }
  document.getElementById("detail-cook").textContent = "COOK: " + r.cook;
  document.getElementById("detail-serves").textContent = "SERVES: " + r.serves;
  document.getElementById("detail-desc").textContent = r.desc;

  document.getElementById("detail-ingredients").innerHTML =
    r.ingredients.map(i => `<li><input type="checkbox">${i}</li>`).join("");

  document.getElementById("detail-method").innerHTML =
    r.method.map(step => `<li>${step}</li>`).join("");
}

// Back button
document.getElementById("back-btn").onclick = () => {
  detailView.classList.add("hidden");
  header.classList.remove("hidden");
  gridView.classList.remove("hidden");
};

// Search and filter
function filter() {
  const text = document.getElementById("search-input").value.toLowerCase();
  const course = document.getElementById("course-filter").value;

  const filtered = recipes.filter(r =>
    (course === "all" || r.course === course) &&
    (r.title.toLowerCase().includes(text) || r.ingredients.some(i => i.toLowerCase().includes(text)))
  );
  showCards(filtered);
}

document.getElementById("search-btn").onclick = filter;
document.getElementById("search-input").onkeyup = filter;
document.getElementById("course-filter").onchange = filter;

showCards(recipes);