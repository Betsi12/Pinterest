import React from 'react';

import './modal.css';

const Modal = (props) => {
    return (
        <div className="container-modal" onClick={(e)=>{
            if(e.target.getAttribute("class") === "flex"){
                props.pushClick()
            }
            }}>
            <a href="/inicio" className="btn-inicio"><i className='fas fa-chevron-left' style={{ fontSize: '20px'}}></i>Inicio</a>
            <div className="flex">
                <div className="modal">
                    <div className="modal-header">
                        <a href="/guardar" className="btn-guardar"><i className='fas fa-thumbtack' style={{ fontSize: '15px'}}></i>Guardar</a>
                        <a href="/enviar" className="btn-enviar"><i className='fas fa-upload' style={{ fontSize: '15px'}}></i>Enviar</a>
                    </div>
                    <div className="modal-body">
                        <img className="img-modal" src={props.imgUrl} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;