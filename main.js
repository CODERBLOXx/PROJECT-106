Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:'90'
});

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/j0B9D3f2G/model.json',modelLoaded);

console.log("ml5 version: ", ml5.version);

function modelLoaded(){
    console.log("Model Loaded!");
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_gesture_icon").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        Speak();
    }
}

function Speak(){
    var synth = window.SpeechSynthesis;
    speak_data_1 = "The First Prediction is" + prediction_1;
    speak_data_2 = "And The Second Prediction is" + prediction_2;
    var UtterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(UtterThis);
}