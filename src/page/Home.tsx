import { useEffect, useState, useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CountDate from "../component/CountDate";
import ProgressBar from "../component/ProgressBar";
function Home() {
  const [token, setToken] = useState<number>(2000);
  const [remainedEnergy, setRemainedEnergy] = useState(500);
  function formatNumberWithCommas(number: number, locale = "en-US") {
    return new Intl.NumberFormat(locale).format(number);
  }
  const bodyRef = useRef<HTMLDivElement>(null);
  const coinRef = useRef<HTMLDivElement>(null);
  const insertCoinImage = () => {
    const mainwindow = document.getElementById("mainWindow");

    // Generate random position for the coin
    if (mainwindow !== null) {
      const x = Math.random() * mainwindow.offsetWidth;
      const y = Math.random() * mainwindow.offsetHeight;
      console.log("x,y")
      const styleElement = document.createElement("style");
      document.head.appendChild(styleElement);
      styleElement.sheet &&
        styleElement.sheet.insertRule(
          "@keyframes fade-out-top-right {0% {opacity: 1; transform: translateY(0); } 100% {opacity: 0;transform: translateY(-100%);}}",
          0
        );
      // Create the coin image element
      const coinImage = document.createElement("img");
      coinImage.src = "image/dollar.png"; // Update this path to your coin image
      coinImage.style.position = "absolute";
      coinImage.style.left = `${x}px`;
      coinImage.style.bottom = `${y}px`;
      coinImage.style.width = "30px";
      coinImage.style.height = "30px";
      coinImage.style.transform = `translate(${x}px, ${y}px)`;
      coinImage.className =
        "dynamic-div animate-fadeouttopright transform max-sm:text-3xl text-5xl font-bold transition not-selectable";

      coinRef.current && coinRef.current.appendChild(coinImage);
      const interval = setTimeout(() => coinImage && coinImage.remove(), 1000);

      return () => clearTimeout(interval);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const styleElement = document.createElement("style");
    document.head.appendChild(styleElement);

    styleElement.sheet &&
      styleElement.sheet.insertRule(
        "@keyframes fade-out-top-right {0% {opacity: 1; transform: translateY(0); } 100% {opacity: 0;transform: translateY(-100%);}}",
        0
      );

    const newDiv = document.createElement("div");
    newDiv.textContent = "+1";
    newDiv.style.position = "absolute";
    newDiv.style.left = `${x}px`;
    newDiv.style.top = `${y - 50}px`;
    newDiv.style.color = "rgb(0 170 255)";
    newDiv.className =
      "dynamic-div animate-fadeouttopright transform max-sm:text-3xl text-5xl font-bold transition not-selectable";

    bodyRef.current && bodyRef.current.appendChild(newDiv);
    const interval = setTimeout(() => newDiv && newDiv.remove(), 1000);

    return () => clearTimeout(interval);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainedEnergy((pre) =>
        pre == 499 ? 500 : pre < 500 ? pre + 1 : 500
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleTap = (event: React.MouseEvent<HTMLDivElement>) => {
    if (remainedEnergy > 0) {
      setRemainedEnergy(remainedEnergy - 1);
      setToken(token + 1);
      handleClick(event);
      insertCoinImage();
    }
  };
  const [imgStatus, setImgStatus] = useState(false);
  const handleMouseDown = () => {
    setImgStatus(true);
  };
  const handleMouseLeave = () => {
    setImgStatus(false);
  };
  console.log("imgStatus", imgStatus);

  return (
    <div>
      <ToastContainer />
      <CountDate date={3} />
      <div
        id="mainWindow"
        className="relative mt-10 flex flex-col items-center justify-center w-full h-[60vh] mb-9"
        ref={coinRef}
      >
        <div className="flex flex-col justify-center items-center mb-7">
          <h3 className="text-xl font-bold text-[#939392]">$GoXP balance</h3>
          <h1 className="text-5xl text-white">
            {formatNumberWithCommas(token)}
          </h1>
        </div>
        <div>
          <img
            src="/image/shape.png"
            alt=""
            className="absolute z-10 left-0 top-0"
          />
          <div
            className={`relative bg-[url('/image/mikeToken.png')] rounded-full bg-cover z-50 w-[400px] h-[400px] max-sm:w-[280px] max-sm:h-[280px] z-10 ${
              remainedEnergy > 0
                ? "cursor-pointer"
                : "cursor-not-allowed opacity-50"
            } ${imgStatus ? "opacity-80" : "opacity-100"}`}
            ref={bodyRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseLeave}
            onClick={handleTap}
          />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h3 className="text-2xl mb-2 text-white">
            <span className="text-3xl ">
              <img
                src="/image/icon/lightning.svg"
                alt="lightning"
                className="w-8 h-8 inline"
              />
            </span>
            <span className="text-3xl text-white">{remainedEnergy}</span> /500
          </h3>
          <ProgressBar value={remainedEnergy / 5} />
        </div>
      </div>
    </div>
  );
}

export default Home;
