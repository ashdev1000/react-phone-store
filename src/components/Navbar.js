import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar  extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}

<Link to='/'>
<img src={logo} alt="store" className="navbar-brand" />
</Link>
<ul className="navbar-nav align-items-center">
  <li className='nav-item ms-5'>

    <Link to="/" className='nav-link'>Products</Link>
  </li>
</ul>
<Link to="/cart" className='ms-auto'>
<ButtonContainer><span className="me-1"><i className='fas fa-cart-plus'/></span>MyCart</ButtonContainer>
</Link>
      </NavWrapper>
    )
  }
}



const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
  color:var(--mainWhite);
  font-size:1.3rem;
  text-transform:capitalize;
}




`;


