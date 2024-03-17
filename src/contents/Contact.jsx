import "./Contact.css";
import React from "react";

import phoneIcon from "../../public/imgs/svgs/icon_phone.svg";
import emailIcon from "../../public/imgs/svgs/icon_email.svg";

const Contact = React.forwardRef((props, ref) => {
    return (
        <div className="ContactContainer" ref={ref}>

            <h1>CONTACT ME</h1>

            <table className="ContactTable">
                <tbody>
                    <tr>
                        <th>
                            <img src={phoneIcon} alt="Phone Icon" />
                            Phone
                        </th>
                        <th>
                            <img src={emailIcon} alt="Email Icon" />
                            E-mail
                        </th>
                    </tr>
                    <tr>
                        <td><p><strong>(+82)-10-7633-3433</strong></p></td>
                        <td><p><strong>rhsidrnlrhsid@naver.com</strong></p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
})

export default Contact;