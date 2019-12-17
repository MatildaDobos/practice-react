import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';

import './toDoForm.css';

const ToDoForm = (formik) => {
    return (
        <div className='todo-form'>
            <Form className='form'>

                <Field className={`form__input ${formik.touched.title && formik.errors.title ? "form__input--invalid" : ""}`} 
                        type='text' name='title' placeholder='Title'/>
                <ErrorMessage className='form__error ' name='title' component='div'/>
                
                <Field className={`form__input ${formik.touched.description && formik.errors.description ? "form__input--invalid" : ""}`} 
                        type='text' name='description' placeholder='Description'/>
                <ErrorMessage className='form__error' name='description' component='div'/>

                <button className='form__submit' type='submit' disabled={ formik.isSubmitting }>{formik.isSubmitting ? "Please wait..." : "SAVE"}</button>

            </Form>
        </div>
        
    );
};

export default ToDoForm;

