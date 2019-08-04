import React from "react";
import './css/modal-video.min.css';

function YandexMap(props) {
  const StyleWrapperMap = {
    display: "block",
    margin: "0 auto",
    maxWidth: "800px",
    width: "100%",
    height: "550px",
  }
  console.log('props', props.mapCode)
  return (
    <>
      <p>Place of author's major activity</p>   
      <div style={StyleWrapperMap} dangerouslySetInnerHTML={{__html: props.mapCode}}>      
      </div>
    </>
  )
}

export default YandexMap;