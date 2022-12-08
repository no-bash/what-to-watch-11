interface IVideoPlayerProps {
  path: string;
  onMouseOutHandler: () => void;
}

const VideoPlayer = ({path, onMouseOutHandler}: IVideoPlayerProps) => (
  <video
    preload='auto'
    onMouseOut={onMouseOutHandler}
    id='video-preview'
    className='small-film-card catalog__films-card'
    // ref={videoRef}
  >
    <source
      src={path}
      type='video/mp4'
    />
    <p>
      Your browser doesn&rsquo;t support HTML5 video. Here is a{' '}
      <a href={path}>link to the video</a> instead.
    </p>
  </video>
);
export default VideoPlayer;
