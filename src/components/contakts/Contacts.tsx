import React from 'react';
import s from './Contacts.module.css'
import {Form} from "./form/Form";

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={s.mainBlock}>
                <h3>Contacts</h3>
                <Form />
                <button>отправить</button>
            </div>
        </div>
    );
};

