
const input = document.querySelector('input');
input.addEventListener("change", changeHandaler);
function changeHandaler(event){ 
    console.log(event);
    console.log(event.type);
}