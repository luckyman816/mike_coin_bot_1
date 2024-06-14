export default function QuestList() {
  return (
    <div className="max-h-[50vh] max-sm:max-h-[50vh] overflow-auto">
      <div className="flex items-center h-36 max-sm:h-24 justify-between px-3 py-2 my-4 bg-[#363636] rounded-lg">
        <div className="flex justify-start items-center">
          <img src="image/bonus.png" alt="" className=" w-14 h-14" />
          <div className=" flex flex-col justify-center items-center">
            <div className="flex items-center justify-start text-white">
              Invite a friend
            </div>
            <div className="flex justify-start">
              <img src="image/dollar.png" alt="" className=" w-5 h-5" />
              <span className=" text-amber-400">+200</span>
              <span>for you and your friend</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-9 bg-indigo-600 text-white rounded-[20px] flex justify-center items-center mt-8">
        <span className="flex justify-center items-center">Go ahead</span>
      </div>
    </div>
  );
}
