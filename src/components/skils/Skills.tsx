import React from 'react';
import s from './Skils.module.css'
import sCont from '../commons/styles/Container.module.css'
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sCont.container} ${s.skillsContainer}`} >
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill />
                    <Skill />
                    <Skill />
                </div>
            </div>
        </div>
    );
};

