import './post.css';
import { useState, useRef, useEffect } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { handleClickAnimation } from './../../assets/js/animations/post_animations';
import { BiShare } from 'react-icons/bi';
import Heart from '../heart/heart';
import LoadingImg from '../loading/loading';

function Post(props) {
  // to refrence the card

  // change image if props changes
  useEffect(() => {
    setimageUrl(`https://picsum.photos/id/${props.idImage}/400`);
  }, [props]);

  const post = useRef(null);
  const img = useRef(null);
  const [hearClicked, setheartClicked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [imageUrl, setimageUrl] = useState(() => {
    return `https://picsum.photos/id/${props.idImage}/400`;
  });
  const [imgLoading, setimgLoading] = useState(true);
  const avatarImg =
    'https://avatars0.githubusercontent.com/u/32815384?s=460&u=56c99b2b8b06a0f4028064facca76dea46997a75&v=4';

  return (
    <div className="card-container" ref={post}>
      <LoadingImg isLoading={imgLoading}></LoadingImg>
      <img
        onClick={() => {
          post.current.focus();
          handleClickAnimation(post.current);
          props.onClick(imageUrl);
        }}
        ref={img}
        style={imgLoading ? { display: 'none' } : { display: 'flex' }}
        className="img"
        src={imageUrl}
        onLoad={() => {
          setimgLoading(false);
          img.current.focus();
        }}
        onError={(e) => {
          setimageUrl(
            'https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png'
          );
          setTimeout(() => {
            setimgLoading(false);
          }, 2000);
        }}
      ></img>
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
