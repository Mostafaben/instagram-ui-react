import './post.css';
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiShare } from 'react-icons/bi';

function Post() {
  // const [img, setimg] = useState('');
  const avatarImg =
    'https://avatars0.githubusercontent.com/u/32815384?s=460&u=56c99b2b8b06a0f4028064facca76dea46997a75&v=4';
  const postImg = 'https://static.toiimg.com/photo/msid-73984558/73984558.jpg';
  return (
    <div className="card-container">
      <img className="img" src={postImg}></img>
      <div className="card-content">
        <div className="avatar">
          <img src={avatarImg}></img>
          <p>Mostafa Ben</p>
        </div>
        <AiOutlineHeart className="icon" />
        <BiShare className="icon" />
      </div>
    </div>
  );
}

export default Post;
