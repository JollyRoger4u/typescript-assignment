// *** Ignore the following lines ***
import chalk from "chalk";
import prompt from "prompt-sync";
// *** Ignore the above lines ***

// Use the following function to read input from the user:
const readLine = prompt({sigint: true});

function runExerciseOne() {
    const firstName: string = "Sebastian";
    const lastName: string = "Vallin";
    console.log(
        `Hello ${firstName} ${lastName}! I'm glad to inform you that you are the test subject for my first assignment!`
    );
}

function runExerciseTwo() {
    const firstName: string = readLine("What is your first name?");
    const lastName: string = readLine("What is your last name?");
    console.log(`Hello ${firstName} ${lastName}! Have a nice day!`);
}

function runExerciseThree() {
    //A) Add any two integer numbers and store the sum result in a variable of type double, display the result.
    // B) Store an even number and an odd number in two different integer variables. Divide odd number by even
    // number and display an accurate result.
    let num1: number = 15;
    let num2: number = 10;
    let result: number = num1 + num2;
    console.log(`Did you know that ${num1} + ${num2} = ${result} ? `);
    result = num2 / num1;
    console.log(`Did you know that ${num1} / ${num2} = ${result} ? `);
}

function runExerciseFour() {
    //Exercise 4 (Optional)
    // Ask user to enter a value of a radius. Calculate the area of a circle and the area of a sphere and display the results
    // on the console.
    const userInput: number = Number(readLine("give me the radius you want to calculate: "));
    let area: number = Math.PI * userInput * userInput;
    let surfaceArea: number = 4 * Math.PI * userInput * userInput;
    console.log(`The area of the circle is ${area}`);
    console.log(`The surface area of a sphere based on ${userInput} is ${surfaceArea}`);
}

function runExerciseFive() {
    //Ask user to enter two consecutive numbers and write the code to validate them (are they consecutive or not?) and
    // display message accordingly
    const num1: number = Number(readLine("first number: "));
    const num2: number = Number(readLine("second number: "));
    if (num1 + 1 === num2) {
        console.log("your number is in sequence, good job boy-o");
    } else {
        console.log("bad boy, not in sequence");
    }
}

function runExerciseSix() {
    //Ask user to enter any positive integer, check, and display message whether number is even or odd
    const num1: string = Number(readLine("Positive number: ")) % 2 === 0 ? "even" : "odd";
    console.log(num1);
}

function runExerciseSeven() {
    //Ask user to enter their body temperature in degree Celsius. Display him a message if he has a fever or not.
    const num1: string = Number(readLine("body temp: ")) > 37.8 ? "fever" : "you are fine, stop whining";
    console.log(num1);
}

function runExerciseEight() {
    //Ask user to enter his grade of exam (A, B, C, D, E) and print a relevant message for the user as per the grade they
    // have.
    const grade: string = readLine("Tell me your grade: ").toUpperCase();
    switch (grade) {
        case "A" :
            console.log("Good boy!");
            break;
        case "B" :
            console.log("Good work, but you can do better!");
            break;
        case "C" :
            console.log("Passing grade, but you can do better!");
            break;
        case "D" :
            console.log("You really should reevaluate your priorities!");
            break;
        case "E" :
            console.log("You are failing this class, talk to your teacher about how to fix this");
            break;
        default :
            console.log("maybe enter a proper grade?");
            break;
    }
}

function runExerciseNine() {
    //let the user input any string, then check if the string is a palindrome sentence or not and display that result.
    // Example 1: Entered “A man, a plan, a canal – Panama”
    // Result: A man, a plan, a canal – Panama is a palindrome.
    // Example 2: Entered Aibohphobia
    // Result Aibohphobia is a palindrome
    let userInput: string = readLine("enter a sentence to check if it is a true palindrome: ").replace(/[^a-zA-Z0-9]/g, '');
    userInput = userInput.toLowerCase();
    let leftIndex: number = 0;
    let rightIndex: number = userInput.length - 1;
    while (leftIndex <= rightIndex) {
        if (userInput[leftIndex] != userInput[rightIndex]) {
            return console.log("this statement is not a palindrome, sorry")
        }
        leftIndex++;
        rightIndex--;
    }
    return console.log("Woop! That IS a palindrome!");
}

