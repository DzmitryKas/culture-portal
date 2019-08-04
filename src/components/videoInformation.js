import React from 'react';
import ModalVideo from 'react-modal-video';
import './css/modal-video.min.css';

export default class VideoInformation extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    const linkImage = `https://img.youtube.com/vi/${this.props.videolink}/hqdefault.jpg` 
    const StyleButtonVideo = {
      display: "block",
      margin: "0 auto",
      maxWidth: "800px",
      height: "550px",  
      cursor: "pointer",
      marginBottom: "100px",
    }
    
    return (
      <div style={StyleButtonVideo}>
        <p>Video about the author</p>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.videolink} onClose={() => this.setState({isOpen: false})} />
        <img style={{maxWidth: "100%", height: "550px"}}  src={linkImage}  onClick={this.openModal}/>          
      </div>
    )
  }
}
