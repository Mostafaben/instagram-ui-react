import { AiFillHeart } from 'react-icons/ai';
import { GiBrokenHeart } from 'react-icons/gi';
import './heart.css';
function Heart(props) {
  if (!props.isClicked) return null;
  return (
    <div className="heart-container">
      {props.liked ? (
        <AiFillHeart className="icon"></AiFillHeart>
      ) : (
        <GiBrokenHeart className="icon"></GiBrokenHeart>
      )}
    </div>
  );
}

export default Heart;