function runExerciseTen() {
    //String manipulation
    // A) Change string “The quick fox Jumped Over the DOG” to the string “The brown fox jumped over the lazy dog”
    // using required string manipulation functions.
    // B) Enter any two words from console and check whether they are same words or not.
    // C) Input word Donkey and display it as the word Monkey on the console.
    // D) Replace ‘I’ with ‘We’ and ‘am’ with ‘are’ in given text below.
    // “I am going to visit Kolmården zoo tomorrow. I am a big fan of the dolphin show. I may watch all dolphin shows
    // during the day. I would like to take a gondola safari as well. I wish to visit Bamse and his team there.”
    // E) Actual string is "She is the popular singer." and the expected string is "She is the most popular singer."
    // F) Actual string is "A friend is the asset of your life." and the expected string is "A true friend is the greatest asset
    // of your life"
    // G) Actual string is "My name is Sebastian Vallin." Expected string: "Sebastian Vallin"
    // H) Actual string is "Arrays are very common in programming, they look something like: [1,2,3,4,5]" Expected string:
    // "[1,4,5,6,7,8]"

    let phrase1: string = "The quick fox Jumped Over the DOG";
    phrase1 = phrase1.replace('quick', 'brown');
    phrase1 = phrase1.replace('DOG', 'lazy dog');
    console.log(phrase1);
    let userInput1: string = readLine("enter word one ").trim();
    let userInput2: string = readLine("enter word two ").trim();
    if (userInput1 === userInput2) {
        console.log("same word detected")
    } else if (userInput1 || userInput2 === "Monkey") {
        console.log("Donkey");
    } else {
        console.log("different words detected");
    }
    let phrase2: string = "I am going to visit Kolmården zoo tomorrow. I am a big fan of the dolphin show. I may watch all dolphin shows\n" +
        " during the day. I would like to take a gondola safari as well. I wish to visit Bamse and his team there.";
    phrase2 = phrase2.replace(/I/g, "We");
    phrase2 = phrase2.replace(/am/g, "are");
    console.log(phrase2);
    let phrase3: string = "She is the popular singer.";
    phrase3 = phrase3.replace(/the/, "the most");
    console.log(phrase3);
    let phrase4: string = "A friend is the asset of your life.".replace(/A/, "A true");
    phrase4 = phrase4.replace(/the/, "greatest");
    console.log(phrase4);
    let phrase5: string = "My name is Sebastian Vallin.".replace(/My name is/, "");
    console.log(phrase5);
    let prase6: string = "Arrays are very common in programming, they look something like: [1,2,3,4,5]".slice(-11);
    console.log(prase6);
}

function runExerciseEleven() {
    //Write a program that asks user an arithmetic operator ('+','-','*' or '/') and two operands. Perform the
    // corresponding calculation on the operands and display the result (use switch case).
    let num1: number = Number(readLine("Enter first number: ").trim());
    let operator: string = String(readLine("Enter operator: ").trim());
    let num2: number = Number(readLine("Enter second number: ").trim());
    let result: number = 0;
    switch (operator) {
        case "+" :
            result = num1 + num2;
            break;
        case "-" :
            result = num1 - num2;
            break;
        case "*" :
            result = num1 * num2;
            break;
        case "/" :
            result = num1 / num2;
            break;
        default:
            console.log("incorrect operator!");
            break
    }
    console.log(result);
}

