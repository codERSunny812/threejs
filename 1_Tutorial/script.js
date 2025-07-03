

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
const canvas = document.getElementById('canvas1')
const renderer = new THREE.WebGLRenderer({canvas:canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);


//geometry 1
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color:"slategrey",wireframe:true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


//geometry 2
const geometry2 = new THREE.SphereGeometry(1,5,5)
const material2 = new THREE.MeshBasicMaterial({ color: "red", wireframe: true });
const shape2 = new THREE.Mesh(geometry2, material2);
scene.add(shape2);

// geometry 3 
//geometry 2
const geometry3 = new THREE.PlaneGeometry(1, 1, 1)
const material3 = new THREE.MeshBasicMaterial({ color: "blue", wireframe: true });
const shape3 = new THREE.Mesh(geometry3, material3);
scene.add(shape3);


camera.position.z =  11;
cube.position.y=2
shape2.position.y=-2
shape3.position.y = -4



function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y +=0.08;
    shape2.rotation.x-=0.01;
    shape2.rotation.y -= 0.08;

    
    renderer.render(scene, camera);
    

}
renderer.setAnimationLoop(animate);