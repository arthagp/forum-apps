import React from 'react'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";

const FooterThread = () => {
    return (
        <footer className='thread-item__footer'>
            <button><AiOutlineLike /> <span>0</span></button>
            <button><AiOutlineDislike /> <span>0</span></button>
            <p><FaRegComments /> <span>0</span> Comments</p>
            <p>50 hari lalu</p>
            <p>Dibut oleh <strong>Artha Gusfi Putra</strong></p>
        </footer>
    )
}

export default FooterThread