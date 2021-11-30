import React from 'react'
import styled from 'styled-components'
import { FrontAbout, FrontHome, NavBar } from '../../components'


const FrontPageStyle = styled.div`

`

const FrontPage = () => {
    return (
        <FrontPageStyle>
            <NavBar/>
            <FrontHome/>
            <FrontAbout/>
        </FrontPageStyle>
    )
}

export default FrontPage
