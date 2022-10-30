var sr = window.webkitSpeechRecognition
var r = new sr

function startt(){
    document.getElementById("ta").innerHTML = " "

    r.start()
}
 
r.onresult = function(pm){
    console.log(pm)

    content = pm.results[0][0].transcript
document.getElementById("ta").innerHTML = content

uttering()

}

    function uttering(){
    var sy = window.speechSynthesis
    var bringtextfromtextarea = "taking your selfie in 5 seconds 5 4 3 2"
    var utter = new SpeechSynthesisUtterance(bringtextfromtextarea)
    sy.speak(utter)
   Webcam.attach(cameravartogetthedivisioninside)

   setTimeout(function() {
   snapshot()
   save()    
}  ,5000   ) 

   }
   



Webcam.set({
    width: 360,
    height: 250,
    image_format:"png",
    png_quality:90


})

var cameravartogetthedivisioninside = document.getElementById("webcam")


function snapshot(){
    Webcam.snap(function(data){
            document.getElementById("selfie").innerHTML = "<img id='selfiee' src='"+data+"'>"
    })  
} 

function save(){
    link1 = document.getElementById("link")
    image = document.getElementById("selfiee").src;
    link1.href= image;
    link1.click()
    
}































