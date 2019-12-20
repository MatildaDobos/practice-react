
const saveResource = (url, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

const getResource = (url) => {
    return fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
    }).then(res => res.json());
}

const baseUrl = 'http://localhost:3000';

export default class TodoApi {
    static getTodoList = () => {
        const url = baseUrl + '/todo';
        return getResource(url);
    };

    static getTodoById = id => {
        const url = baseUrl + '/todo/' + id;
        return getResource(url);
    };

    static addTodo = todo => {
        const url = baseUrl + '/todo';
        saveResource(url, todo);
    };

    static updateTodo = todo => {
        const url = baseUrl + '/todo/' + todo.id;
        return saveResource(url, todo);
    };
}