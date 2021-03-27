var geometriaCarro = new THREE.BoxGeometry(1,1,1);
var materialCarro = new THREE.MeshLambertMaterial({color: 0x59fd8b});

var carro = new THREE.Mesh(geometriaCarro, materialCarro);
carro.position.y = 1
carro.position.x = 125
carro.position.z = -5
var i=0;
var intervalo = setInterval(() => {
    i++
    carro.position.x -= 20 * Math.sin(i/625)/100;
    carro.position.z += 20 * Math.cos(i/630)/100;
}, 10);
cena.add(carro);