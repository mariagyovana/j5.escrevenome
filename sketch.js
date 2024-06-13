
1
  //variáveis da bolinha
2
let xBolinha = 300;
3
let yBolinha = 200;
4
let diametro = 15;
5
let raio = diametro / 2;
6
​
7
//velocidade da bolinha
8
let velocidadeXBolinha = 6;
9
let velocidadeYBolinha = 6;
10
function setup() {
11
  createCanvas(600, 400);
12
}
13
 function draw(){
14
background(0);
15
    mostraBolinha();
16
    movimentaBolinha();
17
    verificaColisaoBorda();
18
}
19
​
20
function mostraBolinha() { 
21
  circle(xBolinha, yBolinha, diametro)
22
}
23
​
24
function movimentaBolinha() {
25
    xBolinha += velocidadeXBolinha;
26
    yBolinha += velocidadeYBolinha;
27
}
28
​
29
function verificaColisaoBorda() {
30
    if (xBolinha + raio > width || xBolinha - raio < 0) {
31
        velocidadeXBolinha *= -1;
32
    }
33
    if (yBolinha + raio > height || yBolinha - raio < 0) {
34
        velocidadeYBolinha *= -1;
35
    }
36
}
37
function verificaColisaoRaquete() {
38
    if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
39
        velocidadeXBolinha *= -1;
40
        raquetada.play();
41
    }
42
}
43
​
44
function verificaColisaoRaquete(x, y) {
45
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
}