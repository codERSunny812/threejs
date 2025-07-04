

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





camera.position.z =  5;
//transformation
cube.position.x = 0.5;
cube.rotation.y = 0.5;
cube.rotation.z=0.6

// scaling 

cube.scale.x=1;
cube.scale.y=1.2
cube.scale.z=1.8




function animate() {

    // rotation
    cube.rotation.x += 0.001;
    cube.rotation.y +=0.08;
    cube.rotation.z+=0.1


    
    renderer.render(scene, camera);
    

}
renderer.setAnimationLoop(animate);