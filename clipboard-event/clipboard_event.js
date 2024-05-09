
const input = document.querySelector("input");
const p = document.querySelector("p");


input.addEventListener('copy', function(){ 
    p.innerText = "you have coppied";
})

input.addEventListener('cut', function(){ 
    p.innerText=('you have a cut');
})

input.addEventListener('paste', function(){ 
    p.innerText=('you have a paste');
})