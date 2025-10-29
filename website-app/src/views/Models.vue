<template>
    <div style="width: 100%; height: 100%;" ref="canvasContainer"></div>
</template>

<script setup>
    import * as THREE from "three";
    import { OrbitControls } from "three/addons/controls/OrbitControls.js";
    import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
    import { ref, onMounted } from 'vue';

    const canvasContainer = ref();

    function main ( canvasContainer ) {
        const canvas = document.createElement( 'canvas' );
        canvasContainer.appendChild( canvas );

        const renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );

        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        const fov = 35;
        const aspect = 2;
        const near = 0.1;
        const far = 100;
        const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
        camera.position.set( 10, 20, 10 );

        const controls = new OrbitControls( camera, canvas );
        controls.target.set( 0, 0, 0 );
        controls.update();

        const scene = new THREE.Scene();
        scene.background = new THREE.Color( "white" );

        addLight( 0xcc0000, 2.5, 10, 4, 2 );
        addLight( 0x7ab920, 2.5, -12, 2, -5 );
        addLight( 0xf6b26b, 2.5, 0, 5, 15 );

        function addLight ( color, intensity, x, y, z ) {
            const light = new THREE.DirectionalLight( color, intensity );
            light.position.set( x, y, z );
            light.castShadow = true;

            light.shadow.mapSize.width = 512;
            light.shadow.mapSize.height = 512;
            light.shadow.camera.near = 0.5;
            light.shadow.camera.far = 500;

            scene.add( light );
            scene.add( light.target );
        }

        const planeGeometry = new THREE.PlaneGeometry( 20, 20, 32, 32 );
        const planeMaterial = new THREE.MeshStandardMaterial( {
            color: "black",
        } );

        const plane = new THREE.Mesh( planeGeometry, planeMaterial );
        plane.rotation.x = Math.PI / 2;
        plane.position.set( 0, 0.8, 0 );
        plane.receiveShadow = true;
        scene.add( plane );

        function frameArea ( sizeToFitOnScreen, boxSize, boxCenter, camera ) {
            const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
            const halfFovY = THREE.MathUtils.degToRad( camera.fov * 0.5 );
            const distance = halfSizeToFitOnScreen / Math.tan( halfFovY );
            // compute a unit vector that points in the direction the camera is now
            // in the xz plane from the center of the box
            const direction = new THREE.Vector3()
                .subVectors( camera.position, boxCenter )
                .multiply( new THREE.Vector3( 1, 0, 1 ) )
                .normalize();

            // move the camera to a position distance units way from the center
            // in whatever direction the camera was from the center already
            camera.position.copy( direction.multiplyScalar( distance ).add( boxCenter ) );

            // pick some near and far values for the frustum that
            // will contain the box.
            camera.near = boxSize / 100;
            camera.far = boxSize * 100;

            camera.updateProjectionMatrix();

            // point the camera to look at the center of the box
            camera.lookAt( boxCenter.x, boxCenter.y, boxCenter.z );
        }


        const gltfLoader = new GLTFLoader();
        gltfLoader.load( '/threeAssets/cactus_v2.gltf', ( gltf ) => {
            const root = gltf.scene;
            scene.add( root );
            root.traverse( ( obj ) => {
                if ( obj.castShadow !== undefined ) {
                    obj.castShadow = true;
                    obj.receiveShadow = true;
                }
            } );

            // compute the box that contains all the stuff
            // from root and below
            const box = new THREE.Box3().setFromObject( root );

            const boxSize = box.getSize( new THREE.Vector3() ).length();
            const boxCenter = box.getCenter( new THREE.Vector3() );

            // set the camera to frame the box
            frameArea( boxSize * 0.8, boxSize, boxCenter, camera );

            // update the Trackball controls to handle the new size
            controls.maxDistance = boxSize * 10;
            controls.target.copy( boxCenter );
            controls.update();
        }, undefined, ( error ) => {
            console.log( "Error loading GLTF model:", error );
        } );


        function resizeRendererToDisplaySize ( renderer ) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if ( needResize ) {
                renderer.setSize( width, height, false );
            }

            return needResize;
        }

        function render () {
            if ( resizeRendererToDisplaySize( renderer ) ) {
                const canvas = renderer.domElement;
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();
            }

            renderer.render( scene, camera );

            requestAnimationFrame( render );
        }

        requestAnimationFrame( render );
    }


    onMounted( () => {
        main( canvasContainer.value );
    } );
</script>
