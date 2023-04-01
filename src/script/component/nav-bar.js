class NavBar extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-dark d-block" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="../assets/logo-kotobaku.png" alt="Logo" width="42" class="d-inline-block align-text-center me-2">
                    KotobaKu.id</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-5 gap-3">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link" href="./view/daftar-anime.html">List Anime</a>
                    </div>
                </div>
            </div>
        </nav>
        `
    }
}
customElements.define('nav-bar', NavBar)