
// time out function
// setTimeout(() => {
//     console.log("hi");
// }, 2000);

// setTimeout(display, 2000);
// function display(){ 
//     console.log("hello");
// }

let saveButton = document.querySelector(".save-btn");
let message = document.querySelector(".message");
message.addEventListener("click", saveUser);

function saveUser(){ 
    message.textContent = "User Registration Succesfull";
}