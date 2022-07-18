import './navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar">
        <span class="toggle-nav" id="toggle-nav">
            <i class="material-icons">menu</i>
        </span>
         <div class=""> 
        <a href="#" class="logo" img src="./components/logo.jpg" alt="">
            <p>sextant</p>
        </a>
        </div> 
        <ul class="main-nav" id="main-nav">
            <li><a href="#" class="nav-links">Home</a></li>
            <li><a href="#" class="nav-links">News</a></li>
            <li><a href="#" class="nav-links">Conatct</a></li>
            <li><a href="#" class="nav-links">About</a></li>
        </ul>
    </nav>

    );
  }
   
  export default Navbar;