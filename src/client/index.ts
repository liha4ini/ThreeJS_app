import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry();
const material = new THREE.MeshNormalMaterial();
const tor = new THREE.Mesh(geometry, material);

scene.add(tor);

const animate = () => {
    requestAnimationFrame(animate);

    tor.rotation.x += 0.01;
    tor.rotation.y += 0.01;
    render();
};

const render = () => {
    renderer.render(scene, camera);
};

camera.position.z = 5;
animate();
