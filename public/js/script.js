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
    
    
    
            
    
    