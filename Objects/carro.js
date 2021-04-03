//Corpo do carro
var geometriaCarro = new THREE.BoxGeometry(8, 7, 6);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(255,0,0)" });
var corpoCarro = new THREE.Mesh(geometriaCarro, materialCarro);

cena.add(corpoCarro);

corpoCarro.position.y = 5.5;
corpoCarro.position.x = 125


//Corpo traseiro do carro
var geometriaCarro = new THREE.BoxGeometry(8, 2, 7.8);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(152,138,138)" });
var corpoCarroTraseiro = new THREE.Mesh(geometriaCarro, materialCarro);

cena.add(corpoCarroTraseiro);

corpoCarroTraseiro.position.x = 125;
corpoCarroTraseiro.position.y = 3;
corpoCarroTraseiro.position.z = 6.9;


//Vidro frontal do carro
var geometriaCarro = new THREE.BoxGeometry(6, 2, 2.6);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(0,0,0)" });

var vidroCarroFrente = new THREE.Mesh(geometriaCarro, materialCarro);
cena.add(vidroCarroFrente);

vidroCarroFrente.position.x = 125;
vidroCarroFrente.position.y = 6.5;
vidroCarroFrente.position.z = -1.8;


//Vidro esquerda do carro
var geometriaCarro = new THREE.BoxGeometry(1, 2, 3);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(0,0,0)" });

var vidroCarroEsquerda = new THREE.Mesh(geometriaCarro, materialCarro);

cena.add(vidroCarroEsquerda);

//-3,6
vidroCarroEsquerda.position.x = 128.6;
vidroCarroEsquerda.position.y = 6.5;
vidroCarroEsquerda.position.z = -1;


//Vidro direita do carro
var geometriaCarro = new THREE.BoxGeometry(1, 2, 3);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(0,0,0)" });

var vidroCarroDireita = new THREE.Mesh(geometriaCarro, materialCarro);

cena.add(vidroCarroDireita);

vidroCarroDireita.position.x = 121.4;
vidroCarroDireita.position.y = 6.5;
vidroCarroDireita.position.z = -1;


//Roda frontal esquerda
var geometriaCarro = new THREE.CircleGeometry(1.7, 23);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(29,27,27)", side: THREE.DoubleSide });

var rodaFrontalEsquerda = new THREE.Mesh(geometriaCarro, materialCarro);

cena.add(rodaFrontalEsquerda);

rodaFrontalEsquerda.position.x = 120.9;
rodaFrontalEsquerda.position.y = 1.8;
rodaFrontalEsquerda.position.z = 1;
rodaFrontalEsquerda.rotation.y = 4.7;


//Roda Frontal direita
var geometriaCarro = new THREE.CircleGeometry(1.7, 23);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(29,27,27)", side: THREE.DoubleSide });

var rodaFrontalDireita = new THREE.Mesh(geometriaCarro, materialCarro);

cena.add(rodaFrontalDireita);

rodaFrontalDireita.position.x = 129.1;
rodaFrontalDireita.position.y = 1.8;
rodaFrontalDireita.position.z = 1;
rodaFrontalDireita.rotation.y = 4.7;


//Roda traseira esquerda
var geometriaCarro = new THREE.CircleGeometry(1.7, 23);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(29,27,27)", side: THREE.DoubleSide });

var rodaTraseiraEsquerda = new THREE.Mesh(geometriaCarro, materialCarro);

cena.add(rodaTraseiraEsquerda);

rodaTraseiraEsquerda.position.x = 120.9;
rodaTraseiraEsquerda.position.y = 1.8;
rodaTraseiraEsquerda.position.z = 7.8;
rodaTraseiraEsquerda.rotation.y = 4.7;


//Roda Traseira direita
var geometriaCarro = new THREE.CircleGeometry(1.7, 23);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(29,27,27)", side: THREE.DoubleSide });

var rodaTraseiraDireita = new THREE.Mesh(geometriaCarro, materialCarro);

cena.add(rodaTraseiraDireita);

rodaTraseiraDireita.position.x = 129.1;
rodaTraseiraDireita.position.y = 1.8;
rodaTraseiraDireita.position.z = 7.8;
rodaTraseiraDireita.rotation.y = 4.7;


//Detalhe frontal do carro
var geometriaCarro = new THREE.BoxGeometry(3.8, 2.8, 2.6);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(0,0,0)" });

var detalheFrontalPreto = new THREE.Mesh(geometriaCarro, materialCarro);
cena.add(detalheFrontalPreto);

detalheFrontalPreto.position.x = 125
detalheFrontalPreto.position.y = 3.7;
detalheFrontalPreto.position.z = -1.8;


//Placa do carro
var geometriaCarro = new THREE.BoxGeometry(1.8, 0.6, 2.6);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(255,255,255)" });

