import React, { Component } from 'react';

const DisButton = ({
    title,
    handleClick
}) => (
    <button onClick={handleClick}>{title}</button>
);


export default DisButton;