function runExerciseTwelve() {
//Ask user to enter any number smaller than 100. Print all values from 1 to the entered number in ascending and
// descending order.
// Write the same thing using the different loops (for, while and do-while).
    const goal: number = Number(readLine("Enter a number between 1-99: ").trim());
    let count: number = 1;
    if (goal < 100) {
        switch (readLine("chose method 1-3: ")) {
            case "1" : {
                for (let i = 1; i <= goal; i++) {
                    console.log(i);
                }
                for (let z = goal - 1; z >= 1; z--) {
                    console.log(z);
                }
                break;
            }
            case "2" : {
                while (goal > count) {
                    console.log(count);
                    count++;
                }
                while (1 <= count) {
                    console.log(count);
                    count--;
                }
                break;
            }
            case "3" : {
                do {
                    console.log(count);
                    count++
                } while (goal >= count);
                do {
                    console.log(count);
                    count--
                } while (1 <= count);
                break;
            }
            default: {
                console.log("1-3 only please")
                break;
            }

        }
    }
}

function runExerciseThirteen() {
//Generate a random number and save it to a variable, SecretNumber.
// If he/she misses the first guess ask the user if he/she wants to guess the number again. Repeat the guessing until
// user answers no or guess the correct number.
// Limit the secret number to be from 1 to 10 so that it not become too hard to guess right
    const goal: number = Math.floor(Math.random() * 10) + 1;
    let guess: any = 0;

    while (guess != goal) {
        guess = Number(readLine('guess a number between 1-10, or "no" to quit: '));
        if (guess != goal) {
            console.log("Sorry, your guess is wrong");
        } else if (guess === "no") {
            break;
        }
    }
    console.log(`well done, the correct number was ${goal}!`);
}

function runExerciseFourteen() {
//Display the following multiplication table shown below on the console. (1-10 * 1-10)

    for (let i = 1; i <= 10; i++) {
        console.log(`${i}\t ${i * 2}\t ${i * 3}\t ${i * 4}\t ${i * 5}\t ${i * 6}\t ${i * 7}\t ${i * 8}\t ${i * 9}\t ${i * 10}`)
    }
}

function runExerciseFifteen() {
//Print the following * pattern on console using loop

    /* Not a good solution, but it sort of works... need rework, probably using arrays to arrange the symbols */

    let print: string = "*****";
    let print2: string = " ";
    for (let row = 5; row > 0; row--) {

        print = print.slice(0, row);
        console.log(print);
        if (row % 2 != 0) {
            //console.log("if")
            print2 = " " + print.slice(0, row - 1);
            print = print2;
            console.log(print);
        }
    }

    //print = print.slice(0, 5)

}

function runExerciseSixteen() {

}

function runExerciseSeventeen() {

}

function runExerciseNineteen() {
    let h: number = Number(readLine("height of the triangle? "));
    let w: number = Number(readLine("width of the triangle? "));

    function triangleCalc(h: number, w: number): number {
        return (h * w) / 2
    }

    console.log(triangleCalc(h, w))
}

function runExerciseTwenty() {
    const num1: number = 123;
    const num2: number = 456;

    function numberSwap(num1: number, num2: number) {
        console.log(`swapped numbers: ${num2}, ${num1}`);
    }

    console.log(`original numbers: ${num1}, ${num2}`);
    numberSwap(num1, num2);
}


function runExerciseTwentyOne() {
    //Ask the user to enter their date of birth. Call a method to calculate the current age and return the value in years.
    // Display the age on the console

    /****** I had to move the agecheck outside the function to be able to call it from exercise 22 ***************/

    const birth: number = Number(readLine("when were you born? (yyyymmdd) "));
    console.log(`Today you are ${ageCalc(birth)} years old`);
}

function ageCalc(birth: number): number {
    const todayDate: Date = new Date();
    let byear: string = String(birth).slice(0, 4)
    let bmonth: string = String(birth).slice(4, 6)
    let bday: string = String(birth).slice(-2);
    let age = todayDate.getFullYear() - Number(byear);

    if (Number(bmonth) < todayDate.getMonth() + 1) {
        age++;
    } else if (Number(bmonth) === todayDate.getMonth() + 1 && Number(bday) <= todayDate.getDate()) {
        age++;
    }
    return age;
}

