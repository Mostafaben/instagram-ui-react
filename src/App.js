import Post from './components/post/post';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './App.css';
import Story from './components/story/story';
import React, { useRef, useEffect, useState } from 'react';

function App() {
  const posts = new Array(8).fill(20);
  const stories = new Array(30).fill(1005);
  let scroll = 0;
  let maxScroll = stories.length * 80;
  let scrollRange = 3;
  let storyWidth = 80;
  const [randomId, setrandomId] = useState(parseInt(Math.random() * 200));
  const [isOpen, setisOpen] = useState(false);

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

  function openBottomSheet() {
    setisOpen(true);
  }

  function closeBottomSheet(e) {
    if (e.target.classList[0] === 'bottom-sheet-container') setisOpen(false);
  }

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
              onClick={(e) => {
                openBottomSheet();
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
            <h1>Hello world</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
