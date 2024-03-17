import { PerspectiveCamera } from "@react-three/drei";

function CustomCamera() {

    return (
        <PerspectiveCamera
            makeDefault
            far={1000000}
            position={[0, 0, 0]}
        />
    );
}

export default CustomCamera;