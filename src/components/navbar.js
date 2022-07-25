import './navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar">
        <span class="toggle-nav" id="toggle-nav">
              
        </span>
       
         <div class="logo">
            <p>sextant</p>
        </div> 
        <div className="links">
        <a href='#'>Home</a> &nbsp;&nbsp;
        <a href='#'>Features</a>&nbsp;&nbsp;
        <a href='#'>About Us</a>&nbsp;&nbsp;
        </div>
    </nav>

    );
  }
   
  export default Navbar;