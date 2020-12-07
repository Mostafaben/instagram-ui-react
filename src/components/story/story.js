import './story.css';
import { handleClickAnimation } from './../../assets/js/animations/post_animations';
import { useRef } from 'react';
function Story(props) {
  const story = useRef(null);
  return (
    <div className="story-container">
      <div
        ref={story}
        className="story"
        onClick={() => {
          handleClickAnimation(story.current);
        }}
      >
        <img src={props.img}></img>
        <div className="loader"></div>
      </div>
      <div className="text">{props.name}</div>
    </div>
  );
}

export default Story;
