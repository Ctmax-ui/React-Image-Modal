import "./App.css";
import { useState } from "react";

function App() {
  const srcs = [
    "https://th.bing.com/th/id/OIG3.5u5ZBGkvLQn1ELp4UqXH",
    "https://pixlr.com/images/index/ai-image-generator-one.webp",
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/326212/pexels-photo-326212.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4482677/pexels-photo-4482677.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4014919/pexels-photo-4014919.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://th.bing.com/th/id/OIG3.5u5ZBGkvLQn1ELp4UqXH",
    "https://pixlr.com/images/index/ai-image-generator-one.webp",
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/326212/pexels-photo-326212.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4482677/pexels-photo-4482677.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4014919/pexels-photo-4014919.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const [isActive, setIsActive] = useState(false);
  const [selectedSrc, setselectedSrc] = useState(null);

  function changeSrcHandle(src) {
    setselectedSrc(src);
    setIsActive(true);
  }

  const closeBtn = () => {
    setselectedSrc(null);
    setIsActive(false);
  };

  return (
    <>
      <h1 className=" text-center text-2xl mb-8">
        Welcome To React Image Modal
      </h1>
      <div className=" w-11/12 flex mx-auto flex-row flex-wrap gap-y-3  place-content-center ">
        {srcs &&
          srcs.map((value, key) => (
            <img
              className=" w-1/6 mx-2 cursor-pointer rounded-xl "
              key={key}
              src={`${value}`}
              onClick={() => changeSrcHandle(value)}
              // onMouseEnter={() => changeSrcHandle(value)}
              alt=""
            />
          ))}
      </div>

      {isActive && (
        <div className="rounded-2xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-4 h-4/5 ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 "
            onClick={closeBtn}
          >
            X
          </button>

          <img className=" object-contain h-5/6 max-w-full  rounded-2xl " src={`${selectedSrc}`} alt="" />
        </div>
      )}
    </>
  );
}

export default App;
