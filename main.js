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