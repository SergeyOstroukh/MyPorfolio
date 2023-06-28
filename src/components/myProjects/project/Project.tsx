import React from 'react';
import s from './Project.module.css'

export const Project = () => {
    return (
        <div className={s.project}>
            <img className={s.img} src={'#'} alt={'картинка проекьа'}/>
            <h3>name project</h3>
            <span>описание </span>
        </div>
    );
};

