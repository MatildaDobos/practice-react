import * as yup from 'yup';
import { withFormik } from 'formik';
import ToDoForm from '../../components/toDoForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../actions/todos';

const editToDoEnhancer = withFormik({
    mapPropsToValues(props) {
        return {
            id: props['id'],
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
        const { editToDo } = props;
        editToDo(payload);
        setSubmitting(false);
    },
    displayName: 'EditTodoForm',
})(ToDoForm);

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps
    const todo = state.todos.find(x => x.id == id);
    return todo;
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(editToDoEnhancer);