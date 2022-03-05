// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

let rt = [];
for (let i = 0; i < 2048; i+=1){
          
    rt.push(fxrand());
}
let colors = [];
for (let i = 0; i < 2048; i+=1){
    colors.push(fxrand()*255);
}

const red = fxrand()*255;
const green = fxrand()*255;
const blue = fxrand()*255;
const redt = fxrand()*255;
const greent = fxrand()*255;
const bluet = fxrand()*255;

//returns biggest value out of width & height
function squareSize(){
    let size;
    if (windowWidth > windowHeight) {
        size = windowHeight
    } else {
        size = windowWidth 
    }
    return size;
}
//make sure to resize the canvas when window is resized
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
//calc. window center, used inside draw
function windowCenter(){
    return [windowWidth * 0.5, windowHeight * 0.5]
}

//create new canvas to windows size & randomize BG color
function setup() {
    createCanvas(windowWidth,windowHeight);
    background(red,green,blue);
}
//where the magic happens
function draw() {
    
    //make a variable size, which is always the biggest of width&height
    const size = squareSize();
    //put center into an array
    theCenter = windowCenter();
    
    //make points nw, sw, ne, se -center
    //Is there an easier way?
    nwCenter = [(theCenter[0] - theCenter[0]*0.5),(theCenter[1] - theCenter[1]*0.5)];
    swCenter = [(theCenter[0] - theCenter[0]*0.5),(theCenter[1] + theCenter[1]*0.5)];
    neCenter = [(theCenter[0] + theCenter[0]*0.5),(theCenter[1] - theCenter[1]*0.5)];
    seCenter = [(theCenter[0] + theCenter[0]*0.5),(theCenter[1] + theCenter[1]*0.5)];
    
    //coordinates for nw, sw, ne, se
    let coords = [nwCenter[0], nwCenter[1], swCenter[0], swCenter[1], neCenter[0], neCenter[1], seCenter[0], seCenter[1]];
    //fill with second random rgb
    fill(redt,greent,bluet);
    //white outline for testing
    stroke('#fff');
    
    //draws 4 circles to ne, sw, ne ,se
    for (let i = 0; i < coords.length; i+= 2){
          ellipse(coords[i], coords[i+1], 50*rt[i], 50*rt[i+1]);
         }
    //finally it's starting to open up to me
    //this is NW, SW is + theCenter[1]+theCenter[1]
    //NE theCenter[0] + theCenter[0]
    //SE is both summed
    for (let i = 0; i < 63; i+= 1){
        fill(colors[i],colors[i+1],colors[i+2]);
          ellipse(theCenter[0]*rt[i], theCenter[1]*rt[i+1], 50, 50);
          ellipse(theCenter[0]*rt[i+63], theCenter[1]+theCenter[1]*rt[i+64], 50, 50);
          ellipse(theCenter[0]+theCenter[0]*rt[i+127], theCenter[1]+theCenter[1]*rt[i+128], 50, 50);
          ellipse(theCenter[0]+theCenter[0]*rt[i+191], theCenter[1]*rt[i+192], 50, 50);
          
         }
}


