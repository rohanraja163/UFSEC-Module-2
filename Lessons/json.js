const myObj = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    hello: function() {
        console.log("Hello!");
    }
};

const sendJSON = JSON.stringify(myObj);
console.log(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);  

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);  
console.log(typeof receiveJSON); 