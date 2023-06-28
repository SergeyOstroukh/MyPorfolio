import React from 'react';
import sCont from '../commons/styles/Container.module.css'
import s from './Myprojects.module.css'
import {Project} from "./project/Project";

export const MyProjects = () => {
    return (
        <div className={s.myProjects}>
            <div className={`${sCont.container} ${s.projectsBlock}`}>
                <h3 className={s.title}>my projects</h3>
                <div className={s.projectSection}>
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
    );
};

