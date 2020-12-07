import Post from './components/post/post';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Story from './components/story/story';
import React, { useRef, useEffect, useState } from 'react';

function App() {
  const posts = new Array(8).fill(20);
  const stories = new Array(20).fill(1005);

  return (
    <div className="App">
      <h4> Stories </h4>
      <div className="stories">
        {stories.map((value, index) => (
          <Story
            key={index}
            name={'mostafa ben'}
            img={`https://picsum.photos/id/${value}/200/300`}
          ></Story>
        ))}
      </div>
      <div className="row">
        {posts.map((e, index) => (
          <div className="col col-12 col-sm-6 col-lg-4 col-xl-3" key={index}>
            <Post key={index} idImage={index + 200} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
