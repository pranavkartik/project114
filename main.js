function preload() {
    clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup() {
    canvas = createCanvas(300, 250);
    canvas.position(530, 150);
    video = createCapture(VIDEO);
    video.size(300, 250);
    video.hide();
}

function draw() {
    image(video, 0, 0, 300, 250);
}

function take_snapshot() {
    save('my_filter.png');
}
