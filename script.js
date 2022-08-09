// setup

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(0);
camera.position.setX(0);

renderer.render(scene, camera);

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// cube

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 0, 1);

const ambientLight = new THREE.AmbientLight(0x444444);
scene.add(pointLight, ambientLight);

// helpers

// const lightHelper = new THREE.PointLightHelper(pointLight);
// scene.add(lightHelper);

// camera

camera.position.z = 5;

// cube rotation

function spinCube() {
    const t = document.body.getBoundingClientRect().top;
    cube.rotation.x += 0.1;
    cube.rotation.z += 0.1;
}

document.body.onscroll = spinCube;

// animation loop

var animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();
