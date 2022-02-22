import React from 'react'
import Section from './Section'
import styled from 'styled-components'


function Home() {
    return (
        <Container>
            <Section
                    title = "Model s"
                    description = "Order online For Tough Less Delivery"
                    backgroundImg ="model-s.jpg"
                    leftBtnText = "Custom order"
                    rightBtnText = "Existing inventory" 
            />
            <Section
                title = "Model 3"
                    description = "Order online For Tough Less Delivery"
                    backgroundImg ="model-3.jpg"
                    leftBtnText = "Custom order"
                    rightBtnText = "Existing inventory"
            />
            <Section
                title = "Model X"
                    description = "Order online For Tough Less Delivery"
                    backgroundImg ="model-x.jpg"
                    leftBtnText = "Custom order"
                    rightBtnText = "Existing inventory"
            />
            <Section
                title = "Model Y"
                    description = "Order online For Tough Less Delivery"
                    backgroundImg ="model-y.jpg"
                    leftBtnText = "Custom order"
                    rightBtnText = "Existing inventory"
            />
            <Section
                title = "Solar pannel"
                    description = "Order online For Tough Less Delivery"
                    backgroundImg ="solar-panel.jpg"
                    leftBtnText = "Custom order"
                    rightBtnText = "Existing inventory"
            />
            <Section
                title = "Solar Roof"
                    description = "Order online For Tough Less Delivery"
                    backgroundImg ="solar-roof (1).jpg"
                    leftBtnText = "Custom order"
                    rightBtnText = "Existing inventory"
            />
            <Section
                title = "Accessories"
                    description = "Order online For Tough Less Delivery"
                    backgroundImg ="accessories.jpg"
                    leftBtnText = "Custom order"
                    
            />
        </Container>
    )
}

export default Home

const Container = styled.div`

`