var placaCarro = new THREE.Mesh(geometriaCarro, materialCarro);
cena.add(placaCarro);

placaCarro.position.x = 125
placaCarro.position.y = 2.7;
placaCarro.position.z = -1.9;


//Luz frontal esquerda cima
var geometriaCarro = new THREE.CircleGeometry(0.4, 23);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(255,255,255)", side: THREE.DoubleSide });

var luzFrontalEsquerdaCima = new THREE.Mesh(geometriaCarro, materialCarro);

cena.add(luzFrontalEsquerdaCima);

luzFrontalEsquerdaCima.position.x = 128;
luzFrontalEsquerdaCima.position.y = 3.0;
luzFrontalEsquerdaCima.position.z = -3.1;


//Luz frontal esquerda baixo
var geometriaCarro = new THREE.CircleGeometry(0.4, 23);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(255,255,255)", side: THREE.DoubleSide });

var luzFrontalEsquerdaBaixo = new THREE.Mesh(geometriaCarro, materialCarro);

cena.add(luzFrontalEsquerdaBaixo);

luzFrontalEsquerdaBaixo.position.x = 128;
luzFrontalEsquerdaBaixo.position.y = 4.2;
luzFrontalEsquerdaBaixo.position.z = -3.1;


//Luz frontal direita cima
var geometriaCarro = new THREE.CircleGeometry(0.4, 23);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(255,255,255)", side: THREE.DoubleSide });

var luzFrontalDireitaCima = new THREE.Mesh(geometriaCarro, materialCarro);

cena.add(luzFrontalDireitaCima);

luzFrontalDireitaCima.position.x = 122;
luzFrontalDireitaCima.position.y = 3.0;
luzFrontalDireitaCima.position.z = -3.1;


//Luz frontal direita baixo
var geometriaCarro = new THREE.CircleGeometry(0.4, 23);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(255,255,255)", side: THREE.DoubleSide });

var luzFrontalDireitaBaixo = new THREE.Mesh(geometriaCarro, materialCarro);

cena.add(luzFrontalDireitaBaixo);

luzFrontalDireitaBaixo.position.x = 122;
luzFrontalDireitaBaixo.position.y = 4.2;
luzFrontalDireitaBaixo.position.z = -3.1;


//Ferro Frontal 1
var geometriaCarro = new THREE.BoxGeometry(3.8, 0.1, 2.6);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(153,146,146)" });

var ferroFrontal1 = new THREE.Mesh(geometriaCarro, materialCarro);
cena.add(ferroFrontal1);

ferroFrontal1.position.x = 125;
ferroFrontal1.position.y = 5;
ferroFrontal1.position.z = -1.9;

//Ferro Frontal 2
var geometriaCarro = new THREE.BoxGeometry(3.8, 0.1, 2.6);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(153,146,146)" });

var ferroFrontal2 = new THREE.Mesh(geometriaCarro, materialCarro);
cena.add(ferroFrontal2);

ferroFrontal2.position.x = 125;
ferroFrontal2.position.y = 4.6;
ferroFrontal2.position.z = -1.9;


//Ferro frontal 3
var geometriaCarro = new THREE.BoxGeometry(3.8, 0.1, 2.6);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(153,146,146)" });

var ferroFrontal3 = new THREE.Mesh(geometriaCarro, materialCarro);
cena.add(ferroFrontal3);

ferroFrontal3.position.x = 125;
ferroFrontal3.position.y = 4.2;
ferroFrontal3.position.z = -1.9;


//Ferro frontal 4
var geometriaCarro = new THREE.BoxGeometry(3.8, 0.1, 2.6);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(153,146,146)" });

var ferroFrontal4 = new THREE.Mesh(geometriaCarro, materialCarro);
cena.add(ferroFrontal4);

ferroFrontal4.position.x = 125;
ferroFrontal4.position.y = 3.8;
ferroFrontal4.position.z = -1.9;


//Ferro frontal 5
var geometriaCarro = new THREE.BoxGeometry(3.8, 0.1, 2.6);
var materialCarro = new THREE.MeshLambertMaterial({ color: "rgb(153,146,146)" });

var ferroFrontal5 = new THREE.Mesh(geometriaCarro, materialCarro);
cena.add(ferroFrontal5);

ferroFrontal5.position.x = 125;
ferroFrontal5.position.y = 3.4;
ferroFrontal5.position.z = -1.9;


//Maçaneta esquerda do carro
var geometriaCarro = new THREE.BoxGeometry(0.1, 0.6, 0.1);
var materialCarro = new THREE.MeshLambertMaterial({ color: "(153,146,146)" });

var macanetaEsquerda = new THREE.Mesh(geometriaCarro, materialCarro);

cena.add(macanetaEsquerda);

