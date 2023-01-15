import React from "react";
const Nav = (props) => {
    return (
        <li className={props.listclass}>
            {props.expanded
            ?
                (<a
                    className={props.linkclass}
                    href={props.url}
                    data-scroll-nav={props.nav}
                    id="homeDropdownMenu"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >{props.name}</a
                >)
                :
                (<a
                    className={props.linkclass}
                    href={props.url}
                    data-scroll-nav={props.nav}
                    >{props.name}</a
                >)
            }
        </li>
    )
}
export default Nav;