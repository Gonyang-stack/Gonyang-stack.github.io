import "./Canvas.css";
import { Canvas } from "@react-three/fiber";
import CustomCamera from "../cameras/CustomCamera";
import CameraAnimation from "../animations/CameraAnimation";
import { OrbitControls } from "@react-three/drei";
import GenStars from "../stars/GenStars"
import Galaxy from "../stars/Galaxy";

function GenCanvas() {
    return (
        <div className="CanvasContainer">
            <Canvas>
                <CustomCamera />
                <CameraAnimation />
                <OrbitControls enableZoom={false} />
                <color attach={"background"} args={["#000"]} />
                <ambientLight color={"#fff"} intensity={5} />
                <GenStars />
                <Galaxy />
            </Canvas>
        </div>
    );

}

export default GenCanvas;