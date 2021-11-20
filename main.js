var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start(){
    document.getElementById("output").innerHTML="";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("output").innerHTML = Content;
    if(Content == "take my selfie")
    {
        speak();
    }
    
}
function speak(){
    var synth = window.speechSynthesis;
     text = "taking your selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(text);
    synth.speak(utterthis);
    Webcam.attach('#camera')
    setTimeout(function(){
        take_selfie()
        save()
    },5000);


}
Webcam.set({
width : 360,
height : 250,
image_format : "png",
png_quality : 100
});

function take_selfie(){
    Webcam.snap(function(image){
        document.getElementById("result").innerHTML=`<img src=${image} id=selfie /> `;

    })
}

function save(){
link=document.getElementById("link");
image_store= document.getElementById("selfie").src;
link.href=image_store;
link.click();
}
