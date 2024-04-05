class LocalStorageUtil {
    constructor() {
        console.log(localStorage.getItem(5));
    }


    putAnswer(id, answer) {
        localStorage.setItem(id, answer)
    }
}
const LocalStorageUtils = new LocalStorageUtil()

console.log(fetch("http://127.0.0.1:5500/posts.json"));