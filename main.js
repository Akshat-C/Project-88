var canvas = new fabric.Canvas("myCanvas");
var town_obj = "";
var person_obj = "";
var px = 700;
var py = 390;
var player = "";

function boy()
{
    player = "Boy.jpg";
    person(player);
    document.getElementById("btn_div").style.display = "none";
}

function girl()
{
    player = "Girl.jpg";
    person(player);
    document.getElementById("btn_div").style.display = "none";
}

function back_load()
{
   
    fabric.Image.fromURL("Town.jpg", function(Img){
        town_obj = Img;
        town_obj.scaleToWidth(1100);
        town_obj.scaleToHeight(785);

        town_obj.set({
            top: 0,
            left: 0
        });

        canvas.add(town_obj);
    })
    //person(get_img);
}

function person(get_img)
{
    fabric.Image.fromURL(get_img, function(Img){
        person_obj = Img;
        person_obj.scaleToWidth(50);
        person_obj.scaleToHeight(75);

        person_obj.set({
            top: py,
            left: px
        });

        canvas.add(person_obj);
    })
    document.getElementById("xv").innerHTML = px;
    document.getElementById("yv").innerHTML = py;
}



window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);

    if ((px >= 1020)&&(py >= 500))
    {
        document.getElementById("heading").innerHTML = "You Reached Home!!!!!";
        document.getElementById("heading").style.color = "red";
        document.getElementById("myCanvas").style.borderColor = "red";
        canvas.remove(person_obj);
    }

    if (keypressed == 37)
    {
        left();
        console.log("left arrow is pressed");
    } else if (keypressed == 38)
    {
        up();
        console.log("up arrow is pressed");
    } else if (keypressed == 39)
    {
        right();
        console.log("right arrow is pressed");
    } else if (keypressed == 40)
    {
        down();
        console.log("down arrow is pressed");
    }
}

function left()
{
    if (px >= 0)
    {
        px = px - 10;
        canvas.remove(person_obj);
        person(player);
    } 
    if (px >= 1020 && py >= 500)
    {
        canvas.remove(person_obj);
        document.getElementById("heading").innerHTML = "You Reached Home!!!!!";
        document.getElementById("heading").style.color = "red";
        document.getElementById("myCanvas").style.borderColor = "red";
    }
}

function right()
{
    if (px <= 1050)
    {
        px = px + 10;
        canvas.remove(person_obj);
        person(player);
    }
    if ((px >= 1020)&&(py >= 500))
    {
        canvas.remove(person_obj);
        document.getElementById("heading").innerHTML = "You Reached Home!!!!!";
        document.getElementById("heading").style.color = "red";
        document.getElementById("myCanvas").style.borderColor = "red";
    }
}

function up()
{
    if (py >= 0)
    {
        py = py - 10;
        canvas.remove(person_obj);
        person(player);
    }
    if (px >= 1020 && py >= 500)
    {
        canvas.remove(person_obj);
        document.getElementById("heading").innerHTML = "You Reached Home!!!!!";
        document.getElementById("heading").style.color = "red";
        document.getElementById("myCanvas").style.borderColor = "red";
    }
}

function down()
{
    if (py <= 530)
    {
        py = py + 10;
        canvas.remove(person_obj);
        person(player);
    }
    if ((px >= 1020)&&(py >= 500))
    {
        canvas.remove(person_obj);
        document.getElementById("heading").innerHTML = "You Reached Home!!!!!";
        document.getElementById("heading").style.color = "red";
        document.getElementById("myCanvas").style.borderColor = "red";
    }
}

function creset()
{
    px = 700;
    py = 390;
    document.getElementById("xv").innerHTML = "";
    document.getElementById("yv").innerHTML = "";
    document.getElementById("btn_div").style.display = "inline";
    canvas.remove(person_obj);
    
    document.getElementById("heading").innerHTML = "Reach Home";
    document.getElementById("heading").style.borderColor = "";
    document.getElementById("heading").style.color = "orange";
    document.getElementById("myCanvas").style.borderColor = "black";
}

