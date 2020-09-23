export default {
    saveItem: (key, value) => {
        localStorage.setItem(key, value);
    },
    removeItem: (key) => {
        localStorage.removeItem(key);
    }
};
