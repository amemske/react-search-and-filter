import React from 'react'


const ScrollCardList = (props) => {
  //display the children, this component will wrap around ans element
  return (
<div style ={{overflowY: 'scroll',  border: '1px solid white', height:'800px'}}>
{props.children}
</div>
  )
}



export default ScrollCardList;
