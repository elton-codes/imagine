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
    
            
    
    