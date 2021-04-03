import React from 'react'
import styled , {keyframes} from 'styled-components'

const Skeleton = () => {
    return (
      <Body>
<Skel />
<Shimmer>
    <Shimglow/>
</Shimmer>



      </Body>
    )
}


const loading = keyframes`
0%{
    transform: translateX(-150%); 
}

50%{
    transform: translateX(-50%); 
}


100%{
    transform: translateX(150%); 
}


`

const Body = styled.div`
width: 100%;
height: 250px;
position: relative;
`

const Skel = styled.div`
background: #ddd;
width: 100%;
height: 100%;
`

const Shimmer = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
overflow: hidden;
animation: ${loading} 2s infinite;
`
const Shimglow = styled.div`
width: 50%;
height: 100%;
background: rgba(255,255,255,0.2);
transform: skewX(-20deg);
`
export default Skeleton
