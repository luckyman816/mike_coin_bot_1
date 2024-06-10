export default function Header() {
  return (
    <div className=" font-bold h-11" style={{display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #2F2F2F"}}>
        <div></div>
        <h1 style={{fontSize: "20px", color: "white", marginLeft: "20px"}}>Mike Token</h1>
        <img src="/image/list.png" alt="" width={25} height={25} style={{marginRight: "10px"}}/>
    </div>
  );
}
