import * as THREE from 'three'



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,0.1,100)

camera.position.z=10;

//creating the mesh 
const geometry = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshBasicMaterial({color:"grey"})
const mesh = new THREE.Mesh(geometry,material)

mesh.position.x=-1

//creating another mesh 
const geo2 = new THREE.ConeGeometry(1, 2, 5);
const mat2 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cone = new THREE.Mesh(geo2, mat2); 


cone.position.x=2





// group the mesh 
const group = new THREE.Group();

group.add(cone,mesh)

scene.add(group)


const canvas = document.getElementById('canvas')

const render = new THREE.WebGLRenderer({canvas:canvas})
render.setSize(window.innerWidth,window.innerHeight);


function animate(){

  window.requestAnimationFrame(animate)
  mesh.rotation.y += Math.random()/10
  cone.rotation.z+=0.03

  render.render(scene,camera)
}

animate()

