export default function Profile() {
  const yourname = "Рамазанов Р.";
  const studentsnumber = 21;
  const gradepref = "-а";
  const yourgrade = 8;
  const timeUntilClass = 19;

  return (
    <>
      <div style={{ width: "90vw", display: "flex", padding: "4.5rem" }}>
        <div
          className="pfp"
          style={{
            backgroundColor: "#305cde",
            borderRadius: "30px",
            height: "150px",
            width: "150px",
          }}
        ></div>
        <div style={{}}>
          <h1 style={{ marginLeft: "50px" }}>{yourname}</h1>
          <h3
            style={{
              fontWeight: "lighter",
              marginLeft: "50px",
              color: "#636363",
            }}
          >
            Ваш класс: {yourgrade}
            {gradepref}
          </h3>
        </div>
        <div
          style={{
            backgroundColor: "#F7F7F7",
            borderRadius: "30px",
            marginLeft: "20vw",
            height: "150px",
            width: "250px",
          }}
        > <h1 style={{margin: "1rem"}}>Мой класс</h1> <h3 
          style={{
          fontWeight: "lighter",
          margin: "1rem",
          color:"#636363"
          }}
          >
            {studentsnumber} ученик</h3></div>
          <div 
          style={{
            backgroundColor: "#F7F7F7",
            borderRadius: "30px",
            marginLeft: "20px",
            height: "150px",
            width: "400px",}}
            >
            <h1 style={{margin: "1rem"}}>Расписание</h1><h3 
            style={{
            fontWeight: "lighter",
            margin: "1rem",
            color:"#636363"
            }}
            >До следующего урока осталось {timeUntilClass} минут</h3></div>
      </div>
      <div style={{ width: "90vw", display: "flex", paddingLeft: "4.5rem" }}>
      <div
          className="pfp"
          style={{
            backgroundColor: "#F7F7F7",
            borderRadius: "30px",
            height: "150px",
            width: "300px",
          }}
        > <h2 style={{padding: "1rem"}}>Настройки</h2>
        </div>
        <div
          className="pfp"
          style={{
            marginLeft: "19vw",
            backgroundColor: "#f7f7f7",
            borderRadius: "30px",
            height: "150px",
            width: "250px",
          }}
        ><h1 style={{margin: "1rem"}}>Программа</h1>
        <h2 style={{
            fontWeight: "lighter",
            margin: "1rem",
            color:"#636363"
            }}>{12} предметов</h2>
        </div>
        <div
          className="pfp"
          style={{
            backgroundColor: "#f7f7f7",
            borderRadius: "30px",
            height: "150px",
            width: "250px",
            marginLeft:"20px"
          }}
        ><h1 style={{margin: "1rem"}}>{4.8}</h1> <h2 style={{
          fontWeight: "lighter",
          margin: "1rem",
          color:"#636363"
          }}>Средняя оценка</h2></div>
        <div
          className="pfp"
          style={{
            backgroundColor: "#f7f7f7",
            borderRadius: "30px",
            marginLeft:"20px",
            height: "150px",
            width: "250px",
          }}
        ><h1 style={{margin: "1rem"}}>Курсы</h1> <h2 style={{
          fontWeight: "lighter",
          margin: "1rem",
          color:"#636363"
          }}>{4} добавлено</h2></div>
        </div>
    </>
  );
}
