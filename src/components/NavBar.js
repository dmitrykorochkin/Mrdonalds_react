import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import signImg from '../image/sign.svg';

const NavBarStyled = styled.header`
    position:fixed;
    top:0;
    left:0;
    z-index: 999;
    height:80px;
    width:100vw;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px;
    background-color: #299b01;
    color:white;
`;
const Logo = styled.div`
    display: flex;
    align-items:center;

`;

const H1 = styled.h1`
    font-size:24px;
    margin-left:15px;
`;

const ImgLogo = styled.img`
    width:50px;
    
`;

const Button = styled.button`
    display:flex;
    flex-direction:column;
    background-color: transparent;
    color:#fff;
    border:none;
    align-items:center;
    cursor:pointer;
   
    

`;
const ImgSign = styled.img`
    margin-bottom:3px;
`

export const NavBar = () => {
    return(
        <div>
        <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo" />
            <H1>Mr.Donalds</H1>
        </Logo>
        <Button>
            <ImgSign src={signImg} alt="Sign" />
            <p> ВОЙТИ</p>
        </Button>
        </NavBarStyled>
    </div>
    )

};