import React, { useEffect, useRef } from "react";
import "./Title.css";

const Title = React.forwardRef((props, ref) => {

    const titleRef = useRef(null);

    useEffect(() => {
        if (titleRef) {
            ref.current = titleRef.current;
            titleRef.current.style.opacity = 1;
        }
    }, [titleRef])

    return (
        <div className="TitleContainer" ref={titleRef}>
            <p>Hello. My name is <strong>YongCheol</strong>. I'm a</p>
            <h1>Software Engineer</h1>
        </div>
    );
})

export default Title;
