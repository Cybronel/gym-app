import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle('Log In')
    }

    async getHtml() {
        return `
            <h1>Log in</h1>
            <a href="/login" data-link>Log in</a>
            <p>Register <a href="/register" data-link>here</a></p>
        `
    }
}