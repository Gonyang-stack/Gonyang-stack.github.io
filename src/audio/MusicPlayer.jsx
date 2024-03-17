import { useEffect, useRef } from "react";

function MusicPlayer() {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.play();
    }, []);

    return (
        <audio ref={audioRef} src="../../public/music/Music4_5.mp3" autoPlay />
    );
}

export default MusicPlayer;