import "./TechStack.css";
import imgTechStack from "../../public/imgs/react.png";
import React from "react";

const TechStack = React.forwardRef((props, ref) => {
    return (
        <div className="TechStackContainer" ref={ref}>
            <img src={imgTechStack} alt="imgTechStack"></img>
        </div>
    );
})

export default TechStack;