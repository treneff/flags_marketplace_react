import React from 'react';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import "./Header.css"

const Header = ({handleBasketClick}) => {
    return <header><ShoppingBasketOutlinedIcon onClick ={handleBasketClick} /></header>;
};

export default Header;
