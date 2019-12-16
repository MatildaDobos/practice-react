let list = [];

export default class Todos {
    static add = (item) => {
        const id = list.length+1;
        list.push({
            ...item,
            id
        });
    };

    static remove = (id) => {
        let filtered = list.filter((item) => {
            return item.id === id;
        });
        list = filtered;
    };

    static getList = () => {
        return list;
    };
}
