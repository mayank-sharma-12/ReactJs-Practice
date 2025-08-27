import { useState } from "react";

function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [clicks, setClicks] = useState(0);

  let toggleButton = () => {
    setIsLiked(!isLiked);
    setClicks(clicks + 1);
  };

  let likeStyle = {color : "red"}

  return (
    <>
      <p onClick={toggleButton}>
        <p>Clicks = {clicks}</p>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </>
  );
}

export default LikeButton;