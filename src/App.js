import Post from './components/post/post';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const posts = new Array(8).fill(10);
  return (
    <div className="App">
      <div className="row">
        {posts.map((e, index) => (
          <div className="col col-12 col-sm-6 col-lg-4 col-xl-3" key={index}>
            <Post key={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
