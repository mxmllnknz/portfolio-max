import "./block.css";

function Block({ orientation, img, children }) {
  return (
    <>
      {orientation == "left" ? (
        <div className="block-container">
          <div className="block-image-container">
            <img src={`src/assets/${img}`} />
          </div>
          <div className="block-text-container">{children}</div>
        </div>
      ) : (
        <div className="block-container">
          <div className="block-text-container">{children}</div>
          <div className="block-image-container">
            <img src={`src/assets/${img}`} />
          </div>
        </div>
      )}
    </>
  );
}

export default Block;
