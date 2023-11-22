import React from "react";

function Main({ color = "#989898" }){
    
    return(
<svg width="24" height="24" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
<g id="Icon">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M6.13528 7.08632C6.06488 7.16929 6 7.31238 6 7.5V16.5C6 16.6876 6.06488 16.8307 6.13528 16.9137C6.20387 16.9945 6.25601 17 6.27273 17H17.7273C17.744 17 17.7961 16.9945 17.8647 16.9137C17.9351 16.8307 18 16.6876 18 16.5V7.5C18 7.31238 17.9351 7.16929 17.8647 7.08632C17.7961 7.00548 17.744 7 17.7273 7H16.0625V9C16.0625 9.55228 15.6148 10 15.0625 10C14.5102 10 14.0625 9.55228 14.0625 9V7H9.5V9C9.5 9.55228 9.05228 10 8.5 10C7.94772 10 7.5 9.55228 7.5 9V7H6.27273C6.25601 7 6.20387 7.00548 6.13528 7.08632ZM4 7.5C4 6.27963 4.8698 5 6.27273 5H8.5H15.0625H17.7273C19.1302 5 20 6.27963 20 7.5V16.5C20 17.7204 19.1302 19 17.7273 19H6.27273C4.8698 19 4 17.7204 4 16.5V7.5Z" fill={color}/>
</g>
</svg>
    );
}

export default Main;