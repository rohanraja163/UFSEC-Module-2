const makeError = () => {
    let i = 1;
    while (i <= 5) {
        try {
            if (i % 2 !== 0) {
                throw new Error("Odd Number!");
            }
            console.log("Even number");
        } catch(err) {
            console.error(err);  
            console.error(err.name);  
            console.error(err.message);  
            console.warn(err);  
            console.table(err);  
            console.log(err.stack);
        } finally { 
            console.log("...finally");
            i++;
        }
    }
};
makeError();