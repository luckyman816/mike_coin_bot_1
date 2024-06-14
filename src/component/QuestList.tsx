export default function QuestList() {
  return (
    <div className="max-h-[50vh] max-sm:max-h-[50vh] overflow-auto">
      <div className="flex items-center h-36 max-sm:h-24 justify-between px-3 py-2 my-4 bg-[#363636] rounded-lg">
        <div className="flex justify-start items-center">
          <img src="image/bonus.png" alt="" className=" w-14 h-14" />
          <div className=" flex flex-col justify-center items-center">
            <div className="flex justify-start items-start text-white font-bold">
              Invite a friend
            </div>
            <div className="flex justify-start ml-2">
              <img src="image/dollar.png" alt="" className=" w-5 h-5" />
              <span className=" text-amber-400">+200</span>
              <span>&nbsp;&nbsp;&nbsp;for you and your friend</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center h-36 max-sm:h-24 justify-between px-3 py-2 my-4 bg-[#363636] rounded-lg">
        <div className="flex justify-start items-center">
          <img src="image/bonus.png" alt="" className=" w-14 h-14" />
          <div className=" flex flex-col justify-center items-center">
            <div className="flex justify-start items-start text-white font-bold">
              Invite a friend with Telegram premium
            </div>
            <div className="flex justify-start ml-2">
              <img src="image/dollar.png" alt="" className=" w-5 h-5" />
              <span className=" text-amber-400">+500</span>
              <span>&nbsp;&nbsp;&nbsp;for you and your friend</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start">
        <h2 className="text-white text-sm">List of your friends</h2>
        <div className=" rounded-[20px] bg-[#525252]">
          <input type="text" className=" border-none bg-[#525252] text-sm"/>
        </div>
      </div>
      <div className="w-full h-24 bg-indigo-600 text-white rounded-[20px] flex justify-center items-center mt-8">
        <span className="flex justify-center items-center">Invite a friend</span>
        <img src="image/user.png" alt="" className=" w-4 h-4 bg-white"/>
      </div>
    </div>
  );
}
