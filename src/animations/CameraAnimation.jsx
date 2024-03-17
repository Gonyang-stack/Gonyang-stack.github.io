import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

function CameraAnimation() {
    const { camera } = useThree();

    const targetPosition = new Vector3(60000, 60000, 60000);
    const cameraRef = useRef(camera);
    useEffect(() => {
        cameraRef.current = camera;
    }, [camera]);

    let alpha = 0.030;

    useFrame(() => {
        if(cameraRef.current.position.x >= 50000){
            alpha = 0.009;
        }
        cameraRef.current.position.lerp(targetPosition, alpha);
    });

    return null;
}

export default CameraAnimation;