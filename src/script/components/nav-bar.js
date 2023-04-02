class NavBar extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-dark d-block" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    AyoDoa | Kumpuan Doa-Doa Harian</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
        `
    }
}
customElements.define('nav-bar', NavBar)