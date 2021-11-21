import styled from "styled-components";

export const VideoNavBarStyle = styled.div`
    position: fixed;
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    .logo-wrap{
        margin: 0 96px;
        span{
            font-size: 24px;
            font-weight: 800;
        }
    }
    .list-wrap{
        ul{
            list-style: none;
            display: flex;
            align-items: center;
            li{
                margin-right: 36px;
            }
        }
    }
`