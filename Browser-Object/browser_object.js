
console.clear();
// href
// console.log(location.href);

// // protocol
// console.log(location.protocol);

// // hostname
// console.log(location.hostname);

// // port
// console.log(location.port);

// // path name
// console.log(location.pathname);

let locationDiv = document.querySelector(".location-div");

// let p1 = locationDiv.children[0];
// p1.textContent=location.href;

// let p2 = locationDiv.children[1];
// p2.textContent=location.protocol;

// let p3 = locationDiv.children[2;
// p3.textContent=location.hostname;

// let p4 = locationDiv.children[3];
// p4.textContent=location.port;

// let p5 = locationDiv.children[4];
// p5.textContent=location.pathname;

let btn = document.querySelector("#visit-btn");
btn.addEventListener("click", function(){ 
    location.assign("https://www.w3schools.com/tags/ref_av_dom.asp");
})