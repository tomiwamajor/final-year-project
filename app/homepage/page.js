import Foot from "./footer/page";
import NavSection from "./navigation/page";
import PageContent from "./page-content/page";
import React, { useContext } from 'react';
// import CartContext from '@/context/CartContext';

export default function HomePage() {
  // const { cartItems, addToCart } = useContext(CartContext);
  return <>
    <NavSection /> 
    <PageContent/>
    <Foot/>
  </>
}
