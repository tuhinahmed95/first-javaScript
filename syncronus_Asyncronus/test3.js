console.log("welcome");

// how to create a promise =>pending, resolve,reject .
const promise1 = new Promise((resolve,pending)=>{ 
    let promisCompleted = false;
    if(promisCompleted){ 
        resolve("promise 1 completed");
    }else{ 
        reject("not completed promise 1");
    }

})
//console.log(promise1);
promise1.then((res)=>{ 
    console.log(res);
})
catch((err) =>{ 
    console.log(err);
});

console.log("end");