interface ItemAcitons<T> {
    createItem: (obj: T) => T;
    updateItem: (obj: T) => T;
    deleteItem: (obj: T) => T;
}