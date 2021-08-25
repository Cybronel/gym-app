import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle('Homepage')
    }

    async getHtml() {
        return `
            <h1>Homepage</h1>
            <h1>Ever considerend logging your workouts?</h1>
            <a href="/login" data-link>Log in</a>
            <p>Register <a href="/register" data-link>here</a></p>
        `
    }
}