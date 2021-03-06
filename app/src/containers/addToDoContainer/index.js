import * as yup from 'yup';
import { withFormik } from 'formik';
import ToDoForm from '../../components/toDoForm';
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
    handleSubmit: (payload, { props, setSubmitting, resetForm }) => {
        const { addToDo } = props;
        addToDo(payload);
        setSubmitting(false);
        resetForm();
    },
    displayName: 'AddTodoForm',
})(ToDoForm);

const AddToDoContainer = connect(
    null,
    dispatch => bindActionCreators(actions, dispatch)
)(addToDoEnhancer)

export default AddToDoContainer;