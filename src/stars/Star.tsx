import React, { useRef } from 'react'
import { getRandomInt } from '../utils/RandomUtils';
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';

interface PropsType {
	position: THREE.Vector3;
	size: number;
}

function Star({position, size}: PropsType) {
    
    const COLOR = ['#88beff', 'white', '#f9d397', '#fd6b6b', '#ffffac'];
    const colorIndex = getRandomInt(0, COLOR.length);

    const meshRef = useRef<THREE.Mesh>(null!);
    const Y_AXIS = new THREE.Vector3(0, 1, 0);
    const DIST_LIMIT = 10000;

    useFrame((state, delta) => {
        meshRef.current.position.applyAxisAngle(Y_AXIS, delta/100);
        const dist = state.camera.position.distanceTo(meshRef.current.position);
        if (dist > DIST_LIMIT) {
            const scale = dist / DIST_LIMIT;
            meshRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <>
            <mesh
                ref={meshRef} 
                position={position}
            >
                <sphereGeometry args={[size, 32, 16]} />
                <meshStandardMaterial color={COLOR[colorIndex]} />
            </mesh>
        </>
    )

}

export default Star;