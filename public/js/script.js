const btn = document.getElementById('btn');
        btn.onclick = function() {
            const name = prompt('Enter your full name');
            document.getElementById('name').innerText = name;
        }

        // variables
        const pi = 3.142;
        let username = 'el';
        let age = 18;
        let present = false;

        //objects
        const person = {
            username: 'el',
            age: 18,
            present: false,
            child: {
                name: 'el jnr',
                friend: {
                    name: 'fred',
                }
            }
        }

        console.log(person.username);
        person.age = 20;
        console.log(person);
        console.log(person.child)

        person.child.friend.name = 'king';

        console.log(person.child.friend.name)

        //tried the following in runjs

        // Arrays

//objects
const bottle1 = {
    size: 'large',
    color: 'yellow'
    }
            
    const bottle2 = {
    size: 'small',
    color: 'blue'
    }
            
    const bottles = [bottle1, bottle2];
    bottles.push(bottle1);
    bottles.push(bottle2);
    bottles;
    bottles[1].color
    
    const date = new Date();
    date.toString();
    date.getMonth();
    date.getFullYear();
    
    //if else statements
    // const age = 18;
    if (age >= 18) {
      'You are true';
    } else {
      'You are false';
    }
    
    //for loop
    //starts at 0, checks the condition, iterates it
    for (let i = 0; i <= 5; i++) {
      console.log('We did it!', i);
    }
    
    
    //Functions 
//Defining a function
function login(username, password) {
  //Validate username and password
  if (!username || !password) {
    return 'Username or password not provided';
  }
  //Verify username and password
if (username == 'el' && password == '1234') {
  return 'User is logged in';
} else {
  return 'Invalid username or password';
}
}

//Invoking a fuction
login('el');

//Basic Arithmetic Operations
1 + 1;
48 / 5;
3 * 7;
14 % 3

Math.round(45 % 24)
//js converts strings to numbers by using 'Number() fn'

Number('2') + 2; 
//else
'2' + 2 //gives 22
    
//Strings in JavaScript
//Concatenation
const firstName = 'Elton';
const lastName = 'Mantey';
const middleName = 'Asamoah';

firstName + ' ' + middleName + ' ' + lastName;

// Template literal
`${firstName} ${middleName} ${lastName}`;

//String Methods
//used to manipulate text in js

let fullName = 'elton asamoah';
fullName.length;

for(let i = 0; i <= fullName.length; i++) {
  console.log(i);
}
 //to get the exact length for the computer use fullName.length-1

fullName.toUpperCase();
fullName.toLowerCase();
fullName.charAt(8);
fullName.slice(6,10);
fullName.slice(6,12);
fullName.split("");
fullName.replace('elton', 'kweku');
fullName.indexOf('ton')

//string conversion
Number("3.243");
parseInt("3.243");
parseFloat("3.243");

let amount = 18000
console.log(`GHS${amount}`);
amount.toString();

//Write a function that will add a participant to our Google Classroom

const participants = [];
function addParticipant(email) {
  //check if email was provided
  if (!email) {
    return 'No email provided';
  }
  //check if email is valid
  if (!email.includes ('@')) {
    return 'Invalid email provided';
  }
  participants.push(email);
  return "Participant added";
}

addParticipant("eltonkel@gmail.com");
addParticipant("koko@gmail.com");
addParticipant();
addParticipant('eltonkel')
participants;


//Arays in JavaScript

const users = [
  {
    username: 'eltonkel',
    password: '1234',
    email: 'eltonkel@gmail.com'
  },
  {
    username: 'junka',
    password: '394',
    email: 'junka@gmail.com'
  }
];

    
