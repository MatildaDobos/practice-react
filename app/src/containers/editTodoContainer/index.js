import React from 'react';
import * as yup from 'yup';
import { withFormik } from 'formik';
import ToDoForm from '../../components/toDoForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../actions/todos';

const EditToDoEnhancer = withFormik({
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

class EditTodoContainer extends React.Component {
    componentDidMount() {
        this.props.getTodoItem(this.props.id);
    }

    render() {
        if(this.props.todo) {
            return (
                <div>
                    <EditToDoEnhancer id={ this.props.id } title={ this.props.todo.title } description={ this.props.todo.description } />
                </div>
            );
        }
        return (
            <div>To do with id { this.props.id } is not found</div>
        );
       
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps;
    return {
        todo: state.todos.item,
        id: id
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoContainer);