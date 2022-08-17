// 3D SETUP

var scene = new THREE.Scene();
scene.background = new THREE.Color(0x191919);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setX(0);
camera.position.setY(-2);
camera.position.setZ(0);

renderer.render(scene, camera);

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

// ADD CUBE

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshStandardMaterial({ color: 0x14ffec });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// ADD RANDOM STARS

function addStar() {
    const geometry = new THREE.BoxGeometry(0.25, 0.25, 0.25);
    const material = new THREE.MeshStandardMaterial({ color: 0xeeeeee });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
}

Array(200).fill().forEach(addStar);

// LIGHTING

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(0, 0, 2);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(pointLight, ambientLight);

// VIEW LIGHT POSITION

// const lightHelper = new THREE.PointLightHelper(pointLight);
// scene.add(lightHelper);

// CAMERA

camera.position.z = 5;

// SCROLL ANIMATION

function spinCube() {
    const t = document.body.getBoundingClientRect().top;
    cube.rotation.x += -0.1;
    cube.rotation.z += 0;
    camera.rotation.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
    camera.rotation.z = t * -0.0002;
}

document.body.onscroll = spinCube;

// CUBE AUTO-ROTATE

var animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();

// NAV MENU

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // NAV TOGGLE
        nav.classList.toggle('nav-active');

        // ANIMATE LINKS
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.25s ease forwards ${index / 7 + 0.1}s`;
            }
        });
    });
};

navSlide();
