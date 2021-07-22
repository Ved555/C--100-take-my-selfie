var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("Text_Box").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("Text_Box").innerHTML = content;
    console.log(content);
    speak();
}
function speak(){
    var synth = window.speechSynthesis;
    x = document.getElementById("Text_Box").innerHTML;
    if(x == "take my selfie"){
        speakdata = "Taking your selfie in 5 seconds";
        Webcam.attach(camera);
        setTimeout(function(){
            take_pic();
            save();
        }, 5000)
    }
    else{ 
        speakdata = x;
    }
    var utterthis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    
    
}
Webcam.set({
    width : 350,
    height : 350,
    image_format : "png",
    png_quality : 100
});
camera = document.getElementById("camera");
function take_pic(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id = "capture_pic" src = "'+data_uri+'">';
    });
}
function save(){
    a = document.getElementById("link");
    imggg = document.getElementById("capture_pic").src;
    a.href = imggg;
    a.click();
}