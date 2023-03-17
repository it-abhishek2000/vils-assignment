import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPauseCircle,
  faRotateRight,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Controls = ({ refe }) => {
    
  const [play, setPlay] = useState(true);

  const handlePlayPause = () => {
    setPlay(!play);
    if (play === true) {
      refe.current.play();
    } else {
      refe.current.pause();
    }
  };

  const handleSkip = (Time) => {
    refe.current.currentTime += Time;
  };

  const handleSpeed = (speed) => {
    console.log(speed);
    refe.current.playbackRate = speed;
  };

  return (
    <>
      <div className="flex flex-row h-10 justify-center items-center">
        <div className="space-x-10">
          <button onClick={() => handleSkip(-5)}>
            <FontAwesomeIcon className="fa-lg" icon={faRotateLeft} />
          </button>
          <button onClick={handlePlayPause}>
            {play === true ? (
              <FontAwesomeIcon className="fa-xl" icon={faPlayCircle} />
            ) : (
              <FontAwesomeIcon className="fa-xl" icon={faPauseCircle} />
            )}
          </button>
          <button onClick={() => handleSkip(5)}>
            <FontAwesomeIcon className="fa-lg" icon={faRotateRight} />
          </button>
          <select
            className="border-blue-900 border-2 rounded-lg"
            onChange={(e) => {
              handleSpeed(e.target.value);
            }}
          >
            <option value={1}>1.00x</option>
            <option value={1.25}>1.25x</option>
            <option value={1.5}>1.50x</option>
            <option value={1.75}>1.75x</option>
            <option value={2.0}>2.00x</option>
          </select>
        </div>

        <div className=""></div>
      </div>
    </>
  );
};
export default Controls;
