import "./Loading.css";
const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
        <img src="/image/title.png" alt="" className=" w-[80%] h-auto"/>
      <div className="loadingspinner">
        <div
          id="square1"
          style={{
            backgroundImage: "url('image/mike_1.png')",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          id="square2"
          style={{
            backgroundImage: "url('image/mike_2.png')",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          id="square3"
          style={{
            backgroundImage: "url('image/mike_3.png')",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          id="square4"
          style={{
            backgroundImage: "url('image/mike_4.png')",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          id="square5"
          style={{
            backgroundImage: "url('image/mike_5.png')",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
