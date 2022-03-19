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

//make a rt -table
let ps = 0;
let rt = [];
//fill the rt -table with 2048 random points (between 0 and 1)
for (let i = 0; i < 2048; i+=1){
          
    rt.push(fxrand());
}

let rto = [];
let rttw= [];
let rtth= [];
let rtf = [];
for (let i = 0; i < 2048; i+=1){         
    rto.push(fxrand());
    rttw.push(fxrand());
    rtth.push(fxrand());
    rtf.push(fxrand());
}


//colors -table
let colors = [];
//fill colors table with 2048 random color values (between 0 and 255)
for (let i = 0; i < 2048; i+=1){
    colors.push(fxrand()*255);
}
//same thing as above
let strokecolors = [];
for (let i = 0; i < 2048; i+=1){
    strokecolors.push(fxrand()*255);
}
//make two rgb values
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
    tc = windowCenter();
    
    //make points nw, sw, ne, se -center
    //Is there an easier way?
    nwCenter = [(tc[0] - tc[0]*0.5),(tc[1] - tc[1]*0.5)];
    swCenter = [(tc[0] - tc[0]*0.5),(tc[1] + tc[1]*0.5)];
    neCenter = [(tc[0] + tc[0]*0.5),(tc[1] - tc[1]*0.5)];
    seCenter = [(tc[0] + tc[0]*0.5),(tc[1] + tc[1]*0.5)];
    
    //coordinates for nw, sw, ne, se
    let coords = [nwCenter[0], nwCenter[1], swCenter[0], swCenter[1], neCenter[0], neCenter[1], seCenter[0], seCenter[1]];
    //fill with second random rgb
    fill(redt,greent,bluet);
    textFont('fantasy');
    textSize(21);
    //draw 265 balls
    //NW tc[0],tc[1] 
    //SW tc[0],tc[0]+tc[1]
    //NE tc[0]+tc[0],tc[1],tc[1]
    //SE tc[0]+tc[0],tc[1]
    for (let i = 0; i < 511; i+= 1){
        if (rt[0]*10 < 5 ){
            text("summoning the gnomes",tc[0]*rt[i]+tc[0],tc[1]*rt[rt.length-i]);
            text("summoning the gnomes",tc[0]*rt[i],tc[1]*rt[rt.length-i]);
            text("summoning the gnomes",tc[0]*rt[i],tc[1]+tc[1]*rt[rt.length-i]);
            text("summoning the gnomes",tc[0]*rt[i]+tc[0],tc[1]+tc[1]*rt[rt.length-i]);
        }
        
        if (rt[0]*10 < 2.1 ){
            text("praise Satoshi!",tc[0]*rt[i]+tc[0],tc[1]*rt[rt.length-i]);
            text("praise Satoshi!",tc[0]*rt[i],tc[1]*rt[rt.length-i]);
            text("praise Satoshi!",tc[0]*rt[i],tc[1]+tc[1]*rt[rt.length-i]);
            text("praise Satoshi!",tc[0]*rt[i]+tc[0],tc[1]+tc[1]*rt[rt.length-i]);
        }
        if (rt[0]*10 < 0.21 ){
            text("beware the eye of Moolokki",tc[0]*rt[i]+tc[0],tc[1]*rt[rt.length-i]);
            text("beware the eye of Moolokki",tc[0]*rt[i],tc[1]*rt[rt.length-i]);
            text("beware the eye of Moolokki",tc[0]*rt[i],tc[1]+tc[1]*rt[rt.length-i]);
            text("beware the eye of Moolokki",tc[0]*rt[i]+tc[0],tc[1]+tc[1]*rt[rt.length-i]);
        }
        if (rt[0]*10 < 0.021 ){
            text("Babylon kingdom fall",tc[0]*rt[i]+tc[0],tc[1]*rt[rt.length-i]);
            text("Babylon kingdom fall",tc[0]*rt[i],tc[1]*rt[rt.length-i]);
            text("Babylon kingdom fall",tc[0]*rt[i],tc[1]+tc[1]*rt[rt.length-i]);
            text("Babylon kingdom fall",tc[0]*rt[i]+tc[0],tc[1]+tc[1]*rt[rt.length-i]);
        }
        
        //fill with random colors every loop
        stroke(strokecolors[i],strokecolors[i],strokecolors[i]);
        //fill with random colors every loop
        fill(colors[i],colors[i+1],colors[i+2]);
        //draw the eclipses
        
        ellipse(tc[0]*rtf[i], tc[1]*rtf[rtf.length-i], 50, 50);
        ellipse(tc[0]*rto[i], tc[1]+tc[1]*rt[rto.length-i], 50, 50);
        ellipse(tc[0]+tc[0]*rttw[i], tc[1]+tc[1]*rttw[rttw.length-i], 50, 50);
        ellipse(tc[0]+tc[0]*rtth[i], tc[1]*rtth[rtth.length-i], 50, 50);  
        
        if (rt[0] * 10 > 2.1) {
        fill(colors[i+64],colors[i+65],colors[i+67]);
        square(tc[0]*rtf[i], tc[1]*rtf[rtf.length-i], 50);
        square(tc[0]*rto[i], tc[1]+tc[1]*rt[rto.length-i], 50);
        square(tc[0]+tc[0]*rttw[i], tc[1]+tc[1]*rttw[rttw.length-i], 50);
        square(tc[0]+tc[0]*rtth[i], tc[1]*rtth[rtth.length-i], 50);
        }
        
        if (rt[0]*10 < 2.1) {
        //nw sw 
        //sw ne
        //ne se
        //se nw
        line(nwCenter[0]*rto[i], nwCenter[1]*rttw[i],nwCenter[0]*rtth[i],nwCenter[1]*rtf[i]);
        line(swCenter[0]*rto[i+64], swCenter[1]*rttw[i+64],neCenter[0]*rtth[i+64], neCenter[1]*rtf[i+64]);
        line(neCenter[0]*rto[i+128], neCenter[1]*rttw[i+128],seCenter[0]*rtth[i+128], seCenter[1]*rtf[i+128]);
        line(seCenter[0]*rto[i+196], seCenter[1]*rttw[i+196],nwCenter[0]*rtth[i+196], nwCenter[1]*rtf[i+196]);
        }
 
 
        
    }
    
}

