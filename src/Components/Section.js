import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
    return (
        <Wrap bgImg = {backgroundImg}>
        <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
            <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                { rightBtnText && <RightButton>
                    {rightBtnText}
                </RightButton>}
            </ButtonGroup>
            </Fade>
            <DownArrow src = "./images/down_arrow3-removebg-preview.png" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("./Images/${props.bgImg}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 50px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color:rgba(24,25,32,0.8);
    width:256px;
    height: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    text-transform: uppercase;
    font-size: 17px;
    cursor: pointer;
    opacity: 0.8;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    color: black;
    background-color: white;
    opacity: 0.9;
`

const DownArrow = styled.img`
    height: 25px;
    animation: animateDown infinite 1.5s;
    margin-bottom: 2px;
     @media (max-width: 768px){
         margin-bottom: 20px;
    }
`

const Buttons = styled.div`

`