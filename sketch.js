//personagem pc

var zumbi1
var zumbi2
var zumbi3

var zumbi1imagem
var zumbi2imagem
var zumbi3imagem

var rede1
var bumerangue2
var pa3

var rede1imagem
var bumerangue2imagem
var pa3imagem

//personagem npc
var caixoes

var caixoesimagem

var planta1
var planta2
var planta3
var planta4
var planta4
var planta6
var planta7
var planta8
var planta9
var planta10
var planta11
var planta12
var planta13
var planta14
var planta15
var planta16
var planta17
var planta18

var planta1imagem
var planta2imagem
var planta3imagem 

var baudeajuda
var baudeajudaimagem

var premio 
var premioimagem

var fundo
var fundoimagem

// var paredes

{
var parede1
var parede2
var parede3
var parede4
var parede5
var parede6
var parede7
var parede8

var parede1a
var parede2a
var parede3a
var parede4a
var parede5a
var parede6a
var parede7a
var parede8a

var parede1b
var parede2b
var parede3b
var parede4b
var parede5b
var parede6b
var parede7b
var parede8b

var parede1c
var parede2c
var parede3c
var parede4c
var parede5c
var parede6c
var parede7c
var parede8c

var parede1d
var parede2d
var parede3d
var parede4d
var parede5d
var parede6d
var parede7d
var parede8d

var parede1e
var parede2e
var parede3e
var parede4e
var parede5e
var parede6e
var parede7e
var parede8e

var parede1f
var parede2f
var parede3f
var parede4f
var parede5f
var parede6f
var parede7f
var parede8f

var parede1g
var parede2g
var parede3g
var parede4g
var parede5g
var parede6g
var parede7g
var parede8g

var parede1i
var parede2i
var parede3i
var parede4i
var parede5i
var parede6i
var parede7i
var parede8i

var parede1j
var parede2j
var parede3j
var parede4j
var parede5j
var parede6j
var parede7j
var parede8j

var parede1k
var parede2k
var parede3k
var parede4k
var parede5k
var parede6k
var parede7k
var parede8k

var parede1l
var parede2l
var parede3l
var parede4l
var parede5l
var parede6l
var parede7l
var parede8l

var parede1m
var parede2m
var parede3m
var parede4m
var parede5m
var parede6m
var parede7m
var parede8m

var parede1n
var parede2n
var parede3n
var parede4n
var parede5n
var parede6n
var parede7n
var parede8n

var parede1o
var parede2o
var parede3o
var parede4o
var parede5o
var parede6o
var parede7o
var parede8o
var parede1p
}

var gamestate = "play"

var inicio
var tela
var telaimagem
var botao
var botaoimagem



//preload imagens pra carregar 

function preload() {
     zumbi1imagem = loadImage("zumbi1.png");
     zumbi2imagem = loadImage("zumbi2.png");
     zumbi3imagem = loadImage("zumbi3.png");
    
    // baudeajudaimagem = loadImage();
    // premioimagem = loadImage();
    
     planta1imagem = loadImage("lanta1.png");
     planta2imagem = loadImage("planta2.png");
     planta3imagem = loadImage("planta3.png");

    telaimagem = loadImage("jogotela.jpg");
    botaoimagem = loadImage("botao.png");
    }

