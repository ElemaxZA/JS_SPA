import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
      <h1>Settings</h1>
      <p>
      You are now viewing the Settings View
      <p>
        <a href="/posts" data-link>View recent Posts</a>
      </p>
    `;
  }
}