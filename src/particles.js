function Particle(ctx) {

  this.random = function(a, b) {
    return Math.floor(Math.random() * b) + a;
  };

  this.randPick = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  this.width = ctx.canvas.width;
  this.height = ctx.canvas.height;
  this.colors = ['#3c40c6', '#0be881', '#ff3f34', '#ffd32a'];
  this.x = this.random(0, this.width);
  this.y = this.random(0, this.height);
  this.radius = this.random(2, 7);
  this.color = this.randPick(this.colors);

  this.show = function() {
    let self = this;
    setInterval(function(){
      ctx.clearRect(0, 0, self.width, self.height);
      self.update();
    }, 100);
  }

  this.update = function() {
    this.x++;
    this.y++;
    if (this.x >= this.width) {
      this.x = 5;
    }
    else if (this.x <= 0) {
      this.x = this.width - 5;
    }
    if (this.y >= this.height) {
      this.y = 5;
    }
    else if (this.y <= 0) {
      this.y = this.height - 5;
    }
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.x, 
      this.y, 
      this.radius, 0, 
      2 * Math.PI, 
      false
    );
    ctx.fill();
  }
} 

module.exports = Particle;