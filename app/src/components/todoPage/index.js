import React from 'react';
import { useParams } from "react-router-dom";

const TodoPage = (props) => {
    //use global state from store
    const id = useParams();
    return (
        <div>This is the todo page</div>
    );
    
};

export default TodoPage;