console.log("welcome");

// how to create a promise =>pending, resolve,reject .
const promise1 = new Promise((resolve,pending)=>{ 
    let promisCompleted = true;
    if(promisCompleted){ 
        resolve("promise 1 completed");
    }else{ 
        reject("not completed promise 1");
    }

})

const promise2 = new Promise((resolve,pending)=>{ 
    resolve("completed Promise 2");
});
promise2.then((res)=>{ 
    console.log(res);
})
//console.log(promise1);
promise1.then((res)=>{ 
    console.log(res);
})


console.log("end");