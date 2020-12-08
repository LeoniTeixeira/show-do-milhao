import React, { useState } from 'react';
import './Menu.css'

function Menu() {
    const [style, setStyle] = useState("menu-area display-none")
    return (
        <>
            <div className="btn-menu" role="button" 
             onClick={()=>setStyle("menu-area")}>
                Menu
            </div>
            <div className={style}>
                <div>
                    <button className="btn-exit" 
                     onClick={()=> setStyle("menu-area display-none")}>
                        X
                    </button>
                </div>
                <div className="btn-stop">
                    parar
                </div>
                <div className="help-container">
                    <div className="btn-help">
                        <div className="card"/>
                        cartas
                        </div>
                        <div className="btn-help">
                            <div className="card"/>
                            placas
                        </div>
                        <div className="btn-help">
                            <div className="card"/>
                            universitários
                        </div>
                    </div>
                <div className="btn-jump">
                    pular
                </div>
            </div>
        </>
    )
}
export default Menu;