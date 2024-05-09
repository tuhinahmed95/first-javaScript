

for(var i=0; i<3; i++){ 
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){ 
        var text = this.innerHTML;
        console.log(text);


        switch(text){ 
            case"Md":
            var audio = new audio("music/animal.mp3");
            audio.play();
            break;

            case"Tuhin":
            var audio = new audio("music/pehli.mp3");
            audio.play();
            break;

            case"Mia":
            var audio = new audio("music/pehli.mp3");
            audio.play();
        }
    });
}
