//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

const findWords = (dg_string, dg_names) => {
    for(let name of dog_names){
        if (dog_string.includes(name)){
            console.log(`Mached ${name}`)
        } 
        else {
            console.log('No Match')
        }
    }
}
console.log(findWords(dog_string, dog_names))

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(array){
    for(i = 0; i < array.length; i++){
        if (i % 2 == 0){
            console.log(array[i] = 'even index') 
        }
    }
    return(array)
}

console.log(replaceEvens(arr))

// Vowel Count : https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

// Detect Pangram : https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }

// Simple Multiplication https://www.codewars.com/kata/583710ccaa6717322c000105

  function simpleMultiplication(number){
    return number * (number % 2 ? 9 : 8)
}

// Quarter of the year https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

const quarterOf = (month) => {
    if (month <= 3) {
      return 1
    } else if (month <= 6) {
      return 2
    } else if (month <= 9) {
      return 3
    } else if (month <= 12) {
      return 4
    }
    
  }






