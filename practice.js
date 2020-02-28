// Three.js - Fundamentals
// from https://threejsfundamentals.org/threejs/threejs-fundamentals.html

import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r113/build/three.module.js';

function main() {
    console.log('Loaded');
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setSize( window.innerWidth, window.innerHeight);


    // We know we need a new scene, what do we pass the scene?
    const scene = new THREE.Scene(0x000000, 100)


    function addLight() {
        const light = new THREE.DirectionalLight({});
    }

    function makeInstance(geometry, color, x) {

    }

    function render(time) { 
   
        cubes.forEach((cube, ndx) => {

        })

   
    }

    requestAnimationFrame(render);
}
main();



// What is the common syntax for creating new Three.js objects?
// new THREE.objectName({})

// Creating a new light requres two arguments, 
