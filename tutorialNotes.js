//console.log(module);




//const path = require('path');

//var pathObj = path.parse(__filename);  //__filename is one of the parameters in the wrapper function that is invisibly wrapped around every node javascript file. If you're going to work with paths it is much easier to use the path module as opposed to working with strings.

//console.log(pathObj);




//const os = require('os');
//
//var totalMemory = os.totalmem();
//var freeMemory = os.freemem();

//console.log('Total Memory: ' + totalMemory);

//Template string
//ES6 / ES2015 : ECMAScript 6
//One thing it has is a template that lets you build a string without concatination
//Using backtick ` character   ${} lets you add a placeholder for an arguement, you are adding something dynamically  the variable is the arguement

//console.log(`Total Memory: ${totalMemory}`);
//console.log(`Total Memory: ${freeMemory}`);




//const fs = require('fs');
//
//fs.readdir('./', function(err, files) {
//   if (err) console.log('Error', err);
//   else console.log('Result', files);
//});




//Events is a signal that something has happened.  The class EventEmitter is one of the building blocks of node and a lot of the classes are based on it.

//const EventEmitter = require('events'); //The naming EventEmitter using pasco?? case,starting with a capital, shows this is a class.  A class is a container for a bunch of methods and properties
//const emitter = new EventEmitter(); //To use it, first we need to create an instance of the class. This is an object. The difference is like the class human and the object James.

//Register a listener. The order is important. You must register the listener before calling the emit method.
//emitter.on('messageLogged', (arg) => { //on is same as addListener it is an alias. This callback function can take the event arguement in the emitter.emit function. You can call it whatever you want, but arg, or e, or eventArg are commonly used. Using the arrow function, the word function is dropped and an arrow separates the function from the body.
//   console.log('Listener called', arg);// add arg to the console log to see what's in it
//}); 

//emitter.emit('messageLogged', { id: 1, url: 'http://' }); //Has a bunch of methods. We are using emit to signal an event has happened. This will do nothing unless we add a listener that is interested in that event, like a function that will be called when that event is raised. The name of this particular event is messageLogged you can add any arguements you want after that, like an ID# and a 'url', but to make it more confusing, it is best to encapsulate those values inside an object like this { id: 1, url: 'http://' }. This object is an event arguement and can be sent to the callback function in the emitter.on function.




//It is rare to work directly with the EventEmitter as shown above. Normally you would create a class with all the capabilities of the event emitter plus whatever function you add to it. When you define a function in a class, you don't use the word function or the arrow thing, you don't even refer to it as a function, it is now refered to as a method.  Apparently all the code I typed in above is not the wat to do it. This should all be in two separate files. See the end of Node.js Tutorial for Beginners: Learn Node in 1 Hour | Mosh for a convoluted explanation of the proper way the work with the EventEmitter class


