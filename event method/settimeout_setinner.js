
// time out function
// setTimeout(() => {
//     console.log("hi");
// }, 2000);

// setTimeout(display, 2000);
// function display(){ 
//     console.log("hello");
// }

// let saveButton = document.querySelector(".save-btn");
// let message = document.querySelector(".message");
// saveButton.addEventListener("click", saveUser);

// function saveUser(){ 
//     message.textContent = "User Registration Succesfull";

//     setTimeout(() => {
//         message.textContent = "";
//     }, 2000);
// }



// setInterval method

let saveButton = document.querySelector(".save-btn");
let message = document.querySelector(".message");
saveButton.addEventListener("click", startCount);

function startCount(){ 
    let count = 1;
    message.textContent = count;

    setInterval(() => {
        count ++;
        message.textContent = count;
    }, 1000);
}