function setup() {

createCanvas(2025,1000);

// camera.zoom = 5

paredegrupo = new Group();

botao = createSprite(1500, 500)
botao.addImage("b", botaoimagem)

zumbi1 = createSprite(900,950,50,50);
zumbi1.addImage("z",zumbi1imagem);
zumbi1.scale = 0.07;

zumbi2 = createSprite(1350, 450, 50,50)
zumbi2.addImage("z2", zumbi2imagem)
zumbi2.scale = 0.08

zumbi3 = createSprite(800, 150, 50,50)
zumbi3.addImage("z3", zumbi3imagem)
zumbi3.scale = 0.04

planta1 = createSprite(50, 50, 10 , 10)
planta1.addImage("p1", planta1imagem)
planta1.scale = 0.04  

planta2 = createSprite(950, 550, 10, 10)
planta2.addImage("p2", planta2imagem)
planta2.scale = 0.03

planta3 = createSprite(200, 200, 10, 10)
planta3.addImage("p3", planta3imagem)
planta3.scale = 0.04

planta4 = createSprite(100, 150, 10 , 10)
planta4.addImage("p1", planta1imagem)
planta4.scale = 0.04  

planta5 = createSprite(1050, 750, 10, 10)
planta5.addImage("p2", planta2imagem)
planta5.scale = 0.03

planta6 = createSprite(400, 400, 10, 10)
planta6.addImage("p3", planta3imagem)
planta6.scale = 0.04

planta7 = createSprite(600, 900, 10 , 10)
planta7.addImage("p1", planta1imagem)
planta7.scale = 0.04  

planta8 = createSprite(850, 500, 10, 10)
planta8.addImage("p2", planta2imagem)
planta8.scale = 0.03

planta9 = createSprite(90, 350, 10, 10)
planta9.addImage("p3", planta3imagem)
planta9.scale = 0.04

planta10 = createSprite(58, 59, 10 , 10)
planta10.addImage("p1", planta1imagem)
planta10.scale = 0.04  

planta11 = createSprite(850, 750, 10, 10)
planta11.addImage("p2", planta2imagem)
planta11.scale = 0.03

planta12 = createSprite(680, 400, 10, 10)
planta12.addImage("p3", planta3imagem)
planta12.scale = 0.04

planta13 = createSprite(987, 765, 10 , 10)
planta13.addImage("p1", planta1imagem)
planta13.scale = 0.04  

planta14 = createSprite(798, 908, 10, 10)
planta14.addImage("p2", planta2imagem)
planta14.scale = 0.03

planta15 = createSprite(483, 321, 10, 10)
planta15.addImage("p3", planta3imagem)
planta15.scale = 0.04

planta16 = createSprite(098, 890, 10 , 10)
planta16.addImage("p1", planta1imagem)
planta16.scale = 0.04  

planta17 = createSprite(959, 650, 10, 10)
planta17.addImage("p2", planta2imagem)
planta17.scale = 0.03

planta18 = createSprite(800, 900, 10, 10)
planta18.addImage("p3", planta3imagem)
planta18.scale = 0.04

{   // praredes
 parede1 = createSprite(600, 950, 5, 100);
 paredegrupo.add(parede1)
 parede2 = createSprite(1400, 950, 5, 100);
 paredegrupo.add(parede2)
 parede3 = createSprite(67.5, 200, 135,5);
 paredegrupo.add(parede3)
 parede4 = createSprite(300, 950, 5, 100);
 paredegrupo.add(parede4)
 parede5 = createSprite(67.5, 400, 135, 5);
 paredegrupo.add(parede5)
 parede6 = createSprite(165, 850, 5, 100)
 paredegrupo.add(parede6)
 parede7 = createSprite(450, 850, 5, 100)
 paredegrupo.add(parede7)
 parede8 = createSprite(833, 852, 5, 100)
 paredegrupo.add(parede8)
 parede1a = createSprite(1150, 850, 5, 100)
 paredegrupo.add(parede1a)
 parede2a = createSprite(1885, 850, 5, 100)
 paredegrupo.add(parede2a) 
 parede3a = createSprite(310, 752, 5, 100)
 paredegrupo.add(parede3a)
 parede4a = createSprite(450, 750, 5, 100)
 paredegrupo.add(parede4a)
 parede5a = createSprite(700, 750, 5, 100)
 paredegrupo.add(parede5a)
 parede6a = createSprite(1150, 750, 5, 100)
 paredegrupo.add(parede6a)
 parede7a = createSprite(1270, 750, 5, 100)
 paredegrupo.add(parede7a)
 parede8a = createSprite(1666, 750, 5, 100)
 paredegrupo.add(parede8a)
 parede1b = createSprite(177, 650, 5, 100)
 paredegrupo.add(parede1b)
 parede2b = createSprite(177, 550, 5, 100)
 paredegrupo.add(parede2b)
 parede3b = createSprite(600, 650, 5,100)
 paredegrupo.add(parede3b)
 parede4b = createSprite(234, 900, 135, 5)
 paredegrupo.add(parede4b)
 parede5b = createSprite(380, 800, 135, 5)
 paredegrupo.add(parede5b)
 parede6b = createSprite(664, 900, 135, 5)
 paredegrupo.add(parede6b)
 parede7b = createSprite(764, 900, 135, 5)
 paredegrupo.add(parede7b)
 parede8b = createSprite(1215, 900, 135, 5)
 paredegrupo.add(parede8b)
 parede1c = createSprite(1080, 900, 135, 5)
 paredegrupo.add(parede1c)
 parede2c = createSprite(1335, 900, 135, 5)
 paredegrupo.add(parede2c)
 parede3c = createSprite(1819, 900, 135, 5)
 paredegrupo.add(parede3c)
 parede4c = createSprite(1690, 900, 135, 5)
 paredegrupo.add(parede4c)
 parede5c = createSprite(510, 800, 135, 5)
 paredegrupo.add(parede5c)
 parede6c = createSprite(634, 800, 135, 5)
 paredegrupo.add(parede7c)
 parede7c = createSprite(898, 800, 135, 5)
 paredegrupo.add(parede8c)
 parede8c = createSprite(968, 800, 135, 5)
 paredegrupo.add(parede1d)
 parede1d = createSprite(1335, 800, 135, 5)
 paredegrupo.add(parede2d)
 parede2d = createSprite(1468, 800, 135, 5)
 paredegrupo.add(parede3d)
 parede3d = createSprite(1600, 800, 135, 5)
 paredegrupo.add(parede4d)
 parede4d = createSprite(1954, 800, 135, 5)
 paredegrupo.add(parede5d)
 parede5d = createSprite(244, 700, 135, 5)
 paredegrupo.add(parede6d)
 parede6d = createSprite(1600, 700, 135, 5)
 paredegrupo.add(parede7d)
 parede7d = createSprite(1730, 700, 135, 5)
paredegrupo.add(parede6c)
 parede8d = createSprite(1795, 650, 5, 100)
 paredegrupo.add(parede8d)
 parede1e = createSprite(1730, 600, 135, 5)
 paredegrupo.add(parede1e)
 parede2e = createSprite(1600, 600, 135, 5)
 paredegrupo.add(parede2e)
 parede3e = createSprite(1470, 600, 135, 5)
 paredegrupo.add(parede3e)
 parede4e = createSprite(1400, 650, 5, 100)
 paredegrupo.add(parede4e)
 parede5e = createSprite(1345, 600, 135, 5)
 paredegrupo.add(parede5e)
 parede6e = createSprite(1210, 600, 135, 5)
 paredegrupo.add(parede6e)
 parede7e = createSprite(1077, 600, 135, 5)
 paredegrupo.add(parede7e)
 parede8e = createSprite(1012, 650, 5, 100)
 paredegrupo.add(parede8e)
 parede1f = createSprite(1147, 550, 5, 100)
 paredegrupo.add(paredef1)
 parede2f = createSprite(1147, 450, 5, 100)
 paredegrupo.add(paredef2)
 parede3f = createSprite(1077, 492, 135, 5)
 paredegrupo.add(paredef3)
 parede4f = createSprite(942, 492, 135, 5)
 paredegrupo.add(paredef4)
 parede5f = createSprite(807, 492, 135, 5)
 paredegrupo.add(paredef5)
 parede6f = createSprite(872, 440, 5, 100)
 paredegrupo.add(paredef6)
 parede7f = createSprite(872, 544, 5, 100)
 paredegrupo.add(paredef7)
 parede8f = createSprite(872, 644, 5, 100)
 paredegrupo.add(parede8f)
 parede1g = createSprite(806, 693, 135, 5)
 paredegrupo.add(parede1g)
 parede2g = createSprite(765, 693, 135, 5)
 paredegrupo.add(parede2g)
 parede3g = createSprite(670, 600, 135, 5)
 paredegrupo.add(parede3g)
 parede4g = createSprite(538, 600, 135, 5)
 paredegrupo.add(parede4g)
 parede5g = createSprite(403, 600, 135, 5)
 paredegrupo.add(parede5g)
 parede6g = createSprite(450, 545, 5, 100)
 paredegrupo.add(parede6g)
 parede7g = createSprite(515, 491, 135, 5)
 paredegrupo.add(parede7g)
 parede8g = createSprite(645, 491, 135, 5)
 paredegrupo.add(parede8g)
 parede1h = createSprite(680, 491, 135, 5)
 paredegrupo.add(parede1h)
 parede2h = createSprite(242, 500, 135, 5)
 paredegrupo.add(parede2h)
 parede3h = createSprite(310, 450, 5, 100)
 paredegrupo.add(parede3h)
 parede4h = createSprite(310, 350, 5, 100)
 paredegrupo.add(parede4h)
 parede5h = createSprite(245, 300, 135, 5)
 paredegrupo.add(parede5h)
 parede6h = createSprite(310, 250, 5, 100)
 paredegrupo.add(parede6h)
 parede7h = createSprite(310, 150, 5, 100)
 paredegrupo.add(parede7h)
 parede8h = createSprite(245, 100, 135, 5)
 paredegrupo.add(parede8h)
 parede1j = createSprite(370, 300, 135, 5)
 paredegrupo.add(parede1i)
 parede2j = createSprite(505, 300, 135, 5)
 paredegrupo.add(parede2i)
 parede3j = createSprite(570, 250, 5, 100)
 paredegrupo.add(parede3i)
 parede4j = createSprite(570, 350, 5, 100)
 paredegrupo.add(parede4i)
 parede5j = createSprite(505, 400, 135, 5)
 paredegrupo.add(parede5i)
 parede6j = createSprite(630, 400, 135, 5)
 paredegrupo.add(parede6i)
 parede7j = createSprite(872, 345, 5, 100)
 paredegrupo.add(parede7i)
 parede8j = createSprite(872, 245, 5, 100)
 paredegrupo.add(parede8i)
 parede1k = createSprite(801, 300, 135, 5)
 paredegrupo.add(parede1j)
 parede2k = createSprite(801, 195, 135, 5)
 paredegrupo.add(parede2j)
 parede3k = createSprite(737, 145, 5, 100)
 paredegrupo.add(parede3j)
 parede4k = createSprite(670, 96, 135, 5)
 paredegrupo.add(parede4j)
 parede5k = createSprite(535, 96, 135, 5)
 paredegrupo.add(parede5j)
 parede6k = createSprite(470, 150, 5, 100)
 paredegrupo.add(parede6j)
 parede7k = createSprite(935, 194, 135, 5)
 paredegrupo.add(parede7j)
 parede8k = createSprite(1000,141, 5, 100)
 paredegrupo.add(parede8j)
 parede1l = createSprite(935, 93, 135, 5)
 paredegrupo.add(parede1k)
 parede2l = createSprite(870, 40, 5, 100)
 paredegrupo.add(parede2k)
 parede3l = createSprite(1070, 195, 135, 5)
 paredegrupo.add(parede3k)
 parede4l = createSprite(1000, 350, 5, 100)
 paredegrupo.add(parede4k)
 parede5l = createSprite(1068, 300, 135, 5)
 paredegrupo.add(parede5k)
 parede6l = createSprite(1200, 300, 135, 5)
 paredegrupo.add(parede6k)
 parede7l = createSprite(1270, 350, 5, 100)
 paredegrupo.add(parede7k)
 parede8l = createSprite(1270, 250, 5 ,100)
 paredegrupo.add(parede8k)
 parede1m = createSprite(1270, 450, 5, 100)
 paredegrupo.add(parede1l)
 parede2m = createSprite(1270, 150, 5, 100)
 paredegrupo.add(parede2l)
 parede3m = createSprite(1340, 500, 135, 5);
 paredegrupo.add(parede3l)
 parede4m = createSprite(1470, 500, 135, 5);
 paredegrupo.add(parede4l)
 parede5m = createSprite(1400, 450, 5, 100);
 paredegrupo.add(parede5l)
 parede1n = createSprite(1340, 100, 135, 5);
 paredegrupo.add(parede6l)
 parede1n = createSprite(1470, 100, 135, 5);
 paredegrupo.add(parede7l)
 parede1n = createSprite(1600, 100, 135, 5);
 paredegrupo.add(parede8l)
 parede1n = createSprite(1670, 150, 5, 100);
 paredegrupo.add(parede1m)
 parede1n = createSprite(1735, 200, 135, 5);
 paredegrupo.add(parede2m)
 parede1n = createSprite(1800, 150, 5, 100);
 paredegrupo.add(parede3m)
 parede1n = createSprite(1735, 500, 135, 5);
 paredegrupo.add(parede4m)
 parede1n = createSprite(1670, 450, 5, 100);
 paredegrupo.add(parede5m)
 parede1o = createSprite(1600, 400, 135, 5);
 paredegrupo.add(parede6m)
 parede2o = createSprite(1535, 350, 5, 100);
 paredegrupo.add(parede7m)
 parede3o = createSprite(1470, 300, 135, 5);
 paredegrupo.add(parede8m)
 parede4o = createSprite(1400, 250, 5, 100);
 paredegrupo.add(parede1n)
 parede5o = createSprite(1470, 200, 135, 5);
 paredegrupo.add(parede2n)
 parede6o = createSprite(1600, 300, 135, 5);
 paredegrupo.add(parede3n)
 parede7o = createSprite(1720, 300, 135, 5);
 paredegrupo.add(parede4n)
 parede8o = createSprite(1790, 350, 5, 100);
 paredegrupo.add(parede5n)
}

 fundo = createSprite(1012, 320, 2025, 1000);
 fundo.addImage("f", telaimagem);
 fundo.scale = 2
}

