
class PrologDerivationTree extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
                    <canvas></canvas>
                `;
        this.canvas = this.shadowRoot.querySelector("canvas");

    }

    connectedCallback() {
        this.render();
    }

    render() {
        const session = pl.create();
        session.consult(this.dataset.program);
        session.query(this.dataset.goal);
        session.draw(10, this.canvas);
    }

    draw(event) {
    }

    disconnectedCallback() {
    }
}

customElements.define('prolog-derivation-tree', PrologDerivationTree);