import './loading.css';
function LoadingImg(props) {
  if (!props.isLoading) return null;
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <div className="spinner small"></div>
    </div>
  );
}
export default LoadingImg;
