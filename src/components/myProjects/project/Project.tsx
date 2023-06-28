import React from 'react';
import s from './Project.module.css'

type ProjectType={
    imga:any
}

export const Project = (props:ProjectType) => {
    return (
        <div className={s.project}>
            <img className={s.img} src={props.imga} alt={'картинка проекта'}/>
            <h3>название проекта</h3>
            <span className={s.description}>краткое описание</span>
        </div>
    );
};

