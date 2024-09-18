/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteSong on one line and console.log the value
 * Then, using your Literals, console.log "my favorite song is..." with the song's value
 */
let myFavortieSong = ['No Ones Gonna Love You', 'Shampoo Bottles', 'Change', 'Boys Dont Cry']
console.log(`my favorite song is ${myFavortieSong[3]}`)
// Picking one out of the array confused me at first

/*
 * Prompt 2:
 *
 * Create 3 variables using let and const, then console.log each of them, using a string literal (` ${} `} in the log
 */
let firstName = "Austin"
let age = 26
console.log(`Hello my name is ${firstName} and I am ${age} years old`)
//
/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each, using console.log:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */
let a= 2
let b=4
console.log(a+b)
console.log(a-b)
console.log(a*3)
console.log(a%2)

//I don't know if you wanted us to use actual variables, but I know that you can't add in javascript

/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 * Run a console.log that says 'hello my name is..." with your fullName. 
 */

const lastName = 'Rassman'
const fullName = `${firstName} ${lastName}`
console.log(`Hello my name is ${fullName}`)
// I can't get it to say the actual name. I'm not sure why it keeps counting as the a string.
/* Arrays */

// Create an array of Movies, then log the 2nd movie in your array
// Use your array methods to add a movie in to the Front of the array, then the Back of the Array, then to the 2nd index point of the array

const movies = [`Your name`, `I want to eat your pancreas`, `5 centimeters per second`, `A Silent Voice`]
movies.unshift(`Howls Moving Castle`)
movies.push(`Ponyo`)
movies.splice(2,0, `My Nieghbor Totoro`)
console.log(movies)

// I used ChatGPT for an example on how to splice

/*
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];
console.log(array1[2])
console.log(array2[1][1])
console.log(array3[1][1][1])

// I had to keep working down the line of indexs for the last to figure out where marty was

/*
 *
 * Use the length of the array below to retrieve the second to last item.
 */
let array4 = ['a', 'b', 'c', 'd', 'e'];
console.log(array4[array4.length -2])

//Easy

/*
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Tom".

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

// Change Cathleen's hometown from New York to "Gotham City".

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".
thom[0] = `tom`
karolin[1] = `17`
cathleen[2] = `Gotham City`
kristyn[2] = `Oakland`

console.log(thom)
console.log(karolin)
console.log(cathleen)
console.log(kristyn)

//This one was the easiest one