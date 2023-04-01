class QuoteCard extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <div class="card h-100">
            <div class="card-header">Quote</div>
            <div class="card-body">
                <blockquote class="blockquote">
                    <p class="mb-4">A well-known quote, contained in a blockquote element.</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
            </div>
        </div>
        `
    }
}
customElements.define('quote-card', QuoteCard)