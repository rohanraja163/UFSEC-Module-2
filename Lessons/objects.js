const obj = { name: "Dave" };
const another = {
    alive: true,
    answer: 42,
    hobbies: ["eat", "sleep", "code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced tea"
    },
    action: function() {
        return `Time for ${this.beverage.morning}!`;
    }
};
const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vroom";
    }
};
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); 
console.log(truck.engine());
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {  
    return "Whoosh!"
};
console.log(car.engine());
const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function() {
    return "Shhh...";
}
console.log(tesla.engine());
console.log(obj);
console.log(obj.name);
console.log(another["alive"]); 
console.log(another.beverage.morning);
console.log(another.action());

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

delete band.drums;

console.log(band.hasOwnProperty("drums")); 

console.log(Object.keys(band)); 
console.log(Object.values(band));  

for (let job in band) {  
    console.log(`On ${job}, it's ${band[job]}!`);
}


const { guitar: myVar, bass: myBass } = band;  
console.log(myVar);
console.log(myBass);

const { vocals, guitar, bass, drums } = band;  
console.log(guitar);
console.log(vocals);

function sings({ vocals }) {
    return `${vocals} sings!`;
}

console.log(sings(band));