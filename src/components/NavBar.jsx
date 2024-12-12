import Cartwidget from "./Cartwidget"
import './navbar.css'

const NavBar = () => {
    return (
        <div class="padre">
            <div>
            <h1>Sticky Finger</h1>
            <div class="carwidget"><Cartwidget/></div>
            
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link" href="#">GUITAR</a>
                <a class="nav-link" href="#">DRUMS</a>
                <a class="nav-link" href="#">DJ-CONTROLLER</a>
                <a class="nav-link" href="#">HEADPHONES</a>
            </div>
            </div>
    </div>
</nav>
</div>
</div>
)
}

export default NavBar