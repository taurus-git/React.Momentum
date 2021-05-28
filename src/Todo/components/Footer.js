import React from "react";
import FilterLink from "../containers/FilterLink";
import C from "../constants";

const Footer = () => (
    <div>
        <span>Show: </span>
        <FilterLink filter={C.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter={C.SHOW_ACTIVE}>
            Active
        </FilterLink>
        <FilterLink filter={C.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </div>
)

export default Footer;