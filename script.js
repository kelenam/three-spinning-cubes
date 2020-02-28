// Three.js - Fundamentals
// from https://threejsfundamentals.org/threejs/threejs-fundamentals.html

import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r113/build/three.module.js';

function main() {
    
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setSize( window.innerWidth, window.innerHeight );

    const fov = 75;
    const aspect = 2; 
    const near = 2;
    const far = 50;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 4;

    const scene = new THREE.Scene();

    const boxHeight = 1;
    const boxWidth = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    const cubes = [
        makeInstance(geometry, 0x44aa99, 0),
        makeInstance(geometry, 0xeed223, -2),
        makeInstance(geometry, 0x4914da, 2),
    ];

    //const material = new THREE.MeshBasicMaterial({color: 0x44aa88});  // greenish blue
    //const material = new THREE.MeshPhongMaterial({color: 0x44aa99});

    // const cube = new THREE.Mesh(geometry, material);
    //scene.add(cube);

    function addLight() {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        
        light.position.set(24,33, 140);

        scene.add(light);

        return light;
    }
    addLight();

    function makeInstance(geometry, color, x) {
        const material = new THREE.MeshPhongMaterial({color});

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        cube.position.x = x;

        return cube;
    }

    function render(time) { 
        time *=0.001; // convert time to seconds

        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        
        cubes.forEach((cube, ndx) => {
            const speed = 1 + ndx * 1;
            const rot = time * speed;
            cube.rotation.x = rot;
            cube.rotation.y = rot;
        })
 
        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

main();
 