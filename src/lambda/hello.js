const descriptors = [
  'Everthing but the',
  '5 Cheese',
  'Dark Chocolate',
  'Asian Inspired',
  'Crispy, Crunchy',
  'Gluten Free',
]
const ingredients = [
  'Masala',
  'Mochi',
  'Cheddar Cheese',
  'Almond Butter',
  'Balsamic',
  'Edamame',
  'Buffalo',
  'Whole Grain'
]
const products = [
  'Nuggets',
  'Kale Slaw',
  'Baking Mix',
  'Burgers',
  'Gyoza',
  'Yogurt',
  'Granola',
  'Spread',
  'Bites',
  'Kombucha'
]
export function handler(event, context, callback) {
  console.log('queryStringParameters', event.queryStringParameters)
  const descriptor = descriptors[Math.floor(Math.random() * (descriptors.length))];
  const ingredient = ingredients[Math.floor(Math.random() * (ingredients.length))];
  const product = products[Math.floor(Math.random() * (products.length))];
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: descriptor + ' ' + ingredient + ' ' + product }),
  })
}
