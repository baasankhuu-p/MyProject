import React from "react";
const SocialLinks = (props) =>{
    return (
        <a
            href={props.url}
            >
            <i className={props.iconName}></i>
        </a>
    )
}
export default SocialLinks;