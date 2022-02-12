import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
      <h1>Welcome to the JS SPA App</h1>
      <p>
        This text is rendered from dashboard.js
      </p>
      </p>
        It is called from a async function. The html can also be rendered server side!
      </p>
      <p>
        <a href="/posts" data-link>View recent Posts</a>
      </p>
    `;
  }
}