// ***For all the exercises, be sure to log the output of the function to the console.***

        /************************************************************************************/
        // Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."


        function tekCamp() {
            for(let i = 1; i <= 100; i++){
                if(i % 3 === 0 && i % 5 === 0){
                    console.log("TEKcamp")
                } else if(i % 5 === 0){
                    console.log("camp")
                }  else if(i % 3 === 0){
                    console.log("TEK")
                } else{
                    console.log(i)
                }
            }
        }

        tekCamp()


        /************************************************************************************/
        //Write a function that converts the current temperature from Fahrenheit to Celsius. 

  
        function farenheitCelsius(temp) {
            return temp - 32 * 5 / 9
        }

        farenheitCelsius()
       
        /************************************************************************************/
        //Write a function that converts the Celsius temperature back to Fahrenheit. 

  
        function celsiusFarenheit(temp) {
            return temp * 9 / 5 + 32
        }

        celsiusFarenheit()


        /************************************************************************************/
        // Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.


        function canVote(age) {
              if(age === null || age === undefined || age === ''){
                return false
              }
              else if(age < 21){
                return false
            } else {
                return true
            }
        }

        canVote(25)


        /************************************************************************************/
        // Write a function that converts a string to an array. It should return an array.  

    
        function strToArr(str) {
            str = str.split('')
            return str;
        }

        strToArr('Wow! You have a lot of cats!')


        /************************************************************************************/
        // Write a function that reverses your telephone number.  It should return the reversed telephone number.


        function reversePhone(number) {
            number = number + ''
            return Number(number.split('').reverse().join(''))
            }

        reversePhone(9729748821)



        /************************************************************************************/
        // Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.


        function myCar(make, model, year, color){
            let car = {}
            car.make = make
            car.model = model  
            car.year = year
            car.color = color 
            return car 
        }

        myCar('honda', 'civic', 2018, 'white')
            

        /************************************************************************************/
        // Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".

        //example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}


        function keyValue(nums){
            let obj = {}

            for(let i of nums){
                if(i % 2 === 0){
                    obj[i] = 'even'
                } else {
                    obj[i] = 'odd'
                }
                
            }
            return obj
        }

        keyValue([1, 3, 4, 5, 7, 9, 22, 24, 27, 85, 86])



        /************************************************************************************/
       
        const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        // Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.

        function numsArray(){
            for(let i = 0; i <= numbers.length; i++){
                if(numbers[i] === 0 || numbers[i] % 3 === 0){
                    console.log(numbers[i])
                }
            }
        }

        numsArray()


        /************************************************************************************/
       
        const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {program : 'TEKcamp'} ];
        //access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

        function lastItem(){
            let school = foodArray[foodArray.length - 1]
            return console.log(school)
        }

        lastItem()


        const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
        // Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour".

        function bothArr(foodArr, adjArr){
            foodArr.forEach((item, index) => {
                 if(typeof item === 'object'){
                   console.log(item.program + ' is ' + adjArr[index])
                 } else if(item[item.length - 1] === 's'){
                     console.log(item +  ' are ' +  adjArr[index])
                 } else {
                     console.log(item + ' is ' + adjArr[index])
                 }
            })
         }

        bothArr(foodArray, adjectiveArray)

        /************************************************************* */
        // Refactor the for() loop to be a while loop.


        for(let i=0; i<10; i++) {
            // console.log(" the value of i in the loop is : " + i);
        }

        //your code...

        function whileLoop(){
            let i = 0; 
            while(i < 10){
                console.log("The value in the loop is : " + i)
                i++
            }
        }

        whileLoop()


        /************************************************************* */
        //Multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
        //use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

        function add(){
            let sumFunc = sumOfThirty(30, 2, 20)
            let divFunc = divideProductFunc(sumFunc, 10, 2)
                return divFunc            
        }

        function sumOfThirty(x, y, z){
            return x + y * z
        }

        function divideProductFunc(func1, num1, num2){
            return func1 / num1 ** num2
        }

        add()

        //your code...


        /************************************************************* */
        //Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values : 

        // ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.

        console.log(` question 1 is ${Boolean(20)}, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.`)
        console.log(` this question is ${Boolean(0)} because 0 naturally holds a false value`)
        console.log(` this is considered ${Boolean("zero")}, because any string with a non zero length is true`)
        console.log(`this is ${Boolean(null)}, because null is only equal to undefined and itself. Nothing else`)
        console.log(`this is ${Boolean("0")} because any string with a non zero length is true`) 
        console.log(` this is ${Boolean(!"")}, because the empty strings are accompanied by an actual character `)
        console.log(`this is considered ${Boolean({})} because empty curly braces are coerced as true`) 
        console.log(`${Boolean(125)}, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.`)
        console.log(` this is ${Boolean(undefined)}, because undefined is only equal to null and nothing else`) 
        console.log(` this is ${Boolean("")} because empty strings are considered equal to 0`)
        console.log(`this is considered truthy because a defined variable is coerced as truth`) //const zero = 20)


        /************************************************************* */
        // Refactor the following code using a switch statement:

        const day = "friday";

        switch(day){
            case "monday":
                    console.log("we got a long week ahead of us...") 
                    break;
            case "tuesday":
                    console.log("tuesday's are still beterr than mondays, but LONG way to go still")
                    break;
            case "wednesday":
                    console.log("We are smack dab in the middle of the week")
                    break;
            case "thursday":
                    console.log("Thursday night... the mood is right")
                    break;
            case "friday":
                    console.log("TGIF.  Friday truly is the best day of the week!")
                    break;
            case "saturday":
                    console.log("It's a weekend!")
                    break;
            case "sunday": 
                    console.log("It's a weekend!")
                    break;
        }

        /************************************************************* */
        // Refactor the following statements to use ternary expressions:

        const age = 10;

        age > 21 ? console.log("adult") : console.log("minor");       

        age > 13 && age < 19 ? console.log('teen') : console.log("not a teenager");

        age > 65 ? console.log("retired") :  console.log("still working...");


        /************************************************************* */
        //Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
        /*
        -name
        -age
        -gender
        -healthy ? (yes or no)
        -hobbies
        -profession
        -education

        -add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript".  The learn method should print the value of the name property using the 'this' keyword.

        -add another method on your object of any action you want to perform, using some property that exists on your object.  Make sure to reference any properties on your objedct using the 'this' keyword.
        */

        //your code...

        let me = {
            name: "Ryan",
            age: 33,
            gender: 'male',
            healthy: true,
            hobbies: ['collecting records', 'listening to music', ' and reading'],
            profession: 'web developer',
            education: 'TEKsystems',
            learn: function(){
                return console.log(this.name + ' is learning JavaScript. ')
            },
            action: function(){
                return console.log(`My name is ${this.name} and I'm ${this.age} years old. My hobbies include ${this.hobbies[1]} ${this.hobbies[2]}`)
            }
        }


        /************************************************************* */

            const year = 2021;
            const nums = [1,2,3,4,5];
            let sum = 0;
            let i = 0;
            const doubled = [];

            //Refactor the following statements into expressions


            function welcome(){
                if(year > 2000 && year < 2100) {
                    console.log("welcome to the 21st century");
                }
            }

            welcome()
            
            // 2.

            function total(){
                for(let i=0; i<nums.length; i++) {
                    sum += nums[i];
                }
                console.log(sum);
            }

            total()
            
            // 3.

            function double(){
                while(i < nums.length) {
                    doubled.push(nums[i]*2);
                    i++;
                }
                
                console.log(doubled);
            }

            double()


        /************************************************************* */
        // Use array methods to solve the following problems.

        const nums = [1,2,3,4,5];
        // Square every number in the array.  Store the squares in a new array.


        nums.map(item => item ** 2)
        





        const fivePlus = [1,3,5,7,9,1,3,5,2,3,1,23,4,232,3,4,1,2,2,2,3,4,4,1,12,11,23,3,4,5];
        //Remove all numbers that are less than 5.  Store the results in a new array.

        fivePlus.filter(item => item > 5)






        // Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.

        //your code...

        function randomArr(){
            let arr = []

            for(let i = 0; i <= 20; i++){
                arr.push(Math.floor(Math.random() * Math.floor(1000)))
            }
            return arr.reduce((acc, curr) => 
                acc + curr
            )
        }

        randomArr()




        const showNums = [12,22,33,44,55,66,77,88,99,101];
        //Print out the value of each number divided by 2.  There is no need to store the output in an array.

        showNums.forEach(item => console.log(item / 2))

        /************************************************************* */
        /* Chess pieces have point values associated with them.  

        Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 

        Write a function that calculates the total point value of any given input list of Chess pieces.  
        ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15

        If there are invalid chess pieces, discard those elements.
        ex : ['iPhone','queen','pawn'] => chessCalc() => 10
        ['android'] => chessCalc() => null

        */
        
        let chessPieces = {
            PAWN: 1,
            ROOK: 5,
            BISHOP: 3,
            KNIGHT: 3,
            QUEEN: 9, 
        }

        function chessCalc(pieces) {
            let total = 0
            for(let i of pieces){
                for(let j in chessPieces){
                    let i = i.toUpperCase()
                    if(i == j){
                        total += chessPieces[i]
                    } 
                }
            }
            return total
        }

        chessCalc(["queen", "pawn", "bishop"])
            



        /************************************************************* */

        const ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
        
        //reverse the array, without modifying / `mutating` the ones array.
        function reverse(nums){
            let newArr = []
            nums.map(item => newArr.unshift(item))
            return newArr
        }

        reverse(ones)


        /************************************************************* */
        //create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.

        function performer(cb) {
            return cb("Ryan McLaughlin")
        }

        function myName(name){
            return console.log("Hello! My name is " + name)
        }

        performer(myName)




        /************************************************************* */
        // For the given list of developers : 
        const devs = [
            {
                name: 'Cameron',
                age: 23,
                gender: 'm',
                "tech_stack" : ['html','css','js','React']
            },
            {
                name: 'Liz',
                age: 20,
                gender: 'f',
                "tech_stack" : ['java','spring-boot','MySql']
            },
            {
                name: 'Chris',
                age: 102,
                gender: 'm',
                "tech_stack" : ['react','express','python']
            },
            {
                name: 'Rashid',
                age: 27,
                gender: 'm',
                "tech_stack" : ['thymeleaf','postgres','js','Angular']
            },
            {
                name: 'Annie',
                age: 30,
                gender: 'F',
                "tech_stack" : ['html','scss','less','DynamoDB','GraphQL']
            },
            {
                name: 'Dr. Patel',
                age: 52,
                gender: 'M',
                "tech_stack" : null
            },
            {
                name: 'Isaiah',
                age: 48,
                gender: 'M',
                "tech_stack" : ['Java','','less','DynamoDB','GraphQL']
            },
            {
                name: 'Saima',
                age: 33,
                gender: 'F',
                "tech_stack" : ['MongoDB','Route53','Jenkins','Terraform','Kubernetes']
            },
            {
                name: 'Omar',
                age: 33,
                gender: 'm',
                "tech_stack" : ['c++']
            },
            {
                name: 'Mariam',
                age: 32,
                gender: 'f',
                "tech_stack" : null
            },
        ];

        /************************** */  
        // Find all devs older than 24

        devs.filter(item => item.age > 24)


        /************************** */  
        // Remove all people who are not developers (i.e. no tech stack)

        //your code here...
        devs.filter(item => item["tech_stack"])



        /************************** */  
        // Calculate the total age of all the devs

        //your code here...
        function totalAge(){
            let total = 0

            devs.forEach(item => {
                total += item.age
            })
            return total 
        }

        totalAge()



        /************************** */  
        // Find all female devs

        //your code here...

        devs.filter(item => 
            item.gender === 'f' || item.gender === 'F'
        )


        /************************** */  
        // lowercase the genders of every dev

        //your code here...

        devs.map(item => 
            item.gender.toLowerCase()
        )


        /************************** */  
        // Sort the developers by name

        devs.sort((a, b) => {
            if(a.name > b.name){return 1}
             if(b.name > a.name){return -1}
                 return 0
         })

        /************************** */  
        // Sort the devs by age in descending order

        devs.sort((a, b) => {
            return b.age - a.age
        })



        /************************** */  
        // Sort the male coders by age

        //your code here

        function age(){
            return devs.filter(item => 
                item.gender === 'm' || item.gender === 'M')
                    .sort((a, b) => a.age - b.age )
        }


        /************************** */  
        // For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  Example output is provided below : 

        /*
        Liz specializes in Java, Spring Boot, and MySql.
        Chris specializes in React, Express, and Python.
        Dr. Patel is not a developer.
        */

       

    devs.map(item => {
        return console.log(item.name + " specializes in " + andInserter(item["tech_stack"]))
    })

    function andInserter(item){
           if(item === null){
                return " things other than development" 
           } else {
               item.splice(item.length - 1, 0, "and") 
             } 
        return item 
    }

        /************************************************************* */
        // Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
        const numbersMixed = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:"val"},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

        function maxNumber(numbers) {
            let newArr = []
            for(let i of numbers){
               if(i === "one"){
                    newArr.push(1)
               } else if(i === "two"){
                    newArr.push(2)
                 } else if(i === "three"){
                    newArr.push(3)
                 } else {
                    newArr.push(Number(i))
                 }
            }    
            let filterNaN = newArr.filter(item => !isNaN(item))
            sortNums(filterNaN, false)
            return filterNaN.reduce((acc, curr) =>  acc + curr)
        }

        maxNumber(numbersMixed)


        //After the numbers array has been cleaned up to only have numbers in it, Write a function that sorts the modified numbers array.  Allow the function to sort the array in descending order as well.

        function sortNums(numbers,desc=false) {
            console.log(numbers.sort((a, b) => a - b))
            console.log(numbers.sort((a, b) => b - a))
        };



        /************************************************************* */
        //Research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.


            //your code...
            let target = {
                greet: "Thanks for visiting my site"
            }
            let proxy = new Proxy(target, {
                get (user, name) {
                    return name in user ? user[name] : `Hello, ${name}! Very nice to see you today.`
                }
            })

            proxy.greet   
            proxy.ryan    
            
            // EXPLANATION OF WHY IT'S COOL

            // It's a pretty cool feature in the sense that it has flexibility. Under the dot notation,
            // your able to invoke the targeted object, but you're also able to use it to fill data. For instance, 
            // in the code above, i was able to fill the 'name' field when I invoked proxy.ryan. I can put any name i wish 
            // in the dot notation, and it will populate that field, providing the code is set up correctly. 


        /************************************************************* */
        //Add an example of the 5 primary JavaScript data types to the given mapObj.  The key is an example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.
        const mapObj = new Map();
        mapObj.set("object",{'company' : "TEKsystems"})
        mapObj.set("boolean",{'isPresent': false})
        mapObj.set("number",{'age': 33})   
        mapObj.set("undefined",{'role': undefined})
        mapObj.set("null", {'teamWins': null})

        console.log(mapObj.has('object', {company: "TEKsystems"}))

        console.log("It returned false because the sequence in the mapObj.set() function was out of order. The 'object' string was placed in the wrong position within the parameter.")

        //The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.

        let arr = []
        for (let [key, value] of mapObj) {
            arr.push(key)
        }
        console.log(arr)

        //loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']


        /************************************************************* */
        //Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly selects one of the mathematical operations whenever it is invoked.  The doMath() function should print to the console the mathetmatical function that was carried out.  The doMath() function should return the computed value of any operation performed.

        // ex : 2,3 => doMath(2,3) => adding : 5
        const operations = ["+", "-", "/", "*"];

        function doMath(x,y) {
            let operator = operations[Math.floor(Math.random() * Math.floor(4))]
            return convert(operator, x, y)
        };

        function convert(symbol, num1, num2){
            let operators ={
                "+": function(a, b){
                         return a + b
                },
                "-": function(a, b){
                         return a - b
                },
                "/": function(a, b){
                         return a / b
                 },
                "*": function(a, b){
                         return a * b
                 }
            }
           return operators[symbol](num1, num2)
        }

        doMath(4, 4)


        /************************************************************* */
        //- Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that accepts another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

        //your code...

        // This took a while, but it was worth it to create a recursive solution. 

        let count = 3

        function multiple(x){
            while(count > 0){
                console.log(x) 
                count--
                fn(x)
            }
        }

        function fn(y){
            return multiple(y)
        }
         
        //- Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable 
        //called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) 
        //as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

        //your code

        let message = ' is how much the stock has increased'
        let r = .05

        function stockGain(basis){
            let growth = basis * r
            console.log(growth + message)
            return function years(yrs){
                let prediction = yrs * growth 
                   console.log(prediction + ' dollars is how much your stock is predicted to grow over ' + yrs + ' years')
            }
        }
    
        
        // Once finished, declare a variable called futureValue that holds your stockGain function and enter 
        // any amount for the cost basis and a number for the number of years.  Run the function returned by 
        //the higher order function to display the future value of the stock.  

        //your code...

        let futureValue = stockGain(3)(3)


// DO NOT DELETE THIS EXPORT
module.exports = {
    tekCamp,
    canVote
}


