window.onload = function(){
    var button = document.getElementById('send');
    button.addEventListener("click", collectData);
    function collectData(){
         event.preventDefault();
     var form = document.getElementById("form");
      var data1  = form.elements[0].value;
      var data2  = form.elements[1].value;
      var data3  = form.elements[2].value;
       console.log(data1);
       console.log(data2);
       console.log(data3);
        draw(data1,data2,data3);
    }
    function draw(data1,data2,data3){
        var canvas = document.createElement("canvas");
        canvas.setAttribute("height" , "500px");
        canvas.setAttribute("width" , "1000px");
        canvas.setAttribute("id" , "canvas");
        document.body.append(canvas)
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        var width = canvas.width;
        var height = canvas.height;
        grid(ctx);
        ctx.fillStyle = "rgba(242,0 , 0, 1)"
        ctx.fillRect(50,height-data1*10,20, data1*10)
        ctx.fillStyle = "rgba(0, 242, 0, 1)";
        ctx.fillRect(100,height-data2*10,20,data2*10)
        ctx.fillStyle = "rgba(0, 0, 242, 1)";
        ctx.fillRect(150,height-data3*10,20,data3*10)
    }
    function grid(ctx){
        var canvas = document.getElementById('canvas');
        var w = canvas.width;
        var h = canvas.height;
        var range = 200;
        var bl = 1;
        var rangex = w/range;
        var rangey = h/range;
        var color = "green";
	   ctx.strokeStyle = "black";
	    for(i=1;i<=Math.floor(rangey*2);i++){
		ctx.lineWidth = 1/6;
		ctx.beginPath();
		ctx.moveTo(0,(range/2)*i);
		ctx.lineTo(w,(range/2)*i);
		ctx.closePath();
		ctx.stroke();
	   }
    }
}
