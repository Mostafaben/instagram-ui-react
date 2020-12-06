import './post.css';
import { useState, useRef } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { handleClickAnimation } from './../../assets/js/animations/post_animations';

import { BiShare } from 'react-icons/bi';
import Heart from '../heart/heart';

function Post() {
  // to refrence the card
  const post = useRef(null);
  const [hearClicked, setheartClicked] = useState(false);
  const [liked, setLiked] = useState(false);
  const avatarImg =
    'https://avatars0.githubusercontent.com/u/32815384?s=460&u=56c99b2b8b06a0f4028064facca76dea46997a75&v=4';
  const postImg = 'https://static.toiimg.com/photo/msid-73984558/73984558.jpg';

  return (
    <div
      className="card-container"
      onClick={(e) => {
        post.current.focus();
        handleClickAnimation(post.current);
      }}
      ref={post}
    >
      <img className="img" src={postImg}></img>
      <div className="card-content">
        <div className="avatar">
          <img src={avatarImg}></img>
          <p>Mostafa Ben</p>
        </div>
        {!liked ? (
          <AiOutlineHeart className="icon" onClick={handleHeartClicked} />
        ) : (
          <AiFillHeart
            className="icon like"
            onClick={handleHeartClicked}
          ></AiFillHeart>
        )}
        <BiShare className="icon" />
      </div>
      <Heart isClicked={hearClicked} liked={liked}></Heart>
    </div>
  );
  function handleHeartClicked() {
    setLiked(!liked);
    setheartClicked(true);
    setTimeout(() => {
      setheartClicked(false);
    }, 1000);
  }
}

export default Post;
