import {useRef, useState } from "react";
import Controls from "./Control";
import convertToString from "./convert";


const Video = () => {
  const [videoProgress, setVideoProgress] = useState(0);
  const [buffer, setBuffer] = useState(0);
  const [videoDuaration,setVideoDuaration] = useState("00:00:00");
  const [time, setTime] = useState("00:00:00");
  const refe = useRef(null);

  const updateDuration = ()=>{
    const videoLength = refe.current.duration;
    const time = convertToString(videoLength);
    setVideoDuaration(time);
  }
  
  const handleTimeUpdate = () => {
    const videoLength = refe.current.duration;
    const currLenght = refe.current.currentTime;
    const progressLength = (currLenght / videoLength) * 100;

    const buffered = refe.current.buffered.end(0);
    const bufferedLength = (buffered/videoLength)*100;
   
    setVideoProgress(progressLength);
    setBuffer(bufferedLength-progressLength);

    const time  = convertToString(currLenght);
    setTime(time);
    
  };
  
  return (
    <div className="bg-pink-400 rounded-2xl mx-40 my-8">
      
      <video className="m-auto rounded-t-lg"
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={updateDuration}
        ref={refe}
        width={"100%"}
        height={"100%"}
      >
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          type="video/mp4"
        />
      </video>
 
      <div className="flex flex-row items-center">
      <div className="mx-auto my-2">{time}</div>
      <div className="flex flex-row w-5/6 mx-auto my-2 bg-gray-200 rounded-full h-2.5">
        <div
          className={"bg-purple-600 h-2.5 rounded-l-lg"}
          style={{ width: videoProgress + "%" }}
        ></div>
        <div
          className={"bg-black h-2.5 rounded-r-lg"}
          style={{ width: buffer + "%" }}
        ></div>
      </div>
      <div className="mx-auto my-2">{videoDuaration}</div>
      </div>


      <div className=" text-center">
        <h3 className="text-lg">{time}</h3>
      </div>

      <Controls refe={refe}/>
      
    </div>
  );
};
export default Video;