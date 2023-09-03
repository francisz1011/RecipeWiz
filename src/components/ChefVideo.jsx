import video from "../assets/videos/Chef_Video.mp4"



const ChefVideo = () => {
  return(
      <div id="home" className="video-background">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        <span>
    <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
  </span>

      </video>
      
    </div>
  )
}

export default ChefVideo;