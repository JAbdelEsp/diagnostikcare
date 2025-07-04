import { Loading } from "./styles";

const Preloader = () => {
  return (
    <Loading>
      <div className="loading-text">
        <span className="loading-text-words">L</span>
        <span className="loading-text-words">O</span>
        <span className="loading-text-words">A</span>
        <span className="loading-text-words">D</span>
        <span className="loading-text-words">I</span>
        <span className="loading-text-words">N</span>
        <span className="loading-text-words">G</span>
      </div>
    </Loading>
  );
};

export default Preloader;
