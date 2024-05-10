
// console.log(window);
// alert("error here");
// confirm("are your sure");

// use popup 

// function deleteSomething(){ 
//     let value = confirm("do you want to delte something?");
//     if(value){ 
//         console.log("delete succes");
//     }
//     else{ 
//         console.log("delete is not success");
//     }
// }

// deleteSomething();

function welcomeMessege(){ 
    let h1 = document.createElement("h1");
    let text ;

    let name = prompt("Enter Your Name");
    if(name == null || name ==""){ 
        text = "No Name Found";
    }
    else{ 
        text ="Welcome "+ name;
    }
    let textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}

welcomeMessege();