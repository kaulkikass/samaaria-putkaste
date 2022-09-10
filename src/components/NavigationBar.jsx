import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
/* import { cartSumService } from '../store/cartSumService'; */
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../store/AuthContext';
import CartSumContext from '../store/CartSumContext';
import styles from '../css/Nav.module.css';

function NavigationBar() {
  const { t, i18n } = useTranslation();
  const authCtx = useContext(AuthContext);
  const cartSumCtx = useContext(CartSumContext);

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
    <Navbar bg="light" variant="light">
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
          <Nav.Link as={Link} to="/meist">NAISED</Nav.Link>
          <Nav.Link as={Link} to="/poed">MEHED</Nav.Link>
          <Nav.Link as={Link} to="/ostukorv">TÜDRUKUD</Nav.Link>
          <Nav.Link as={Link} to="/ostukorv">POISID</Nav.Link>
          <Nav.Link as={Link} to="/ostukorv">VÄIKELAPSED</Nav.Link>
          <Nav.Link as={Link} to="/ostukorv">KODUKAUP</Nav.Link>
          <Nav.Link as={Link} to="/ostukorv">KUNST</Nav.Link>
          <Nav.Link as={Link} to="/ostukorv">MEELELAHUTUS</Nav.Link>
          <Nav.Link as={Link} to="/ostukorv">MEIST</Nav.Link>
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