Nosex=0;
Nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;

function setup(){
    video =createCapture(VIDEO);
    video.size(800,700);
    video.position(200,250)
    canvas =createCanvas(750,650);
    canvas.position(1100,250);
    poseNet =ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes); 
}

function modelLoaded(){
    console.log(" Model Is On ");
}

function draw(){
background('#969A97');
document.getElementById("TL").innerHTML="width and height of the square is"+difference+"px";
fill('#ff5349');
stroke('#000000');
square(Nosex,Nosey,difference);

}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        Nosex=results[0].pose.nose.x;
        Nosey=results[0].pose.nose.y;
        console.log("Nose X="+Nosex+"Nose Y="+Nosey);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("LeftWristx="+leftwristx+"RightWristx="+rightwristx);
    }
}


