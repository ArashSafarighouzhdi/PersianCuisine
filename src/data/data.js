function Food(id, name, category, image, description, vegetarian, cookingTime, difficulty, ingredients, recipe) {
  this.id = id;
  this.name = name;
  this.category = category;
  this.image = image;
  this.description = description;
  this.vegetarian = vegetarian;
  this.cookingTime = cookingTime;
  this.difficulty = difficulty;
  this.ingredients = ingredients;
  this.recipe = recipe;
}

export const foods = [
  new Food(
    1,
    "ghormeSabzi",
    "main dishes",
    "ghormeSabzi.png",
    "Traditional Persian herb stew with beef, kidney beans and dried lime.",
    false,
    "2 hours",
    "medium",
    ["parsley", "cilantro", "fenugreek", "beef", "kidney beans", "dried lime", "onion", "turmeric"],
    [
      "Fry onions until golden.",
      "Add beef and turmeric and cook for a few minutes.",
      "Add chopped herbs and fry slightly.",
      "Add beans and dried lime with water.",
      "Simmer for about 1.5 hours.",
      "Serve with Persian rice.",
    ],
  ),

  new Food(
    2,
    "koobideh",
    "main dishes",
    "koobideh.png",
    "Grilled minced beef kebab served with saffron rice and grilled tomato.",
    false,
    "30 min",
    "easy",
    ["ground beef", "onion", "salt", "pepper"],
    [
      "Mix ground beef with grated onion and spices.",
      "Shape mixture onto skewers.",
      "Grill over charcoal.",
      "Serve with rice and grilled tomatoes.",
    ],
  ),

  new Food(
    3,
    "zereshkPolo",
    "main dishes",
    "zereshkPolo.png",
    "Saffron rice topped with barberries served with braised chicken.",
    false,
    "1.5 hours",
    "medium",
    ["chicken", "barberries", "rice", "saffron", "onion", "tomato paste"],
    [
      "Cook chicken with onion and spices.",
      "Prepare saffron rice.",
      "Saute barberries with sugar.",
      "Serve chicken with rice and barberries.",
    ],
  ),

  new Food(
    4,
    "fesenjoon",
    "main dishes",
    "fesenjoon.png",
    "Persian stew made with walnuts and pomegranate molasses.",
    false,
    "2 hours",
    "medium",
    ["chicken", "ground walnuts", "pomegranate molasses", "onion", "turmeric"],
    [
      "Cook onions until soft.",
      "Add ground walnuts and cook slowly.",
      "Add pomegranate molasses.",
      "Add chicken and simmer until thick.",
    ],
  ),

  new Food(
    5,
    "joojehKabab",
    "main dishes",
    "joojehKabab.png",
    "Grilled saffron-marinated chicken kebab.",
    false,
    "45 min",
    "easy",
    ["chicken", "saffron", "lemon juice", "onion", "olive oil"],
    ["Marinate chicken with saffron and lemon.", "Thread onto skewers.", "Grill over charcoal.", "Serve with rice."],
  ),

  new Food(
    6,
    "gheymeh",
    "main dishes",
    "gheymeh.png",
    "Split pea stew with beef and dried lime topped with fried potatoes.",
    false,
    "1.5 hours",
    "medium",
    ["beef", "split peas", "onion", "tomato paste", "dried lime", "potatoes"],
    [
      "Cook onions and beef.",
      "Add tomato paste and spices.",
      "Add split peas and dried lime.",
      "Simmer until tender.",
      "Serve with fried potatoes.",
    ],
  ),

  new Food(
    7,
    "tahchin",
    "main dishes",
    "tahchin.png",
    "Layered Persian rice cake with chicken and saffron.",
    false,
    "1.5 hours",
    "medium",
    ["rice", "chicken", "yogurt", "egg", "saffron"],
    [
      "Cook chicken with spices.",
      "Mix rice with yogurt, egg and saffron.",
      "Layer rice and chicken in a pan.",
      "Bake until golden.",
    ],
  ),

  new Food(
    8,
    "dizi",
    "main dishes",
    "dizi.png",
    "Traditional Persian lamb and chickpea stew.",
    false,
    "3 hours",
    "medium",
    ["lamb", "chickpeas", "potatoes", "tomato", "dried lime"],
    [
      "Cook lamb with chickpeas and spices.",
      "Add potatoes and tomato.",
      "Simmer for several hours.",
      "Serve with bread.",
    ],
  ),

  new Food(
    9,
    "faloodeh",
    "dessert",
    "faloodeh.png",
    "Persian frozen dessert with vermicelli noodles and rose water.",
    true,
    "30 min",
    "easy",
    ["rice noodles", "rose water", "sugar", "lime juice"],
    [
      "Cook rice noodles.",
      "Prepare sugar and rose water syrup.",
      "Mix noodles with syrup.",
      "Freeze slightly and serve with lime.",
    ],
  ),

  new Food(
    10,
    "SaffronIceCream",
    "dessert",
    "SaffronIceCream.png",
    "Traditional Persian ice cream flavored with saffron and pistachios.",
    true,
    "45 min",
    "medium",
    ["milk", "cream", "saffron", "sugar", "pistachios"],
    ["Heat milk with sugar.", "Add saffron and cream.", "Freeze mixture.", "Serve with pistachios."],
  ),

  new Food(
    11,
    "shiriniYazdi",
    "dessert",
    "shiriniYazdi.png",
    "Traditional Persian cardamom flavored cupcake.",
    true,
    "40 min",
    "easy",
    ["flour", "sugar", "egg", "yogurt", "cardamom"],
    ["Mix sugar and eggs.", "Add yogurt and flour.", "Flavor with cardamom.", "Bake until golden."],
  ),

  new Food(
    12,
    "sholezard",
    "dessert",
    "sholezard.png",
    "Saffron rice pudding with rose water and almonds.",
    true,
    "1 hour",
    "easy",
    ["rice", "saffron", "sugar", "rose water", "almonds"],
    ["Cook rice with water.", "Add sugar and saffron.", "Add rose water.", "Garnish with almonds."],
  ),

  new Food(
    13,
    "SaffronTea",
    "drink",
    "SaffronTea.png",
    "Warm Persian tea infused with saffron.",
    true,
    "10 min",
    "easy",
    ["black tea", "saffron", "water"],
    ["Brew black tea.", "Add saffron infusion.", "Serve hot."],
  ),

  new Food(
    14,
    "sekanjebin",
    "drink",
    "sekanjebin.png",
    "Sweet and sour Persian drink with vinegar and mint.",
    true,
    "20 min",
    "easy",
    ["sugar", "vinegar", "mint", "water"],
    ["Boil sugar and water.", "Add vinegar and mint.", "Cool and serve with ice."],
  ),

  new Food(
    15,
    "golGavzaban",
    "drink",
    "golGavzaban.png",
    "Traditional Persian herbal drink made from borage flower.",
    true,
    "15 min",
    "easy",
    ["borage flower", "sugar", "water", "lemon"],
    ["Boil borage flowers in water.", "Add sugar and lemon.", "Serve warm or cold."],
  ),

  new Food(
    16,
    "doogh",
    "drink",
    "doogh.png",
    "Refreshing Persian yogurt drink with mint.",
    true,
    "5 min",
    "easy",
    ["yogurt", "water", "mint", "salt"],
    ["Mix yogurt and water.", "Add mint and salt.", "Serve cold."],
  ),
];
