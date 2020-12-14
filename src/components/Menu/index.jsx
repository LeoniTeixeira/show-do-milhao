import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/Global';
import './Menu.css';

function Menu() {
    const { setStopGame, timesToJump, setJumpQuestion, hideMenu, setHideMenu } = useContext(GlobalContext);
    return (
        <>
            <div className='btn-menu' role='button' 
             onClick={()=>setHideMenu('menu-area')}>
                Menu
            </div>
            <div className={hideMenu}>
                <div>
                    <button className='btn-exit' 
                     onClick={()=> setHideMenu('hide-menu menu-area')}>
                        X
                    </button>
                </div>
                <div className='btn-stop' role='button' onClick={()=> setStopGame(true)} >
                    parar
                </div>
                <div className='help-container'>
                    <div className='btn-help'>
                        <div className='card'/>
                        cartas
                        </div>
                        <div className='btn-help'>
                            <div className='card'/>
                            placas
                        </div>
                        <div className='btn-help'>
                            <div className='card'/>
                            universitários
                        </div>
                    </div>
                <div className={timesToJump?'btn-jump':'btn-jump-off'}
                    onClick={() => setJumpQuestion(true)}>
                    pular ({timesToJump})
                </div>
            </div>
        </>
    )
}
export default Menu;