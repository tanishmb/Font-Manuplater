leftWristX=0;
rightWrist=0;
diffrence=0;
function setup(){
    canvas=createCanvas(400,320);
    canvas.position(700,150);
    video=createCapture(VIDEO);
    video.size(500,500);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }
 function modelLoaded() {
        console.log("POSENET MODEL IS INITIALIEZED GREATLY")
}
    
function gotPoses(results){
    if (results.length>0){
    console.log(results);
    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x
    diffrence=floor(leftwristX-rightwristX)
    }  
    
    
     }
    
     function draw(){
        background("#9daba5");
     document.getElementById("font_size").innerHTML="font size of the text will be="+diffrence+"px";
     textSize(diffrence)
     fill("blue")
     text('Tanish',50,200)

     }
     
     
    
