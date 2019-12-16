import * as yup from 'yup';
import { withFormik } from 'formik';
import AddToDoForm from '../../components/addToDo/addToDoForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../actions/todos';

const addToDoEnhancer = withFormik({
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
    handleSubmit: (payload, { props, setSubmitting }) => {
        const { addToDo } = props;
        addToDo(payload);
        setSubmitting(false);
    },
    displayName: 'AddTodoForm',
})(AddToDoForm);

const AddToDoContainer = connect(
    null,
    dispatch => bindActionCreators(actions, dispatch)
)(addToDoEnhancer)

export default AddToDoContainer;