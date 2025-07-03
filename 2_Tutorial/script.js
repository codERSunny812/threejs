const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const canvas = document.getElementById('canvas1');
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 20;

const geometries = [
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.SphereGeometry(1, 16, 16),
    new THREE.PlaneGeometry(1.5, 1.5),
    new THREE.TorusGeometry(1, 0.4, 16, 100),
    new THREE.CylinderGeometry(0.5, 0.5, 2, 32),
    new THREE.ConeGeometry(0.5, 1.5, 32),
    new THREE.CircleGeometry(1, 32),
    new THREE.RingGeometry(0.5, 1, 32),
    new THREE.TetrahedronGeometry(1),
    new THREE.DodecahedronGeometry(1),
];

const colors = [
    "slategrey", "red", "blue", "orange", "purple",
    "green", "gold", "pink", "cyan", "brown"
];

const meshes = [];

geometries.forEach((geometry, index) => {
    const material = new THREE.MeshBasicMaterial({
        color: colors[index],
        wireframe: true
    });

    const mesh = new THREE.Mesh(geometry, material);

    // Position the mesh in a grid
    const row = Math.floor(index / 5);
    const col = index % 5;
    mesh.position.x = (col - 2) * 3;  // spread columns
    mesh.position.y = (1 - row) * 3; // spread rows

    meshes.push(mesh);
    scene.add(mesh);
});

function animate() {
    requestAnimationFrame(animate);

    meshes.forEach((mesh, i) => {
        mesh.rotation.x += 0.01 + i * 0.001;
        mesh.rotation.y += 0.01 + i * 0.001;
    });

    renderer.render(scene, camera);
}

animate();
