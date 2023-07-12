class Storage {
    set(storageName, value) {
        localStorage.setItem(storageName, JSON.stringify(value));
    }

    get(storageName) {
        const value = localStorage.getItem(storageName);
        if (value && isJsonString(value)) {
            return JSON.parse(value);
        }
    }

    remove(storageName) {
        localStorage.removeItem(storageName);
    }
}

const isJsonString = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

const storage = new Storage();
export default storage;
