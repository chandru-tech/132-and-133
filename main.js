img = "";
status = "";
objects = [];

function preload() {
  img = loadImage('obi.jpg')
} 

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDectector = ml5.objectDetector('cocossd', modelloaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelloaded() {
    console.log("Modelloaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function draw() {
    image( img, 0, 0, 640, 420 );

       if (status != "")
       {
        for (i = 0; i < objects.length; i++) 
        {
           document.getElementById("status").innerHTML = "Status : object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent +"%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
       }
}

function draw() {
    image( img, 0, 0, 640, 420 );
    fill("#FF0000")
    text("obito", 100, 40);
    noFill();
    stroke("#FF0000");
    rect(90, 30, 250, 300);

    fill("#FF0000");
    text("deidara", 420, 40);
    noFill();
    stroke("#FF0000");
    rect(420, 30, 200, 200);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}


