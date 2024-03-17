import "./AboutMe.css";
import React from "react";

import imgMe from "../../public/imgs/me.jpg";
import iconReact from "../../public/imgs/svgs/React-icon.svg";
import iconSpringBoot from "../../public/imgs/svgs/Spring_Framework_Logo_2018.svg";
import iconMySQL from "../../public/imgs/svgs/MySQL_Logo_2018.svg";
import iconDocker from "../../public/imgs/svgs/Docker_logo.svg";
import iconGit from "../../public/imgs/svgs/Git-logo.svg";

const AboutMe = React.forwardRef((props, ref) => {
    return (
        <div className="AboutMeContainer" ref={ref}>
            <h1>About Me</h1>
            <div className="AboutMeContent">
                <img src={imgMe} className="MyPicture" />

                <div>
                    <p>I'm a <strong>Software Egineer</strong></p>
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>정용철</td>
                            </tr>
                            <tr>
                                <th>Birth</th>
                                <td>1998.06.11</td>
                            </tr>
                            <tr>
                                <th>Education</th>
                                <td>Master of Science in Computer Engineering</td>
                            </tr>
                            <tr>
                                <th>Tech Stack</th>
                                <td>
                                    <ul>
                                        <li ><img className="react" src={iconReact} /></li>
                                        <li className="springBoot"><img src={iconSpringBoot} /></li>
                                        <li ><img src={iconMySQL} /></li>
                                        <li ><img src={iconDocker} /></li>
                                        <li ><img src={iconGit} /></li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
})

export default AboutMe;