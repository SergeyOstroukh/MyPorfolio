import React from 'react';
import s from './Skill.module.css'

export const Skill = () => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3 className={s.title}>title</h3>
            <span className={s.description}>text iz propsov</span>
        </div>
    );
};

