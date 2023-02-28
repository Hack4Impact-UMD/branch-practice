import './index.css';

const NavBar= () => {
    return(
        <div>
        <nav>
          <a href='/' id="leftNav">H4I</a>
          <div id="rightNav">
            <a href='/' id="home">Home</a>
            <a href='/'>About Us</a>
          </div>
        </nav>
      </div>
    );
}

export default NavBar;