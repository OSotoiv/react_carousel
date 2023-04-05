import React from "react";

const Arrow = ({ direction, click }) => {
    return <i className={`fas fa-chevron-circle-${direction} fa-2x`} onClick={click} data-testid={`${direction}-arrow`} />
}

export default Arrow;