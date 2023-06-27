import React from 'react';
import s from './Main.module.css'
import imgpreview from '../img/imgpreview.jpg'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I'am Sergey Ostroukh</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}>
                    <img src={imgpreview} alt="img"/>
                </div>
            </div>

        </div>
    );
};

