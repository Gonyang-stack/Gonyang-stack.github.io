import { getRandomInt } from "../utils/RandomUtils";
import Star from "./Star";
import * as THREE from 'three'

function GenStars() {
  
  const stars = [];

  for (let star = 0; star < 500; star++) {
    const size = getRandomInt(5, 10);
    const pos = new THREE.Vector3(
      getRandomInt(-50000, 50000),
      getRandomInt(-50000, 50000),
      getRandomInt(-50000, 50000)
    );
    stars.push(<Star key={star} position={pos} size={size} />)
  }
  return stars;
}

export default GenStars