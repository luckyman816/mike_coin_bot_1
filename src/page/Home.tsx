import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CountDate from "../component/CountDate";
import ProgressBar from "../component/ProgressBar";
import { useSelector } from "../store";
//import { insertWallet, updateWallet } from "../store/reducers/wallet";
function Home() {
  const tokenState = useSelector((state) => state.wallet.user?.balance);
  //const energyState = useSelector((state) => state.wallet.user?.energy);
  const [imgStatus, setImgStatus] = useState(false);
  /*useEffect(() => {
    if (address) {
      dispatch(insertWallet(address));
    }
  }, []);*/
  //useEffect(() => {
  //setToken(tokenState);
  //setRemainedEnergy(energyState);
  //}, [tokenState, energyState, address]);
  const [token, setToken] = useState<number>(tokenState);
  const [remainedEnergy, setRemainedEnergy] = useState<number>(1000);
  function formatNumberWithCommas(number: number, locale = "en-US") {
    return new Intl.NumberFormat(locale).format(number);
  }
  const bodyRef = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState<string>("+1");
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.random() * (event.clientX - rect.left);
    const y = Math.random() * (event.clientY - rect.top);

    const styleElement = document.createElement("style");
    document.head.appendChild(styleElement);

    styleElement.sheet &&
      styleElement.sheet.insertRule(
        "@keyframes fade-out-top-right {0% {opacity: 1; transform: translateY(0); } 100% {opacity: 0;transform: translateY(-100%);}}",
        0
      );

    const newDiv = document.createElement("div");
    newDiv.textContent = `${score}`;
    newDiv.style.backgroundImage = "url('image/dollar.png')";
    newDiv.style.backgroundRepeat = "no-repeat";
    newDiv.style.backgroundPosition = "center";
    newDiv.style.fontSize = "30px";
    newDiv.style.paddingLeft = "30px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    newDiv.style.backgroundSize = "cover";
    newDiv.style.width = "40px";
    newDiv.style.height = "40px";
    newDiv.style.position = "absolute";
    newDiv.style.left = `${x + 50}px`;
    newDiv.style.top = `${y}px`;
    newDiv.style.color = score == "+1" ? "#58E1E2" : "red";
    newDiv.className =
      "dynamic-div animate-fadeouttopright transform max-sm:text-3xl text-5xl font-bold transition not-selectable";

    bodyRef.current && bodyRef.current.appendChild(newDiv);
    const interval = setTimeout(() => newDiv && newDiv.remove(), 1000);

    return () => clearTimeout(interval);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainedEnergy((pre) =>
        pre == 999 ? 1000 : pre < 1000 ? pre + 1 : 1000
      );
    }, 21600);
    return () => clearInterval(interval);
  }, []);

  const handleTap = (event: React.MouseEvent<HTMLDivElement>) => {
    //if (!address) {
    //  toast.error("Please connect your wallet first");
    //  return;
    //}
    if (remainedEnergy > 0) {
      if (remainedEnergy < 500) {
        setScore("+2");
        setToken(token + 2);
        //dispatch(updateWallet(address, token + 2, remainedEnergy - 1));
      } else {
        setScore("+1");
        setToken(token + 1);
        //dispatch(updateWallet(address, token + 1, remainedEnergy - 1));
      }
      setRemainedEnergy(remainedEnergy - 1);
      handleClick(event);
    }
  };

  const handleMouseDown = () => {
    setImgStatus(true);
  };
  const handleMouseLeave = () => {
    setImgStatus(false);
  };
  console.log("imgStatus", imgStatus);

  return (
    <div className=" mt-16">
      <ToastContainer />
      <CountDate date={3} />
      <div
        id="mainWindow"
        className="relative mt-5 flex flex-col items-center justify-center w-full h-[60vh] mb-9"
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
            className="absolute z-10 left-0 top-[-50px]"
          />
          <div
            className={`relative bg-[url('/image/mikeToken.png')] rounded-full bg-cover z-50 w-[400px] h-[400px] max-sm:w-[280px] max-sm:h-[280px] z-10 ${
              remainedEnergy > 0
                ? "cursor-pointer"
                : "cursor-not-allowed opacity-50"
            } ${imgStatus ? " border-[5px]" : "border-0"}`}
            ref={bodyRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseLeave}
            onClick={handleTap}
          />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="flex justify-around w-full align-middle gap-5">
            <h3 className="text-2xl mb-2 text-white">
              <span className="text-3xl ">
                <img
                  src="/image/icon/lightning.svg"
                  alt="lightning"
                  className="w-6 h-6 inline"
                />
              </span>
              <span className="text-3xl text-white">{remainedEnergy}</span>{" "}
              /1000
            </h3>
            <ProgressBar value={remainedEnergy / 10} />
            <div className="flex justify-center align-middle">
              <Link to="/boost" className="flex">
                <img
                  src="/image/rocket.png"
                  alt="rocket"
                  className="w-8 h-8 inline"
                />
                <h3 className="text-3xl text-white">Boost</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
