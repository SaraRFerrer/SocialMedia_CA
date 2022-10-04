export function saved(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function accessToken(key) {
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    } catch {
        return null
    }
}

export function remove(key) {
    localStorage.removeItem(key);
}