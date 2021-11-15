function setup() {
    video = createCapture(VIDEO);
    video.size(4000,500);
    video.position(0,500)

    canvas = createCanvas(550,500);
    canvas.position(560,500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#808080');
}
function modelLoaded(){
    console.log("PoseNet is initialized!");
}
function gotPoses(results){
    if(results.length > 0)
    {
    console.log(results);
    }
}