class Storage {
    set(storageName, value) {
        const userId = localStorage.getItem('id');
        localStorage.setItem(`${userId}-${storageName}`, JSON.stringify(value));
    }

    get(storageName) {
        const userId = localStorage.getItem('id');
        const value = localStorage.getItem(`${userId}-${storageName}`);
        if (value && isJsonString(value)) {
            return JSON.parse(value);
        }
    }

    remove(storageName) {
        const userId = localStorage.getItem('id');
        localStorage.removeItem(`${userId}-${storageName}`);
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