function runExerciseTwentyTwo() {
    const name: string = String(readLine("what is your name? "));
    const age: number = Number(readLine(`Hello, ${name}! When were you born? (yyyymmdd) `));
    const customerAge = ageCalc(age);
    let order: string;
    if (customerAge >= 18) {
        order = readLine("would you like to have a beer? ").toLowerCase();
        if (order === "yes" || order === "y") {
            serve();
        } else {
            soda()
        }
    } else {
        soda()
    }

    function soda() {
        order = readLine("would you like to have a soda? ").toLowerCase();
        if (order === "yes" || order === "y") {
            serve();
        } else {
            noService();
        }
    }

    function serve() {
        console.log("here you go, enjoy!");
    }

    function noService() {
        console.log("Sorry, we have no other options available");
    }

}

function runExerciseTwentyThree() {

}

function runExerciseTwentyFour() {
    //Let the user input a string with numbers comma separated like “1,2,34,83,19,45”. Convert the number string to an
    // array and find the min, the max and the average value. (Use strings split function if required).
    const numbers: string = String(readLine("enter your numbers, separated with commas "));
    let numArray: number[] = numbers.split(",").map(Number);
    let highest: number = numArray[0];
    let lowest: number = numArray[0];
    let average: number = 0;

    function calculateArray(arr: number[]) {
        for (let i = 0; i < arr.length; i++) {
            average = average + arr[i];
            if (arr[i] > highest) {
                highest = arr[i];
            } else if (arr[i] < lowest) {
                lowest = arr[i];
            }

        }
        average = average / numArray.length;
        console.log(`the highest number entered was: ${highest}`);
        console.log(`the lowest number entered was: ${lowest}`);
        console.log(`the average of all the numbers entered was: ${average}`);
    }

    calculateArray(numArray);
}

function runExerciseTwentyFive() {
    //Generate and store 20 random integer numbers in a list and separate those numbers into two new lists. One with
    // even numbers and one with odd numbers.
    // Display all 3 lists.
    let numArray: number[] = [];
    let evenArray: number[] = [];
    let oddArray: number[] = [];
    for (let i = 0; i < 20; i++) {
        numArray.push(Math.floor(Math.random() * 100) + 1);
        if (numArray[i] % 2 === 0) {
            evenArray.push(numArray[i]);
        } else oddArray.push(numArray[i]);
    }
    console.log("20 random numbers:")
    console.log(numArray.join());
    console.log("all even numbers: ")
    console.log(evenArray.join());
    console.log("all odd numbers: ");
    console.log(oddArray.join());
}

function runExerciseTwentySix() {
    //Ask the user to enter any 10 numbers and store them in an array. Loop through the array and print only the
    //negative numbers on the console.

    const numbers: string = readLine("enter 10 numbers, separated with commas ");
    let numArray: number[] = numbers.split(",").map(Number);
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] < 0) {
            console.log(numArray[i]);
        }
    }
}

function runExerciseTwentySeven() {
    //Ask user to enter any twelve positive integer numbers. Store these numbers to an array. Display all numbers and
    // then separate the numbers into an odd number array and even number array. Then display these two arrays.
    const numbers: string = readLine("enter 12 positive integers, separated with commas ");
    let numArray: number[] = numbers.split(",").map(Number);
    let evenArray: number[] = [];
    let oddArray: number[] = [];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 === 0) {
            evenArray.push(numArray[i]);
        } else oddArray.push(numArray[i]);
    }
    console.log("all even numbers: ")
    console.log(evenArray.join());
    console.log("all odd numbers: ");
    console.log(oddArray.join());

}

function runExerciseTwentyEight() {

}

function runExerciseTwentyNine() {

}

function runExerciseThirty() {

}

function runExerciseThirtyOne() {
    const todayDate: Date = new Date();
    const userInput: number = Number(readLine("what year is it? "));
    if (userInput === todayDate.getFullYear()) {
        console.log("good human! You deserve a pat on the head")
    } else {
        console.log("geez... you dont even know the year?")
    }

}

