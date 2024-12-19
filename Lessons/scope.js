var x = 1;  
let y = 2; 
const z = 3;  
console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function func() {
    var x = 10;
    const z = 5;
    {
        var x = 11; 
        const z = 6;  
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}

func();