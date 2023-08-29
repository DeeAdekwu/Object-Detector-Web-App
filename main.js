img = "";
status = "";

function preload(){
    img = loadImage("room.jpeg")
}

function setup() {
    canvas =createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('corsed', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#35b895");
    text("bottle", 85, 75);
    noFill();
    stroke("#35b895");
    rect(70, 60, 300, 350);
    
    fill("#35b895");
    text("teddy", 320, 120);
    noFill();
    stroke("#35b895");
    rect(300, 90, 150, 320);
    
    fill("#35b895");
    text("drawer", 500, 120);
    noFill();
    stroke("#35b895");
    rect(485, 90, 150, 320);
    
    fill("#35b895");
    text("window", 410, 20);
    noFill();
    stroke("#35b895");
    rect(400, 1, 200, 200);
    

}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}