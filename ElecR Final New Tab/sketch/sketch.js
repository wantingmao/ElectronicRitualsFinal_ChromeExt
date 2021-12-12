var canvas;
//var h = hour();
var h1, h2, vl;
var markov1 = new RiMarkov(3);
var markov2 = new RiMarkov(3);
var markov3 = new RiMarkov(3);
var markov4 = new RiMarkov(3);
var markov5 = new RiMarkov(3);
var markov6 = new RiMarkov(3);
var line1, line2, line3, line4, line5;
var orbEffect = [];

let temperature = 0;
let weather = "";
let json;

function preload() {
  markov1.loadFrom("poems/ifyouforgetme.txt");
  markov2.loadFrom("poems/nomanisanisland.txt");
  markov3.loadFrom("poems/housekeeping.txt");
  markov4.loadFrom("poems/thepeaceofwildthings.txt");
  markov5.loadFrom("poems/therewillcomesoftrain.txt");
  click = loadSound('click.wav');
  let url = "https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141";
//  weathericon = loadImage("weathericon.png");
json = loadJSON(url);
}

function setup() {
  canvas =  createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  background(255);
  fill (170);
  textSize(32);
  textFont('Georgia')
  // weathericon = createElement("img",'weathericon.png');
  // weathericon.position(width*4.5/10,height*0.5/10);

  h1 = createElement('h1','daily insight')
  h1.position(width*4.5/10,height*0.7/10);
  h1.style('font-family', 'Georgia')
  h1.style('font-weight', '450')
  h1.style('font-style', 'italic')
  h1.style('font-size', '25px');
  h1.style('color',"#FFFFFF")
  h2 = createElement('h2','journal')
  h2.position(width*4.5/10,height*4.76/9);
  h2.style('font-family', 'Georgia')
  h2.style('font-weight', '450')
  h2.style('font-style', 'italic')
  h2.style('font-size', '25px');
  h2.style('color','#ffffff')

 noStroke();

// Generate Insight Button
  Genbutton = createButton("generate");
  Genbutton.mousePressed(generateOracle);
  Genbutton.position(width*8.9/10,height*0.93/10);
  console.log("generated!");

// Journal Input

  journalInput = createInput("");
  journalInput.size(610, 110);
  journalInput.position(width*4.56/10, height*6.5/10);

// Release Journal Button
  Relbutton = createButton("release");
  Relbutton.mousePressed(releaseJournal);
  Relbutton.position(width*8.94/10,height*8.77/10);
  console.log("released!");

  for (let i = 0; i < 200; i++) {
    let addNew = new Orb(random(0, width), random(0, height), random(100, 300), random(1, 7), random(1, 3));
    orbEffect.push(addNew);
  }

  temperature = json.main.temp;
  weather = json.weather[0].description;
  city = createElement('h1',"New York")
  city.position(width*1.5/11,height*1.5/10);
  city.style('font-family', 'Georgia')
  city.style('font-weight', '450')
  city.style('font-style', 'italic');
  city.style('font-size', '35px');
  city.style('color',"#FFFFFF");
  // image(weathericon,0,0,400,200);
temp = createElement('h1',temperature + "°", width*2/10, 140);
temp.position(width*2.7/12,height*3.5/10);
temp.style('font-family', 'Georgia')
temp.style('font-weight', '450')
temp.style('font-style', 'italic')
temp.style('font-size', '30px');
temp.style('color',"#FFFFFF")
var m = month()
var d = day()
var y = year()
var h = hour()
var mi = minute()
var se = second()
date = createElement('h1', m + '.' + d + '.' + y);
date.position(width*1.7/12,height*5.5/10);
date.style('font-family', 'Georgia')
date.style('font-weight', '450')
date.style('font-style', 'italic')
date.style('font-size', '30px');
date.style('color',"#FFFFFF")
time = createElement('h1', h + ':' + mi );
time.position(width*2/12,height*6.8/10);
time.style('font-family', 'Georgia');
time.style('font-weight', '450');
time.style('font-style', 'italic');
time.style('font-size', '30px');
time.style('color',"#FFFFFF");
}

function draw() {

 // background orb animation
    for (let i = 0; i < orbEffect.length; i++) {
    orbEffect[i].display();
    orbEffect[i].move();
        for (let j = i+1; j < orbEffect.length; j++) {
            let distance = dist(orbEffect[i].x, orbEffect[i].y, orbEffect[j].x, orbEffect[j].y);
            if (distance < (orbEffect[i].d/2 + orbEffect[j].d/2)) {
            }
        }
  }
}

function generateOracle() {
     click.play();
    click.setVolume(3);
    if (line1) { line1.remove(); }
  	var output1 = markov1.generateSentences(2)[0];
  	line1 = createP(output1);
    linecolor= color (255,255,255);
    line1.style('color',linecolor)
    line1.style('font-size', '15px');
    line1.position(30, 110);
//set width of html element with .attribute?
//store the journal in local stockbrokerage/ firebase api based backhand storage
//how the browser tab complicates/advances my idea, why the browser tab, find an idea that you want to prove/disapprove
//search up browser tab rituals
//use these examples to prove that the browsertab a ritual
//
    if (line2) { line2.remove(); }
  	var output2 = markov2.generateSentences(1)[0];
  	line2 = createP(output2);
    line2.style('color',linecolor);
    line2.style('font-size', '15px');
    line2.position(30, 150);

    if (line3) { line3.remove(); }
    var output3 = markov3.generateSentences(1)[0];
  	line3 = createP(output3);
   line3.style('color',linecolor);
  line3.style('font-size', '15px');
    line3.position(30, 190);

    if (line4) { line4.remove(); }
  	var output4 = markov4.generateSentences(1)[0];
  	line4 = createP(output4);
  line4.style('color',linecolor);
  line4.style('font-size', '15px');
    line4.position(30, 230);

    if (line5) { line5.remove(); }
  	var output5 = markov5.generateSentences(1)[0];
  	line5 = createP(output5);
  line5.style('font-size', '15px');
  line5.style('color',linecolor)
    line5.position(30, 270);
}

function releaseJournal() {
    click.play();
    click.setVolume(3);
    journalInput.value("");

}
