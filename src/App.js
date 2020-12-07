import Post from './components/post/post';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './App.css';
import Story from './components/story/story';
import React, { useRef, useEffect, useState } from 'react';
import LoadingImg from './components/loading/loading';
function App() {
  const posts = new Array(8).fill(20);
  const stories = new Array(30).fill(1005);
  let scroll = 0;
  let maxScroll = stories.length * 80;
  let scrollRange = 3;
  let storyWidth = 80;
  const [randomId, setrandomId] = useState(parseInt(Math.random() * 200));
  const [isOpen, setisOpen] = useState(false);
  const [id, setid] = useState(null);
  const avatarImg =
    'https://avatars0.githubusercontent.com/u/32815384?s=460&u=56c99b2b8b06a0f4028064facca76dea46997a75&v=4';

  function handleTranslateRight(e) {
    let containerWidth = document.querySelector('.App').clientWidth;
    if (scroll * storyWidth * scrollRange >= maxScroll - containerWidth) return;
    e.scrollTo({
      top: 0,
      left: (scroll + 1) * storyWidth * scrollRange,
      behavior: 'smooth',
    });
    scroll++;
  }

  function handleTranslateLeft(e) {
    scroll = 0;
    e.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  function openBottomSheet(imgUrl) {
    setid(imgUrl);
    setisOpen(true);
  }

  function closeBottomSheet(e) {
    if (e.target.classList[0] === 'bottom-sheet-container') {
      setisOpen(false);
    }
  }
  const [bottomSheetImgLoaded, setbottomSheetImgLoaded] = useState(false);

  return (
    <div className="App">
      <div className="header-container">
        <h5>Stories</h5>
      </div>
      <div className="stories-container">
        <FaArrowAltCircleRight
          className="icon right"
          onClick={() => {
            let container = document.getElementById('stories-list');
            handleTranslateRight(container);
          }}
        ></FaArrowAltCircleRight>
        <FaArrowAltCircleLeft
          className="icon left"
          onClick={() => {
            let container = document.getElementById('stories-list');
            handleTranslateLeft(container);
          }}
        ></FaArrowAltCircleLeft>
        <div className="stories" id="stories-list">
          {stories.map((value, index) => (
            <Story
              key={index}
              name={'mostafa ben'}
              img={`https://picsum.photos/id/${index}/200/200`}
            ></Story>
          ))}
        </div>
      </div>
      <div className="header-container">
        <h5>Feed</h5>
      </div>
      <div className="row">
        {posts.map((e, index) => (
          <div className="col col-12 col-sm-6 col-lg-4 col-xl-3" key={index}>
            <Post
              key={index}
              idImage={index + randomId}
              onClick={(imgUrl) => {
                openBottomSheet(imgUrl);
              }}
            />
          </div>
        ))}
      </div>
      {!isOpen ? null : (
        <div
          className="bottom-sheet-container"
          onClick={(e) => {
            closeBottomSheet(e);
          }}
        >
          <div className="bottom-sheet">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                <LoadingImg isLoading={!bottomSheetImgLoaded}></LoadingImg>
                <img
                  src={id}
                  onLoad={() => {
                    setbottomSheetImgLoaded(true);
                  }}
                  onError={() => {
                    setbottomSheetImgLoaded(false);
                  }}
                  style={
                    bottomSheetImgLoaded
                      ? { display: 'flex' }
                      : { display: 'none' }
                  }
                ></img>
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-8 bottom-sheet-content">
                <div className="avatar">
                  <img src={avatarImg}></img>
                  <p>Mostafa Ben</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum non sem augue. Quisque facilisis a augue ut cursus.
                  Nunc auctor justo sapien, sit amet lobortis nisi hendrerit ac.
                  Aliquam nec mi sit amet felis aliquet ultrices. Fusce
                  vulputate nisi at nisi pharetra rhoncus. Proin bibendum nisl
                  purus. Aliquam ullamcorper sodales enim, at pellentesque erat
                  pharetra ac. Donec libero mauris, dapibus non tincidunt sit
                  amet, pretium id lacus. Pellentesque gravida sed leo eget
                  egestas. Donec dignissim non justo quis condimentum. Sed sed
                  ultrices quam, quis hendrerit massa. Nulla dapibus
                  sollicitudin turpis, vitae finibus massa tristique non. Cras
                  hendrerit velit nec pellentesque tincidunt. Donec ac iaculis
                  purus, sed suscipit orci. Sed eget semper justo.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
