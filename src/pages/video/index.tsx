import React from 'react'
import styled from 'styled-components'
import { VideoAbout, VideoHome, VideoNavBar } from '../../components'

const VideoPageStyle = styled.div`

`

const VideoPage = () => {
    return (
        <VideoPageStyle>
            <VideoNavBar/>
            <VideoHome/>
            <VideoAbout/>
        </VideoPageStyle>
    )
}

export default VideoPage
