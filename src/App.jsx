import { useEffect, useRef, useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Will you be my valentine?💕");
  const [url, setUrl] = useState("https://play-lh.googleusercontent.com/8XpoXrCoXn92GQyn7QAz4RR5OttOLFxr0WpnN0krvSkNA9DVQYr9p1-Rn5b1HqLnIkA");
  const [yesScale, setYesScale] = useState(1);
  const [noScale, setNoScale] = useState(1);
  const yesRef= useRef();
  const noRef= useRef();

  useEffect(() => {
    setText();
  }, [count]);

  const setText = () => {
    if(count === 1){
      setMessage("Soch le acche se!!!");
      setUrl("https://i.pinimg.com/originals/65/56/67/6556671046c485e666780b9e5e52edb5.gif")
      setYesScale(1.3);
      setNoScale(0.85)
    }
    if(count === 2){
      setMessage("Ek aur baar soch le!!!");
      setUrl("https://i.pinimg.com/originals/8d/d3/ed/8dd3ed839851364b5653440ee4a6a5a9.gif")
      setYesScale(1.8);
      setNoScale(0.8)
    }
    if(count === 3){
      setMessage("Dekh le last chance hai!!!");
      setUrl("https://i.pinimg.com/originals/a2/3b/0a/a23b0a4f9fbc7178165a6bba92b6cbc2.gif");
      setYesScale(2.5);
      setNoScale(0.7)
    }
    if(count === 4){
      setMessage("Ye LAST wala last chance hai!!!");
      setUrl("https://i.pinimg.com/originals/ee/d0/96/eed09666b043c8eba1d526d80a6412e9.gif");
      setYesScale(3);
      setNoScale(0.5)
    }
    if(count === 5){
      setMessage("Maan jao naaaa cutieee!!!🤗");
      setUrl("https://media.tenor.com/XZGm-kKjguMAAAAC/kawaii-bunny.gif")
      setYesScale(4);
      setNoScale(0)
    }
  }


  return (
    <>
      <div className="bg-pink-100 w-full h-screen flex justify-center items-center poppins-regular">
        <div className="bg-indigo-200 w-[700px] h-[450px] rounded-3xl flex flex-col justify-center items-center gap-10">
          <h1 className="text-white text-2xl text-center">
            {message}
          </h1>
          <img src={url} alt="" className="h-40"/>
          <div className="flex gap-10">
            <button className={`py-1.5 px-5 z-10 bg-green-500 rounded-lg cursor-pointer hover:bg-green-600 text-white`}
            style={{scale: yesScale}}
            ref={yesRef}
            onClick={()=>{
              setMessage("Hehe...Knew it!!😍");
              setUrl("https://i.pinimg.com/originals/fa/b6/9d/fab69df83b7e6f4eec7bcec555df0844.gif")
              yesRef.current.className = "hidden"
              noRef.current.className = "hidden"
            }}>Yes</button>
            <button 
            ref={noRef}
            className={`py-1.5 px-5 z-0 bg-red-500 rounded-lg cursor-pointer hover:bg-red-600 text-white`}
            onClick={()=>setCount((count)=>count+1)}
            style={{scale:noScale}}>No</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
