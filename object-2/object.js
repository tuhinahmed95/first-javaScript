
// let name = "Rafia Kbair Khan Tuly";
// let age = 31;
// let maritalStatus = "unmarried";
// let bf = "janina";
// let address = "kisorgang";

// let informationOfrafia = { 
//     name : "Rafia Kabir Khan Tuly",
//     age : 31,
//     maritalStatus : "unmarried",
//     bf : "janina",
//     address : "kisorgang",
// }

// console.log(informationOfrafia.name)
// console.log(informationOfrafia.age)
// console.log(informationOfrafia.maritalStatus)
// console.log(informationOfrafia.bf)
// console.log(informationOfrafia.address)


// function er maddhome object 

// function information(name,age, maritalStatus,bf,address,){ 
//     this.name = name;
//     this.age = age;
//     this.maritalStatus = maritalStatus;
//     this.bf = bf;
//     this.address = address;

// }

// let student1 = new information("Farazana",26,"unmarried","ache","Faridpur Vanga");
// let student2 = new information("Arfan",28,"koydin por hbe","age chilo akn nai","Bogura");

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.maritalStatus);
// console.log(student1.bf);
// console.log(student1.address);



// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.maritalStatus);
// console.log(student2.bf);
// console.log(student2.address);


// function arfzan(name,age,maritalStatus,bf,address){
//     this.name = name;
//     this.age = age;
//     this.maritalStatus = maritalStatus;
//     this.bf = bf;
//     this.address = address;
    
//     this.output=function(){ 
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.maritalStatus);
//         console.log(this.bf);
//         console.log(this.address);
//     }

// }

// let student1 =new arfzan("Farzana", 26, "unmarried", "ache", "faridpur vanga");
// let student2 =new arfzan("Arfan", 28, "koydin por hbe", "age chilo akn nai", "Bogura");

// student1.output();
// student2.output();



// math object er babohar 


// let num1 = parseInt(prompt("eneter your first number :"));

// let num2 = parseInt(prompt("enter your second number :"));

// let maxiMum = Math.max(num1,num2);

// console.log(maxiMum);


// Math object er maddhome guesing game 


// let numberOfwon = 0;

// let numberOflost = 0;

//     for(x =1; x<6; x++) 
//     {
        
//     let guessNumber = parseInt(prompt("enter a guess number :"));

//     let randomNumber = Math.floor(Math.random()*5) +1;

//     if(guessNumber == randomNumber){ 
//         console.log("you have won");
//         numberOfwon++;
//     }
//     else{ 
//         console.log("you have lost . random number was" + randomNumber);
//         numberOflost ++;
//     } 

//     }

//     document.write("Total Number Of Won =" + numberOfwon + ",<br/>");
//     document.write("Total Number Of Lost =" + numberOflost );




// let numberOfwon = 0;

// let numberOflost = 0;

// for(x =1; x<11; x++){ 
//     let guesingNumber = parseInt(prompt("enter your guesing number :"));

//     let randomNumber = Math.floor(Math.random()*10) +1;

//     if(guesingNumber == randomNumber){ 
//         console.log("you have won" + guesingNumber);
//         numberOfwon++;
//     }

//     else{ 
//         console.log("you have lost.random number was" + randomNumber);
//         numberOflost ++;
//     }
// }

// document.write("total Number Of won = " + numberOfwon + "<br/>");

// document.write("Total Number Of Lost =" + numberOflost);


