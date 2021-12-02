import React from 'react'
import styled from 'styled-components'
import { VideoSkill, VideoHome, VideoNavBar } from '../../components'

const VideoPageStyle = styled.div`

`

const VideoPage = () => {
    return (
        <VideoPageStyle>
            <VideoNavBar/>
            <VideoHome/>
            <VideoSkill/>
        </VideoPageStyle>
    )
}

export default VideoPage
