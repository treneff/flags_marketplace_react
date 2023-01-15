import React from 'react'
import './Modal.css'

const Modal = ({showModal}) => {
  return (
    <div onClick = {showModal} className="modal"></div>
  )
}

export default Modal