import React from 'react';
import s from './Footer.module.css'
import sCont from "../commons/styles/Container.module.css";
import {FooterImage} from "./foterImage/FooterImage";


export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${sCont.container} ${s.footerContainer}`}>
                <h3>Sergey Ostroukh</h3>
                <div className={s.images}>
                    <FooterImage />
                    <FooterImage />
                    <FooterImage />
                    <FooterImage />
                </div>
                <span>Все права защищены</span>
            </div>
        </div>
    );
};

