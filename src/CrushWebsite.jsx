import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { TypeAnimation } from "react-type-animation";

import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";
import photo4 from "./assets/photo4.png";
import photo5 from "./assets/photo5.png";
import photo6 from "./assets/photo6.png";
import photo7 from "./assets/photo7.png";
import photo8 from "./assets/photo8.png";
import photo9 from "./assets/photo9.png";
import photo10 from "./assets/photo10.jpg";
import teddy from "./assets/teddy.jpg";
import guitar from "./assets/guitar.jpg";
import video from "./assets/video.mp4";

const pages = [
  {
    title: "Hellooo Sehat 🌸",
    subtitle: "Welcome To This Little Cute Surprise ✨",
    text: "Made with lots of effort, time and courage 🌷",
    button: "Ready For This? 👀",
    bg: "from-pink-50 via-pink-100 to-rose-200",
    textColor: "text-pink-700",
  },
  {
    title: "Ek secret bataun? 👀",
    subtitle: "Promise karo smile karoge ✨",
    button: "Wanna Know? 🌸",
    bg: "from-pink-50 via-rose-50 to-fuchsia-100",
  },
  {
    title: "Just So You Know 🌷",
    text: `Tum jaisi ho, waisi hi rehna ✨
    Simple si, sweet si, aur apni duniya me khush rehne wali 🌸
    Bas tum — exactly tum hi kaafi ho 💫`,
    button: "Aage Chalte Hain 👀",
    bg: "from-pink-50 via-rose-100 to-pink-200",
    image: photo1,
  },
  {
    title: "Sehat ✨",
    subtitle: "This little surprise is specially made for you 🌸",
    button: "Aage Kuch Aur Cute Hai 💖",
    bg: "from-pink-50 via-rose-100 to-pink-100",
    image: photo2,
  },
  {
    title: "You Know What? 🌸",
    subtitle: "Some people look cute... but your smile has magic ✨",
    text: "And somehow, this whole website still feels less pretty than your smile 🌷",
    button: "Okay Continue 👀",
    bg: "from-pink-50 via-purple-50 to-rose-100",
    image: photo3,
  },
  {
    title: "Some Cute Moments 📸",
    subtitle: "Too much cuteness ahead ✨",
    button: "Ab Thoda Music 🎶",
    bg: "from-pink-50 via-rose-100 to-fuchsia-50",
    photos: [photo1,photo2,photo3,photo4,photo5,photo6,photo7,photo8,photo9,photo10],
  },

  {
    title: "Music + You = Perfect 🎸",
    subtitle: "Your vibe feels like a peaceful song 🌸",
    button: "One Last Thing 🥺",
    bg: "from-pink-50 via-rose-100 to-pink-100",
    textColor: "text-indigo-600",
    subtitleColor: "text-pink-500",
    video: video,
  },

  {
    title: "Hope Tumhe Ye Chota Sa Effort Pasand Aaya Ho ✨",
    subtitle: "",
    text: "",
    button: "Final Page 🌷",
    bg: "from-pink-50 via-pink-100 to-rose-200",
    textColor: "text-rose-700",
    subtitleColor: "text-pink-500",
    image: photo8,
  },

  {
    title: "Will You Be My Friend? 🌸🤍",
    button: "💌",
    bg: "from-pink-50 via-rose-50 to-fuchsia-100",
    image: photo5,
  },
];

  export default function CrushWebsite() {
  const [page, setPage] = useState(0);
  useEffect(() => {
  window.scrollTo(0, 0);
  }, [page]);
  const [response, setResponse] = useState("");
  const [celebrate, setCelebrate] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [showNotice, setShowNotice] = useState(true);

  const current = pages[page];

      useEffect(() => {
        const checkTouch = () => {
        setIsTouchDevice(
        window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
        );
        };

        checkTouch();
      }, []);

     return (
  <>
    {showNotice && (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-md px-4 py-4">
        <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-[30px] p-6 sm:p-8 text-center shadow-2xl border border-pink-200">

          <button
            onClick={() => setShowNotice(false)}
            className="absolute top-4 right-5 text-pink-500 text-2xl font-bold"
          >
            ✕
          </button>

          <h2 className="text-3xl font-bold text-pink-500 mb-6">
            🌷 Just A Small Note 🌷
          </h2>

          <div className="mt-6 space-y-4 text-left">

  <div className="bg-pink-50 p-4 rounded-2xl shadow-sm">
    <p className="font-semibold text-pink-600">
      🌸 Hello Sehat,
    </p>
  </div>

  <div className="bg-white p-4 rounded-2xl border border-pink-100 shadow-sm">
    <p className="font-medium text-gray-700">
      Aaj kal log itna scroll karte hain ki kisi cheez ke liye do minute rukna bhi kaafi rare ho gaya hai.
    </p>
  </div>

  <div className="bg-pink-50 p-4 rounded-2xl shadow-sm">
    <p className="font-medium text-gray-700">
      Isliye agar tum yahan tak aa gayi ho, to sabse pehle — thank you. ✨
    </p>
  </div>

  <div className="bg-white p-4 rounded-2xl border border-pink-100 shadow-sm">
    <p className="font-medium text-gray-700">
      Aage jo bhi hai, wo bas thodi si creativity, thoda sa effort, aur thodi si randomness ka combination hai. 😄
    </p>
  </div>

  <div className="bg-pink-50 p-4 rounded-2xl shadow-sm">
    <p className="font-medium text-gray-700">
      Koi hidden meaning nahi, koi pressure nahi, aur koi expectations bhi nahi.
    </p>
  </div>

  <div className="bg-white p-4 rounded-2xl border border-pink-100 shadow-sm">
    <p className="font-medium text-gray-700">
      Bas itna sa hope hai ki is chhoti si website ko explore karte waqt tumhare face par ek smile zaroor aaye. 🌸
    </p>
  </div>

  <div className="bg-pink-50 p-4 rounded-2xl shadow-sm">
    <p className="font-bold text-pink-600">
      Aur agar kisi point par tumne "ye actually cute tha" soch liya, to samajh lena ki website apna kaam kar chuki hai. 🤍
    </p>
  </div>

  <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-4 rounded-2xl shadow-sm">
    <p className="font-bold text-pink-700">
      ✨ Now, enjoy the journey ahead ✨
    </p>
  </div>

</div>

          <button
            onClick={() => setShowNotice(false)}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full shadow-lg"
          >
            Continue 🌸
          </button>

        </div>
      </div>
    )}

    <div
      className={`min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden relative bg-gradient-to-br ${current.bg}`}
      style={{
        backgroundPosition: `${mouse.x / 50}px ${mouse.y / 50}px`,
      }}
    >

      {/* Dreamy Blur Lights */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-pink-300/30 rounded-full blur-3xl animate-pulse" />

          <div className="absolute bottom-[-100px] right-[-60px] w-80 h-80 bg-rose-300/20 rounded-full blur-3xl animate-pulse" />

          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-200/20 rounded-full blur-[120px]" />
        
          <div className="absolute top-[20%] right-[20%] w-60 h-60 bg-pink-200/20 rounded-full blur-[100px] animate-bounce" />

          <div className="absolute bottom-[15%] left-[10%] w-52 h-52 bg-rose-200/20 rounded-full blur-[90px] animate-pulse" />

        </div>

        {!isTouchDevice && mouse.x !== 0 && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
          left: mouse.x - 150,
          top: mouse.y - 150,
          }}
        >
        <div className="w-72 h-72 rounded-full bg-pink-500 opacity-40 blur-[120px]" />
        </div>
        )}

      {celebrate && <Confetti />}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute text-pink-300 animate-pulse"
        style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${15 + Math.random() * 20}px`,
        animationDuration: `${3 + Math.random() * 5}s`,
        }}
      >
      🌸
      </div>
    ))}

    </div>

      {/* Floating Teddy Backgrounds */}

<img
  src={teddy}
  alt=""
  onTouchStart={() => {
    setTimeout(() => {
      alert("Long press detected… teddy officially yours now ✨");
    }, 600);
  }}
  className="absolute top-10 left-4 w-12 sm:w-20 opacity-20 rotate-[-15deg] animate-pulse"
/>

<img
  src={guitar}
  alt=""
  className="absolute top-16 left-25 w-10 sm:w-14 opacity-30 rotate-[-15deg] animate-bounce pointer-events-none"
/>

<img
  src={teddy}
  alt=""
  className="absolute top-32 right-6 w-10 sm:w-16 opacity-20 rotate-[10deg] animate-bounce pointer-events-none"
/>

<img
  src={teddy}
  alt=""
  className="absolute bottom-20 left-10 w-14 sm:w-24 opacity-20 rotate-[12deg] animate-pulse pointer-events-none"
/>

<img
  src={teddy}
  alt=""
  className="absolute bottom-10 right-4 w-12 sm:w-20 opacity-20 rotate-[-10deg] animate-bounce pointer-events-none"
/>

<img
  src={guitar}
  alt=""
  className="absolute bottom-8 right-25 w-10 sm:w-14 opacity-30 rotate-[-15deg] animate-bounce pointer-events-none"
/>

<img
  src={teddy}
  alt=""
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 sm:w-40 opacity-10 blur-sm pointer-events-none"
/>
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -30 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.03,
            y: -10,
            rotateX: 2,
            rotateY: 2,
          }}
          className="relative overflow-hidden w-full max-w-4xl bg-white/60 backdrop-blur-2xl border border-pink-200 rounded-[40px] p-6 md:p-10 text-center shadow-2xl transition-all duration-500 before:absolute before:inset-0 before:bg-white/10 before:rounded-[40px] before:opacity-0 hover:before:opacity-100 before:transition before:duration-500 before:pointer-events-none"
        >
          <TypeAnimation
            sequence={[current.title]}
            wrapper="h1"
            speed={50}
            cursor={false}
            className="text-4xl md:text-6xl font-extrabold text-pink-500 drop-shadow-[0_0_25px_rgba(255,105,180,0.9)]"
            repeat={0}
          />

          {current.subtitle && (
            <p className="mt-4 text-gray-700">{current.subtitle}</p>
          )}

          {current.text && (
            <p className="mt-6 whitespace-pre-line text-pink-600">
              {current.text}
            </p>
          )}

          {current.image && (
            <div
              className="mt-8 flex justify-center"
              style={{ perspective: "1000px" }}
            >
            <img
              src={current.image}
              className="w-full max-w-md rounded-[35px] object-cover object-center shadow-2xl brightness-105 contrast-110 saturate-110 transition-all duration-700 ease-out hover:scale-[1.04] hover:-translate-y-2 hover:rotate-[1deg] hover:shadow-[0_20px_60px_rgba(255,105,180,0.35)]"
            />
            </div>
          )}

          {current.photos && (
  <div className="relative w-full h-[380px] sm:h-[650px] mt-10 scale-[0.85] sm:scale-100 origin-top">

    {current.photos.map((p, i) => {
      const positions = [
        "top-0 left-2 rotate-[-8deg]",
        "top-10 right-2 rotate-[6deg]",
        "top-40 left-10 rotate-[8deg]",
        "top-52 right-8 rotate-[-6deg]",
        "top-24 left-1/3 rotate-[10deg]",
        "bottom-16 left-4 rotate-[-10deg]",
        "bottom-8 right-12 rotate-[7deg]",
        "bottom-24 left-1/2 rotate-[-7deg]",
        "top-72 left-20 rotate-[5deg]",
        "bottom-0 right-1/3 rotate-[-5deg]",
      ];

      const shapes = [
        "rounded-[30px]",
        "rounded-full",
        "rounded-[40px]",
        "rounded-[20px]",
        "rounded-[50%]",
      ];

      return (
        <img
          key={i}
          src={p}
          alt=""
          className={`absolute ${positions[i % positions.length]}
          w-24 h-32 sm:w-40 sm:h-52 object-cover
          ${shapes[i % shapes.length]}
          shadow-2xl border-4 border-white
          hover:scale-110 transition duration-500`}
        />
      );
    })}

    {/* Teddy Style Background */}
    <img
      src={photo5}
      alt=""
      className="absolute inset-0 m-auto w-32 sm:w-60 opacity-10 blur-sm scale-125"
    />

  </div>
)}

        {current.video && (
          <video
            autoPlay
            loop
            controls
            playsInline
            preload="auto"
            className="mt-8 w-full max-w-md mx-auto rounded-[25px] shadow-2xl"
          >
            <source src={current.video} type="video/mp4" />
          </video>
        )}

        

          {page !== pages.length - 1 ? (
            <button
              onClick={() => setPage(page + 1)}
              className="mt-10 px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-pink-300/50 hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              {current.button}
            </button>
          ) : (
            <div className="mt-10">
              <button
                onClick={() => {
  setResponse("yes");
  setCelebrate(true);
}}
                className="px-8 py-4 bg-white text-pink-500 rounded-full shadow-xl"
              >
                Yes 🌸
              </button>

      <button
      onClick={() => setResponse("no")}
    onMouseEnter={(e) => {
    const x = Math.random() * 40 - 20;
    const y = Math.random() * 20 - 10;

    e.target.style.transform = `translate(${x}px, ${y}px) scale(0.95)`;
    }}
    onMouseLeave={(e) => {
    e.target.style.transform = "translate(0px,0px) scale(1)";
    }}
    className="ml-4 px-8 py-4 bg-pink-100 text-pink-600 rounded-full shadow-xl transition-all duration-200"
    >
     No 👀
    </button>

              {response === "yes" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">

          <div className="bg-white rounded-[30px] p-8 text-center shadow-2xl animate-pulse max-w-sm border border-pink-300 shadow-pink-300/50">

            <h2 className="text-3xl font-bold text-pink-500">
              Thank You 💖
            </h2>

          <p className="mt-4 text-pink-400">
             You just made this moment extra special 🌸
          </p>

          </div>

        </div>
        )}

          {response === "no" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">

          <div className="bg-white rounded-[30px] p-8 text-center shadow-2xl animate-pulse max-w-sm border border-pink-300 shadow-pink-300/50">

            <h2 className="text-3xl font-bold text-pink-500">
             It’s Okay 🌷
            </h2>

              <p className="mt-4 text-pink-400">
                Respect always 💖
              </p>

          </div>

        </div>
      )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  </>
  );
}