function draw(){
background("black");
drawSprites();


zumbi1.bounceOff(paredegrupo);
zumbi2.bounceOff(paredegrupo);
zumbi3.bounceOff(paredegrupo);


if (gamestate === "play" ){
fundo.visible = true
botao.visible = true

if (mousePressedOver(botao)){
gamestate = "zumbi1s"
}
}

else if(gamestate === "zumbi1s" ){
    zumbi1st()


}

else if(gamestate === "zumbi2s"){
zumbi2st()

}

else if(gamestate === "zumbi3s"){
zumbi3st()

}

else if(gamestate === "final"){


}
}

function zumbi1st(){

// camera.x = zumbi1.x
// camera.y = zumbi1.y

if (keyIsDown (UP_ARROW)){
    zumbi1.y = zumbi1.y -3
}

if (keyIsDown(LEFT_ARROW)){
    zumbi1.x = zumbi1.x -3
}

if (keyIsDown (RIGHT_ARROW)){
    zumbi1.x = zumbi1.x +3
}

if (keyIsDown (DOWN_ARROW)){
    zumbi1.y = zumbi1.y +3
}

 zumb1.bounceOff(parede1)

 fundo.visible = false;
 botao.visible = false;

 if (zumbi1.isTouching(zumbi2)){
    gamestate = "zumbi2s"
    
    zumbi1.x = 900
    zumbi1.y = 950
    }
    
    if (zumbi1.isTouching(zumbi3)){
        gamestate = "zumbi3s"
        
        zumbi1.x = 900
        zumbi1.y = 950
        }
}

