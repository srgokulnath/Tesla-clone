import React, {useState} from 'react'
import styled from 'styled-components'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Container>
            <a>
                <img src = "./Images/logo (1).svg"/>
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar roof</a>
                <a href="#">Solar panels</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a href="#" onClick = {()=>setBurgerStatus(true)}>Menu</a>
            </RightMenu>
                <BurgerNav show = {burgerStatus}>
                <CostomClose>
                    <p><a href="#" onClick ={()=>setBurgerStatus(false)}>Close</a></p>
                    </CostomClose>
                    <li><a href = "#">Model S</a></li>
                    <li><a href = "#">Model X</a></li>
                    <li><a href = "#">Model Y</a></li>
                    <li><a href = "#">Model 3</a></li>
                    <li><a href = "#">Existing Inventory</a></li>
                    <li><a href = "#">Cyber Truck</a></li>
                    <li><a href = "#">Roadaster</a></li>
                    
                </BurgerNav>
                
            
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    left: 0;
    top: 0;
    right: 0;
    z-index: 0;
    
`

const Menu = styled.div`
    display: flex;
    font-size: 20px;
    margin-left: 35px;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
        font-weight: 300;
        padding: 0 20px;
        flex-wrap: nowrap;
    }
    @media(max-width: 568px){
        display: none;
    }
     
`
const RightMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    a{
        font-weight: 600;
        padding: 0 10px;
    }

`


const BurgerNav = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background: white;
    width: 300px;
    padding: 20px 0;
    padding-right: 10px;
    z-index:2;
    list-style: none;
    transform: ${props => props.show ? `translateX(0)`: `translateX(100%)`};
    transition: transform 0.5s ease-in-out;
    
    li{
        padding: 30px 10px;
        border-bottom: 1px solid rgba(24, 25, 32, 0.2);
    }
    a{
        font-weight: 600;
    }
`

const CostomClose = styled.div`
    z-index: 3;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`