macanetaEsquerda.position.x = 129.1;
macanetaEsquerda.position.y = 4.5;
macanetaEsquerda.position.z = 0.6;


//Maçaneta direita do carro
var geometriaCarro = new THREE.BoxGeometry(0.1, 0.6, 0.1);
var materialCarro = new THREE.MeshLambertMaterial({ color: "(153,146,146)" });

var macanetaDireita = new THREE.Mesh(geometriaCarro, materialCarro);

cena.add(macanetaDireita);

macanetaDireita.position.x = 120.9;
macanetaDireita.position.y = 4.5;
macanetaDireita.position.z = 0.6;

var i = 0;
var intervalo = setInterval(() => {
    i++
    corpoCarro.position.x -= 20 * Math.sin(i / 630) / 100;
    corpoCarro.position.z -= 20 * Math.cos(i / 630) / 100;

    corpoCarroTraseiro.position.x -= 20 * Math.sin(i / 630) / 100;
    corpoCarroTraseiro.position.z -= 20 * Math.cos(i / 630) / 100;

    vidroCarroFrente.position.x -= 20 * Math.sin(i / 630) / 100;
    vidroCarroFrente.position.z -= 20 * Math.cos(i / 630) / 100;

    vidroCarroEsquerda.position.x -= 20 * Math.sin(i / 630) / 100;
    vidroCarroEsquerda.position.z -= 20 * Math.cos(i / 630) / 100;

    vidroCarroDireita.position.x -= 20 * Math.sin(i / 630) / 100;
    vidroCarroDireita.position.z -= 20 * Math.cos(i / 630) / 100;

    rodaFrontalEsquerda.position.x -= 20 * Math.sin(i / 630) / 100;
    rodaFrontalEsquerda.position.z -= 20 * Math.cos(i / 630) / 100;

    rodaFrontalDireita.position.x -= 20 * Math.sin(i / 630) / 100;
    rodaFrontalDireita.position.z -= 20 * Math.cos(i / 630) / 100;

    rodaTraseiraEsquerda.position.x -= 20 * Math.sin(i / 630) / 100;
    rodaTraseiraEsquerda.position.z -= 20 * Math.cos(i / 630) / 100;

    rodaTraseiraDireita.position.x -= 20 * Math.sin(i / 630) / 100;
    rodaTraseiraDireita.position.z -= 20 * Math.cos(i / 630) / 100;

    detalheFrontalPreto.position.x -= 20 * Math.sin(i / 630) / 100;
    detalheFrontalPreto.position.z -= 20 * Math.cos(i / 630) / 100;

    placaCarro.position.x -= 20 * Math.sin(i / 630) / 100;
    placaCarro.position.z -= 20 * Math.cos(i / 630) / 100;

    luzFrontalEsquerdaCima.position.x -= 20 * Math.sin(i / 630) / 100;
    luzFrontalEsquerdaCima.position.z -= 20 * Math.cos(i / 630) / 100;

    luzFrontalEsquerdaBaixo.position.x -= 20 * Math.sin(i / 630) / 100;
    luzFrontalEsquerdaBaixo.position.z -= 20 * Math.cos(i / 630) / 100;

    luzFrontalDireitaCima.position.x -= 20 * Math.sin(i / 630) / 100;
    luzFrontalDireitaCima.position.z -= 20 * Math.cos(i / 630) / 100;

    luzFrontalDireitaBaixo.position.x -= 20 * Math.sin(i / 630) / 100;
    luzFrontalDireitaBaixo.position.z -= 20 * Math.cos(i / 630) / 100;

    ferroFrontal1.position.x -= 20 * Math.sin(i / 630) / 100;
    ferroFrontal1.position.z -= 20 * Math.cos(i / 630) / 100;

    ferroFrontal2.position.x -= 20 * Math.sin(i / 630) / 100;
    ferroFrontal2.position.z -= 20 * Math.cos(i / 630) / 100;

    ferroFrontal3.position.x -= 20 * Math.sin(i / 630) / 100;
    ferroFrontal3.position.z -= 20 * Math.cos(i / 630) / 100;

    ferroFrontal4.position.x -= 20 * Math.sin(i / 630) / 100;
    ferroFrontal4.position.z -= 20 * Math.cos(i / 630) / 100;

    ferroFrontal5.position.x -= 20 * Math.sin(i / 630) / 100;
    ferroFrontal5.position.z -= 20 * Math.cos(i / 630) / 100;

    macanetaEsquerda.position.x -= 20 * Math.sin(i / 630) / 100;
    macanetaEsquerda.position.z -= 20 * Math.cos(i / 630) / 100;

    macanetaDireita.position.x -= 20 * Math.sin(i / 630) / 100;
    macanetaDireita.position.z -= 20 * Math.cos(i / 630) / 100;

}, 10);