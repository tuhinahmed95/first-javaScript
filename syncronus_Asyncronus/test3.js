console.log("welcome");

// how to create a promise =>pending, resolve,reject .
const promise1 = new Promise((resolve,pending)=>{ 
    let promisCompleted = true;
    if(promisCompleted){ 
        resolve("promise completed");
    }else{ 
        reject("not completed");
    }

})
console.log(promise1);

console.log("end");