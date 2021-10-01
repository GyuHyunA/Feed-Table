import React from 'react'
import styled from 'styled-components'

const HomeFooterStyle = styled.div`
    height: 50vh;
    background-color: lightgray;
`;

const HomeFooter = () => {
    return (
        <HomeFooterStyle>
            <div className="footer-contain">
                <div className="footer-wrap">
                    <div className="title">
                        <span>Footer 타이틀 입니다</span>
                    </div>
                    <div className="contents">
                        <span>Footer 내용입니다</span>
                    </div>
                </div>
            </div>
        </HomeFooterStyle>
    )
}

export default HomeFooter
