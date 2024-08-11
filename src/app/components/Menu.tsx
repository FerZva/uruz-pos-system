import React from 'react';
import MenuLinkButton from './MenuLinkButton'

const Menu: React.FC = () => {
  return (
    <nav>
      <div className="container_menu_container">
        <MenuLinkButton linkName='Analytics' linkTo='/Analitycs' />
        <MenuLinkButton linkName='Cashier' linkTo='./Cashier' />
        <MenuLinkButton linkName='Inventory' linkTo='./Inventory' />
        <MenuLinkButton linkName='Sales' linkTo='./Sales' />
        <MenuLinkButton linkName='Reports' linkTo='./Reports' />
        <MenuLinkButton linkName='Help & support' linkTo='./HelpAndSupport' />
      </div>
    </nav>
  )
}

export default Menu