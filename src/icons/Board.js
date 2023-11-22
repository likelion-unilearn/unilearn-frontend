import React from "react";

function Board({ color = "#989898" }){

    return(
    <svg width="24" height="24" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <g id="Icon">
    <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M5 8.375C5 8.22014 5.14977 8 5.45455 8H18.5455C18.8502 8 19 8.22014 19 8.375V10H5V8.375ZM3 11V8.375C3 7.01108 4.15267 6 5.45455 6H18.5455C19.8473 6 21 7.01108 21 8.375V11V16.625C21 17.9889 19.8473 19 18.5455 19H5.45455C4.15267 19 3 17.9889 3 16.625V11ZM19 12V16.625C19 16.7799 18.8502 17 18.5455 17H5.45455C5.14977 17 5 16.7799 5 16.625V12H19Z" fill={color}/>
    </g>
    </svg>
    );
}

export default Board;