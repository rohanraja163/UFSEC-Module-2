const myObj = {
    name: "Andrei",
    hobbies: ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name);
    }
};
localStorage.setItem("myLocalStore", JSON.stringify(myObj));

const key = localStorage.key(0);
console.log(localStorage.length);
console.log(key);

localStorage.removeItem("myLocalStore");

localStorage.clear();

const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(myLocalData); 