import React, { useState } from 'react';

function Menu() {
    const [style, setStyle] = useState("menu-area display-none")
    return (
        <>
            <div className="btn-menu" role="button" onClick={()=>setStyle("menu-area")}>Menu</div>
            <div className={style}>
                <div>
                <button className="btn-exit" onClick={()=> setStyle("menu-area display-none")}>X</button>
                </div>
            </div>
        </>
    )
}
export default Menu;