function runExerciseThirtyTwo() {
    //Display today’s date in at least two different date formats. Also display tomorrow’s date and yesterday’s date
    // using short date format.
    const todayDate: Date = new Date();
    const tomorrowDate: Date = new Date(todayDate.getTime());
    tomorrowDate.setDate(todayDate.getDate() + 1);
    const yesterdayDate: Date = new Date(todayDate.getTime());
    yesterdayDate.setDate(todayDate.getDate() - 1);
    console.log("Today's Date");
    console.log(todayDate.toDateString());
    console.log(todayDate.toUTCString());
    console.log("Yesterday's Date");
    console.log(`Yesterday: ${yesterdayDate.toLocaleDateString()}`);
    console.log("Tomorrow's Date");
    console.log(`Tomorrow: ${tomorrowDate.toLocaleDateString()}`);

}

function runExerciseThirtyThree() {
    const todayDate: Date = new Date();
    const userInput: number = Number(readLine("Enter a date for me to investigate! (yyyymmdd) "));
    let year: string = String(userInput).slice(0, 4)

    if (Number(year) === todayDate.getFullYear()) {
        console.log("this is the current year");
    }else if (Number(year) < todayDate.getFullYear()) {
        console.log("this is a year in the history of man");
    }else if (Number(year) > todayDate.getFullYear()) {
    console.log("this is a date in the unknowable future!");
    } else console.log(`Congratulations, your input of ${userInput} confused me`)

}

/* ^^^^^^^^^^^^  Add the rest of the exercise functions above this line ^^^^^^^^^^^^ */

let keepAlive = true;
console.clear();
while (keepAlive) {
    try {
        const assignmentChoice = parseInt(
            readLine("Enter assignment number (ctrl + C or -1 to exit): ")
        );
        console.log();
        switch (assignmentChoice) {
            case 1:
                runExerciseOne();
                break;
            case 2:
                runExerciseTwo();
                break;
            case 3:
                runExerciseThree();
                break;
            case 4:
                runExerciseFour();
                break;
            case 5:
                runExerciseFive();
                break;
            case 6:
                runExerciseSix();
                break;
            case 7:
                runExerciseSeven();
                break;
            case 8:
                runExerciseEight();
                break;
            case 9:
                runExerciseNine();
                break;
            case 10:
                runExerciseTen();
                break;
            case 11:
                runExerciseEleven();
                break;
            case 12:
                runExerciseTwelve();
                break;
            case 13:
                runExerciseThirteen();
                break;
            case 14:
                runExerciseFourteen();
                break;
            case 15:
                runExerciseFifteen();
                break;
            case 16:
                runExerciseSixteen();
                break;
            case 17:
                runExerciseSeventeen();
                break;
            case 18:
                console.log("This exercise do not exist");
                break;
            case 19:
                runExerciseNineteen();
                break;
            case 20:
                runExerciseTwenty();
                break;
            case 21:
                runExerciseTwentyOne();
                break;
            case 22:
                runExerciseTwentyTwo();
                break;
            case 23:
                runExerciseTwentyThree();
                break;
            case 24:
                runExerciseTwentyFour();
                break;
            case 25:
                runExerciseTwentyFive();
                break;
            case 26:
                runExerciseTwentySix();
                break;
            case 27:
                runExerciseTwentySeven();
                break;
            case 28:
                runExerciseTwentyEight();
                break;
            case 29:
                runExerciseTwentyNine();
                break;
            case 30:
                runExerciseThirty();
                break;
            case 31:
                runExerciseThirtyOne();
                break;
            case 32:
                runExerciseThirtyTwo();
                break;
            case 33:
                runExerciseThirtyThree();
                break;

            /* ^^^^^^^^^^^^  Add the rest of the exercises above this line ^^^^^^^^^^^^ */
            case -1:
                keepAlive = false;
                break;
            default:
                console.log(chalk.red("That is not a valid assignment number!"));
                break;
        }
        if (assignmentChoice !== -1) {
            console.log();
            readLine(chalk.dim("Press enter to continue..."));
            console.clear();
        } else {
            console.log(chalk.green("Exiting..."));
        }
    } catch (err) {
        console.log(chalk.red(err));
    }
}