function zumbi2st(){

    if (keyIsDown (UP_ARROW)){
        zumbi2.y = zumbi2.y -2
    }
    
    if (keyIsDown(LEFT_ARROW)){
        zumbi2.x = zumbi2.x -2
    }
    
    if (keyIsDown (RIGHT_ARROW)){
        zumbi2.x = zumbi2.x +2
    }
    
    if (keyIsDown (DOWN_ARROW)){
        zumbi2.y = zumbi2.y +2
    }

     fundo.visible = false;
     botao.visible = false;

     if (zumbi2.isTouching(zumbi1)){
        gamestate = "zumbi1s"
        
        zumbi2.x = 1350
        zumbi2.y = 450
        }
        
        if (zumbi2.isTouching(zumbi3)){
            gamestate = "zumbi3s"
            
            zumbi2.x = 1350
            zumbi2.y = 450
            }
}

function zumbi3st(){

    if (keyIsDown (UP_ARROW)){
        zumbi3.y = zumbi3.y -2
    }
    
    if (keyIsDown(LEFT_ARROW)){
        zumbi3.x = zumbi3.x -2
    }
    
    if (keyIsDown (RIGHT_ARROW)){
        zumbi3.x = zumbi3.x +2
    }
    
    if (keyIsDown (DOWN_ARROW)){
        zumbi3.y = zumbi3.y +2
    }

     fundo.visible = false;
     botao.visible = false;

     if (zumbi3.isTouching(zumbi2)){
        gamestate = "zumbi2s"
        
        zumbi3.x = 800
        zumbi3.y = 150
        }
        
        if (zumbi3.isTouching(zumbi1)){
            gamestate = "zumbi1s"
            
            zumbi3.x = 800
            zumbi3.y = 150
            }
}


