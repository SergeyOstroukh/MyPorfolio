import React from 'react';
import s from './Contacts.module.css'
import {Form} from "./form/Form";
import sCont from '../commons/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${sCont.container} ${s.mainForm}`}>
                <h3>Contacts</h3>
                <Form/>
                <button>отправить</button>
            </div>
        </div>
    );
};

