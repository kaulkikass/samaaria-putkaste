import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
/* import { cartSumService } from '../store/cartSumService'; */
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../store/AuthContext';
import CartSumContext from '../store/CartSumContext';
import styles from '../css/Nav.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

function NavigationBar() {
  const { t, i18n } = useTranslation();
  const authCtx = useContext(AuthContext);
  const cartSumCtx = useContext(CartSumContext);
  const [showDropdown, setShowDropdown] = useState(false);
 

 /*  const calculateCartSum = () => {
    let cart = sessionStorage.getItem("cart");
    cart = JSON.parse(cart) || [];
    let cartSum = 0;
    cart.forEach(element => cartSum = cartSum + element.product.price * element.quantity );
    return cartSum;
  }
 */
/*   const [cartSum, setCartSum] = useState(calculateCartSum()); */

  const changeWebsiteLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }

/*   cartSumService.getCartSum().subscribe(newCartSum => setCartSum(newCartSum)); */

  const logout = () => {
    // globaalne muutuja false-ks
    authCtx.logout();
  }

  return ( 
    <Navbar className={styles.navbarBackground}>
      <Container fluid style={{paddingLeft: '0px', paddingRight: '0px', marginLeft:"0px", marginRight:"0px"}}>
          <Container className={styles.logoMargin}>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={require("../assets/samaaria-logo.png")}
              width="200"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          </Container>
        <Container>
        <Nav  className={styles.textCentered}>
          {authCtx.loggedIn === true && <Nav.Link as={Link} to="/admin">{t('navbar.admin-button')}</Nav.Link>}
          <NavDropdown title={<span className={styles.navbarTextColor}>NAISED</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/naised/riided"}>RIIDED</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/naised/jalanoud"}>JALANÕUD</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/naised/aksessuaarid"}>AKSESSUAARID</NavDropdown.Item>
            </NavDropdown> 
          <NavDropdown title={<span className={styles.navbarTextColor}>MEHED</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/mehed/riided"}>RIIDED</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/mehed/jalanoud"}>JALANÕUD</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/mehed/aksessuaarid"}>AKSESSUAARID</NavDropdown.Item>
            </NavDropdown> 
          <NavDropdown title={<span className={styles.navbarTextColor}>TÜDRUKUD</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/tudrukud/riided"}>RIIDED</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/tudrukud/jalanoud"}>JALANÕUD</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/tudrukud/aksessuaarid"}>AKSESSUAARID</NavDropdown.Item>
            </NavDropdown> 
          <NavDropdown title={<span className={styles.navbarTextColor}>POISID</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/poisid/riided"}>RIIDED</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/poisid/jalanoud"}>JALANÕUD</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/poisid/aksessuaarid"}>AKSESSUAARID</NavDropdown.Item>
            </NavDropdown> 
          <NavDropdown title={<span className={styles.navbarTextColor}>VÄIKELAPSED</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/vaikelapsed/riided"}>RIIDED</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/vaikelapsed/jalanoud"}>JALANÕUD</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/vaikelapsed/aksessuaarid"}>AKSESSUAARID</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/vaikelapsed/manguasjad"}>MÄNGUASJAD</NavDropdown.Item>
            </NavDropdown> 
          <NavDropdown title={<span className={styles.navbarTextColor}>KODUKAUP</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/kodukaup/koogitarbed"}>KÖÖGITARBED</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kodukaup/noud"}>NÕUD</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kodukaup/vaasid"}>VAASID</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kodukaup/lillepotid"}>LILLEPOTID</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kodukaup/kuunlajalad"}>KÜÜNLAJALAD</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kodukaup/kellad"}>KELLAD</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kodukaup/tekstiil"}>TEKSTIIL</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kodukaup/kardinad"}>KARDINAD</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kodukaup/vaibad"}>VAIBAD</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kodukaup/kotid-kohvrid"}>KOTID JA KOHVRID</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kodukaup/tööriistad"}>TÖÖRIISTAD</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kodukaup/terariistad"}>TERARIISTAD</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kodukaup/manguasjad"}>MÄNGUASJAD</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kodukaup/joulukaup"}>JÕULUKAUP</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kodukaup/muu"}>MUU</NavDropdown.Item>
            </NavDropdown> 
          <NavDropdown title={<span className={styles.navbarTextColor}>KUNST</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/kunst/ehted"}>EHTED</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kunst/kujud"}>KUJUD</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kunst/pildiraamid"}>PILDIRAAMID</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kunst/pildid"}>PILDID</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kunst/iluasjad"}>ILUASJAD</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/kunst/muu"}>MUU</NavDropdown.Item>
            </NavDropdown>  
          <NavDropdown title={<span className={styles.navbarTextColor}>MEELELAHUTUS</span>} id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/meelelahutus/muusika"}>MUUSIKA</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/meelelahutus/film"}>FILM</NavDropdown.Item>
            </NavDropdown> 

          <NavDropdown
            title={<span className={styles.navbarTextColor}>MEIST</span>}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            show={showDropdown}
            >
            <NavDropdown.Item as={Link} to={"/meist/kontakt"}>Kontakt</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/meist/missioon-visioon"}>Missioon ja visioon</NavDropdown.Item>
          </NavDropdown>  
          
          <Nav.Link as={Link} to="/ostukorv"><img
              alt=""
              src={require("../assets/magnifying-glass (1).png")}/></Nav.Link>
          
          { authCtx.loggedIn === true && <Nav.Link onClick={logout}>Logi välja</Nav.Link>}
          </Nav>
          </Container>
        
      <Container className={styles.shoppingCart}>
      <Nav>
      <Nav.Link as={Link} to="/ostukorv"><img
              alt=""
              src={require("../assets/cart1.png")}/></Nav.Link>
      <div className={styles.centerCart}>{cartSumCtx.cartSum.toFixed(2) } €</div>
      </Nav>
      </Container>
      </Container>
{/*       <img className='lang' onClick={() => changeWebsiteLanguage('en')} src={require('../assets/english.png')} alt="" />
      <img className='lang' onClick={() => changeWebsiteLanguage('ee')} src={require('../assets/estonian.png')} alt="" />
      <img className='lang' onClick={() => changeWebsiteLanguage('ru')} src={require('../assets/russian.png')} alt="" /> */}
    </Navbar>
   );
}

export default NavigationBar;