import { dispatch, useSelector } from "../store";
import { updateEnergy, updateTap } from "../store/reducers/wallet";
import { useEffect, useState } from "react";
import Modal from "../component/modal";
export default function Boost() {
  const tokenState = useSelector((state) => state.wallet.user?.balance);
  const username_state = useSelector((state) => state.wallet.user?.username );
  const [token, setToken] = useState<number>(tokenState)
  const [username, setUsername] = useState<string>(username_state)
  useEffect(() => {
    setToken(tokenState)
    setUsername(username_state)
  }, [tokenState, username_state])
  const handleFullEnergy = () => {
    dispatch(updateEnergy(username, 1000))
    setIsModalOpen(false);
  }
  const handleMultiTap = () => {
    dispatch(updateTap(username, 2))
    setIsTapModalOpen(false);
  }
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleMouseClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [isTapModalOpen, setIsTapModalOpen] = useState<boolean>(false);
  const handleMouseTapClick = () => {
    setIsTapModalOpen(true);
  };
  const handleCloseTapModal = () => {
    setIsTapModalOpen(false);
  };
  return (
    <div className="Boost max-w-full text-white h-[75vh] max-sm:h-[82vh] mt-12">
      <div className="md:w-full h-[65vh] mx-auto flex flex-col justify-center ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl mb-3  max-w-[500px] mx-auto text-start text-white flex justify-center">
            Your Balance
          </h1>
          <div className="flex px-3 py-1 gap-5 text-white text-lg font-bold justify-center align-middle overflow-y-hidden">
            <img src="/image/dollar.png" alt="" className="w-10 h-10" />
            <h1 className="text-4xl">{token}</h1>
          </div>
        </div>
        <hr className="my-3 border-[#363636] border-1" />
        <div className="flex justify-start">
          <h1 className="text-white text-xl">Free daily boosters</h1>
        </div>
        <div
          className={`flex my-3 px-5 py-3 items-center bg-[#4d4d4c] rounded-[30px] hover:bg-[#3a3a3a]`}
          onClick={handleMouseClick}
        >
          <img src="/image/icon/lightning.svg" alt="" className="w-10 h-10" />
          <div className="flex flex-col">
            <h3 className="text-2xl text-white">Full energy</h3>
            <h3 className="text-xl text-[#a8a8a7]">6/6 available</h3>
          </div>
        </div>
        <div className="flex justify-start">
          <h1 className="text-white text-xl">Boosters</h1>
        </div>
        <div
          className={`flex my-3 px-5 py-3 items-center bg-[#4d4d4c] rounded-[30px] gap-2 hover:bg-[#3a3a3a]`}
          onClick={handleMouseTapClick}
        >
          <img src="/image/double-tap.png" alt="" className="w-10 h-10" />
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl text-white text-left">Multitap</h3>
            <div className="flex gap-3 align-middle">
              <img src="/image/dollar.png" alt="" className="w-5 h-5" />
              <h3>2K * 2M</h3>
            </div>
          </div>
        </div>
        <div
          className={`flex my-3 px-5 py-3 items-center bg-[#4d4d4c] rounded-[30px] gap-2 hover:bg-[#3a3a3a]`}
        >
          <img src="/image/battery.png" alt="" className="w-10 h-10" />
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl text-white text-left">Energy limit</h3>
            <div className="flex gap-3 align-middle">
              <img src="/image/dollar.png" alt="" className="w-5 h-5" />
              <h3>2K * 2M</h3>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="flex flex-col items-center align-middle gap-3">
          <img src="image/icon/lightning.svg" alt="" className=" w-12 h-12"/>
          <h1 className="text-2xl text-white">Full energy</h1>
          <p className=" text-sm text-white">Recharge your energy to the maximum and do another round of mining</p>
          <div className="flex">
            <img src="image/dollar.png" alt="" className=" w-14 h-14"/>
            <h1 className="text-white text-2xl">FREE</h1>
          </div>
          <div className="w-full h-9 bg-indigo-600 text-white rounded-[20px] flex justify-center items-center" onClick={handleFullEnergy}><span className="flex justify-center items-center">Go ahead</span></div>
        </div>
      </Modal>
      <Modal isOpen={isTapModalOpen} onClose={handleCloseTapModal}>
        <div className="flex flex-col items-center align-middle gap-3">
          <img src="image/icon/lightning.svg" alt="" className=" w-12 h-12"/>
          <h1 className="text-2xl text-white">Multi-Tap</h1>
          <p className=" text-sm text-white">Recharge your energy to the maximum and do another round of mining</p>
          <div className="flex">
            <img src="image/double-tap.png" alt="" className=" w-14 h-14"/>
            <h1 className="text-white text-2xl">FREE</h1>
          </div>
          <div className="w-full h-9 bg-indigo-600 text-white rounded-[20px] flex justify-center items-center" onClick={handleMultiTap}><span className="flex justify-center items-center">Go ahead</span></div>
        </div>
      </Modal>
    </div>
  );
}
