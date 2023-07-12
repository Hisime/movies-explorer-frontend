export const Debounce = (func, timerCount = 100) => {
    let timer;
    return function (event) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, timerCount, event);
    }
}
