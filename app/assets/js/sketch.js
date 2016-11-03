
var stretchy;
var blobSize ; 
var face;
var eyeSize; 
var reverse; 
var bate; 
var bates;
var colors;
var trail = [];
var ellipseSize = 52;

var oldColor; 
var newColor; 

function setup() {
  background("#00688B");
  blobSize = 50; 
  //5 pages
  bate = 0;

  bates = [];

  colors = [
    {r:240, g:248, b:255},
    {r:173, g:216, b:230},
    {r:30, g:144, b:255}, 
    {r:135, g:206, b:250},
    {r:100, g:149,b:237},
    {r:123, g:104, b:238},
    {r:65, g:105, b:255},
    {r:75, g:0, b:130}
  ]

  //game canvas
  var canvas = createCanvas(window.innerWidth / 6.67, window.innerHeight);
  canvas.parent("canvas");

  stretchy = createSprite(width/2, height/8, blobSize, blobSize);
  eyeSize = 20; 
  reverse = 1;

  var i = Math.floor(Math.random() * (colors.length));
  bates.push(new Bate(colors[i]));

  oldColor = {r: 255, g:255, b:255};
  newColor = colors[i];

  stretchy.checkBorder = function(){
    if(this.position.x < 0){
      this.position.x = width; 
      trail = [];
    }
    else if(this.position.x > width){
      this.position.x = 0; 
      trail = [];
    }

    if(this.position.y < 0){
      this.position.y = height; 
      trail = [];
    }
    else if(this.position.y > height){
      this.position.y = 0;
      trail = [];
    }
}

  //face
  stretchy.face = function(){
    noStroke();
    push();
    translate(this.position.x + 10 , this.position.y - 2);
    smooth();
    stroke(0);
    fill(255);
    ellipse(0,0,eyeSize,eyeSize);
    rotate(radians(this.getDirection()));
    fill(0); 
    ellipse(eyeSize/4, 0, eyeSize/2, eyeSize/2);
    fill(255); 
    ellipse(eyeSize/6, 0, eyeSize/4, eyeSize/4);
    pop();

    push();
    translate(this.position.x - 10 , this.position.y - 2);
    smooth();
    stroke(0);
    fill(255);
    ellipse(0,0,eyeSize,eyeSize);
    rotate(radians(this.getDirection()));
    fill(0); 
    ellipse(eyeSize/4,0,eyeSize/2, eyeSize/2);
    fill(255);
    ellipse(eyeSize/6, 0, eyeSize/4, eyeSize/4);
    pop();

    push();
    translate(this.position.x - 4 , this.position.y + 6);
    smooth();
    stroke(0); 
    noFill();
    curve(-1,2,-10,-20,2,-20,5,2);
    pop(); 

    push();
    translate(this.position.x  + 15 , this.position.y + 6);
    smooth();
    stroke(0); 
    noFill();
    curve(-1,2,-10,-20,2,-20,5,2);
    pop(); 

  }


  stretchy.updateHistory = function(){
    trail.push({ x: stretchy.position.x , y: stretchy.position.y});
    if (trail.length > 12) {
         trail.shift();
    }

  }

  stretchy.drawTrail = function(){
      noStroke();
      for(var i = 0; i < trail.length; i++){
        var s = map (i, 0, trail.length, 1, ellipseSize);
        var c = lerpColor(color(newColor.r, newColor.g, newColor.b, 150), color(oldColor.r, oldColor.g, oldColor.b, 150), map(i, 0, trail.length, 1, 0));
        fill(c);
        ellipse(trail[i].x, trail[i].y, s, s);
      };
  }

  //first one
  trail.push({x: width/2, y: height/8});
  
  //rewrite draw function
  stretchy.draw = function() {
    //fill(200);
    //stroke(100); 
    noFill();
    noStroke();
    push();
    rotate(radians(this.getDirection()));
    ellipse(0,0, blobSize+(this.getSpeed() * 1.2), blobSize-(this.getSpeed() * 1.2));
    pop();
  }

  stretchy.maxSpeed = 5;

}

function draw() {
  background("#00688B");
 
  if(frameCount % 300 === 0){
    var i = Math.floor(Math.random() * (colors.length));
    bates.push(new Bate(colors[i]));
  }

  bates.forEach(function(el){
    el.move();
    el.display();
    var collided = el.collide(stretchy);
    if(collided){
      oldColor = newColor;
      newColor = el.c;
      var index = bates.indexOf(el);
      if(index > -1){
        bates.splice(index, 1);
      }
    }
    if(el.position.y < -10){
      //remove
      var index = bates.indexOf(el);
      if(index > -1){
        bates.splice(index, 1);
      }
    }
  });

  stretchy.drawTrail();
  drawSprites();
  stretchy.face(); 
  stretchy.checkBorder();
  stretchy.updateHistory();

}

function mouseWheel(event){

  //closet bate ? 
  var closest; 
  var d = 100000000; 
  
  bates.forEach(function(b){
     var distance = Math.sqrt( (stretchy.position.x-b.position.x)*(stretchy.position.x-b.position.x) 
      + (stretchy.position.y-b.position.y)*(stretchy.position.y-b.position.y) );
     if(distance < d){
        d = distance; 
        closest = b;
     }
  });

  //event.preventDefault(); 
  if(event.delta === 0 || event.delta === -0){
    reverse *= -1; 
  }
  stretchy.velocity.y = event.delta ;

  if(closest == null){
     stretchy.velocity.x = 0;
  }

  if(closest != null){
    var xDir = p5.Vector.sub(closest.position, stretchy.position);
    xDir.normalize();
    stretchy.velocity.x = (xDir.x * Math.abs(event.delta));
  }
}


function Bate(color) {
   this.c = color;
   this.diameter = 2;
   this.size = 11;
   this.velocity = createVector(0,-1);
   if(bate % 2 == 0){
      this.position = createVector(40,height + 5);
   }
   else{
      this.position = createVector(width - 40,height + 5);
   }
   bate++;

   this.collide = function(blob){
      if (blob.position.x + blobSize/2 + this.diameter/2 > this.position.x 
      && blob.position.x < this.position.x + blobSize/2 + this.diameter/2
      && blob.position.y + blobSize/2 + this.diameter/2 > this.position.y 
      && blob.position.y < this.position.y + blobSize/2 + this.diameter/2)
        {
          return true;
        }
      else{
        return false;
      }
   }

   this.display = function() {
     stroke("#eeeeee");
     fill(this.c.r, this.c.g, this.c.b);
     rect(this.position.x, this.position.y, this.size, this.size);
   }

   this.move = function(){
    this.position.y += this.velocity.y;
   }
}






