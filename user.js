var count = 0;

function User(params){

  this.name = params.name;
  this.id = count;
  this.color = '#000000';
  this.life = 3;
  this.swordSize = 1;

  this.x = Math.random() * 10;
  this.y = Math.random() * 10;

  count++;
}

User.prototype.updatePosition = function(data){
  this.x = data.x;
  this.y = data.y;
};

module.exports = User;
