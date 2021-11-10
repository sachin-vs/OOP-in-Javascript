//Factory function
function CreateCircle(r){
    return{
       radius: r,
       draw: function(){
           console.log('draw');
       } 
    }
}

circle= CreateCircle(5);
//circle.draw();

//Constructor function
function Circle(){
    this.radius= this.radius;
    this.draw=function(){
        console.log('Draw');
    }
}

const another = new Circle(15);
another.draw();