import React from 'react';
import sCont from '../commons/styles/Container.module.css'
import s from './Myprojects.module.css'
import {Project} from "./project/Project";
import image from '../img/maxresdefault-2-1.jpg'
import image1 from '../img/selfie-cat.jpg'

export const MyProjects = () => {
    return (
        <div className={s.myProjects}>
            <div className={`${sCont.container} ${s.projectsBlock}`}>
                <h3 className={s.title}>my projects</h3>
                <div className={s.projectSection}>
                    <Project imga={image} />
                    <Project imga={image1}/>
                </div>
            </div>
        </div>
    );
};

