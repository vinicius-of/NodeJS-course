const event = require('events');

class MyEmitter extends event {};

const myEmitter = new MyEmitter();

// myEmitter.on('event', () => console.log('An event has occurred!'));
// myEmitter.emit('event');

// myEmitter.on('event', function(a, b){
//     console.log(a, b, this, this === myEmitter);
// });
// myEmitter.emit('event', 1, 2);

// class Person {
//     constructor(name){
//         this.name = name;
//     }

//     speak(msg){
//         console.log(`${this.name} said: ${msg}`);
//     }
// }

// const James = new Person('James');
// James.speak('I\'m gay')