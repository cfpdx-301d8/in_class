const testArray = [{author: 'steve', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, iusto quam nam officia. Veniam atque laborum enim quisquam veritatis quis dolorum facilis reprehenderit voluptatem explicabo! Quae in nisi, vitae Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestias porro amet eum unde? Provident amet unde ea illo aperiam similique a molestiae laborum, ducimus vero. Esse ad adipisci inventore.'},
{author: 'dave', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, iusto quam nam officia. Veniam atque laborum enim quisquam veritatis quis dolorum facilis reprehenderit voluptatem explicabo! Quae in nisi, vitae Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestias porro amet eum unde? Provident amet unde ea illo aperiam similique a molestiae laborum, ducimus vero. Esse ad adipisci inventore.'},
{author: 'laura', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, iusto quam nam officia. Veniam atque laborum enim quisquam veritatis quis dolorum facilis reprehenderit voluptatem explicabo! Quae in nisi, vitae Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestias porro amet eum unde? Provident amet unde ea illo aperiam similique a molestiae laborum, ducimus vero. Esse ad adipisci inventore.'}]

var charNames = testArray.map(function(article) {
  return article.author;
}).reduce(function(acc, name) {
  return acc + name.length;
}, 0);


// var charNames = testArray.reduce(function(acc, curr) {
//   return acc + curr.author.length;
// }, 0);

// var nums = [2, 8, 10]

// var sum = nums.reduce(function(acc, curr) {
//   return acc + curr;
// }, 0)

// testArray.forEach(function(a) {
//   console.log('author: ');
// });

// var authorNames = testArray.map(function(article) {
//   return article.author.toUpperCase();
// });

// var filteredNames = testArray.filter(function(whatever) {
//   return whatever.author === 'dave';
// });
