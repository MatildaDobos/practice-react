import React from 'react';
import * as yup from 'yup';
import { withFormik } from 'formik';
import AddToDoForm from '../addToDoForm';

const AddToDoFormik = withFormik({
    mapPropsToValues(props) {
        return {
            title: props['title'] || '',
            description: props['description'] || ''
        };
    },
    validationSchema: yup.object().shape({
        title: yup.string()
                    .required('Title is required.'),
        description: yup.string()
                    .required('Description is required.')
    }),
    handleSubmit(values, {setSubmitting}) {
        console.log('SUBMIT!');
        setTimeout(() => {
          setSubmitting(false)
        },1000)
    }
})(AddToDoForm);

export default AddToDoFormik;