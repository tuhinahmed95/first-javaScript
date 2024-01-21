var recognition = new webkitSpeechRecognition();

recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    var output = document.getElementById("output").innerHTML.text;

    red(text);

}

function red(text){ 
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if(text=='hello'){ 
        speech.text="bye";
    }
    
    else if (text=="what is your name"){ 
        speech.text = "my name is khan , i am your assistant";
    }

    else if (text=="what is your favourite player name"){ 
        speech.text = "my favourite player name is virat kohli";
    }

    else if (text=="how are you"){ 
        speech.text = "i am fine , and you";
    }

    else{ 
        speech.text = "please try again";
    }
    document.getElementById("res").innerHTML=speech.text;

    window.SpeechSynthesis.speak(speech);
    
    

}