import Button from "./components/button/button";

const uroki = 3;

export default function about() {
  return (
    <div className="about">
      <div>
                <h1 style={{fontSize:"40px"}}> 
                  <span style={{color: "#F73D48"}}>Перемена</span>  - это приложение с 
                удобным и </h1>
                <h1 style={{fontSize:"40px"}}>быстрым доступом к полезной информации и </h1> 
                <h1 style={{fontSize:"40px"}}>механикам для школьников</h1>
      </div>
        <div style={{display: "flex"}}>
        <div className="kalendar"> <h3><span style={{color:"#F73D48", fontWeight:"lighter"}}>Сегодня {uroki} урока</span></h3>
        <h1 style={{fontSize:"20px"}}>Календарь занятий</h1>
        <Button 
        style={{
          backgroundColor:"#fff",
          color:"#000",
          width:"311px", 
          height:"44px", 
          textAlign:"center", 
          padding:"10px",
          fontWeight:"lighter", 
          fontSize:"16px"}}>
            
            </Button>
        <Button 
        style={{
          width:"311px", 
          height:"44px", 
          textAlign:"left", 
          padding:"10px",
          fontWeight:"lighter", 
          fontSize:"14px"}}>
            Посмотреть расписание
            </Button>
            <Button 
        style={{
          backgroundColor:"#fff",
          color:"#000",
          width:"311px", 
          height:"44px", 
          textAlign:"center", 
          padding:"10px",
          fontWeight:"lighter", 
          fontSize:"16px"}}>
            Добавить запись
            </Button></div>
        <div className="kalendar"></div>
        <div className="kalendar"></div>
        </div>
        </div>
  );
}
