import TextButton from "./components/textButton/Textbutton";
import Button from "./components/button/button";
import ModalReg from "./components/modal/modal";
import { useState } from "react";

export default function Header({ active, onChange }) {
  const [modal, setModal] = useState(false);

  return (
    <div className="bigHeader">
      <div style={{ display: "flex" }}>
        <div className="smallHeader">
          <TextButton
            style={{marginLeft: "10px",  fontWeight: "lighter" }}
            onClick={() => onChange("about")}
            isActive={active === "about"}
          >
            О нас
          </TextButton>
          <TextButton
            style={{ fontWeight: "lighter" }}
            onClick={() => onChange("dairy")}
            isActive={active === "dairy"}
          >
            Дневник
          </TextButton>
          <TextButton
            style={{ fontWeight: "lighter" }}
            onClick={() => onChange("profile")}
            isActive={active === "profile"}
          >
            Профиль
          </TextButton>
          <TextButton
            style={{ fontWeight: "lighter", marginRight: "10px" }}
            onClick={() => onChange("selfImpr")}
            isActive={active === "selfImpr"}
          >
            Саморазвитие
          </TextButton>
        </div>
        <input type="text" className="search" placeholder="Поиск" />

        <Button
          style={{
            fontWeight: "lighter",
            marginLeft: "20px",
            width: "200px",
          }}
          onClick={() => setModal(true)}
        >
          Войти
        </Button>

        <ModalReg open={modal}>
          <Button
            style={{ height: "40px", float: "right" }}
            onClick={() => setModal(false)}
          >
            Close
          </Button>
          <h1>Кто будет пользоваться?</h1>

          <div style={{ display: "flex" }}>
            <Button
              style={{ marginTop: "30px", height: "228px", width: "351px" }}
            >
              Я ученик
            </Button>
            <div
              style={{
                flexDirection: "column",
                marginTop: "30px",
                display: "flex",
                width: "311px",
              }}
            >
              <Button
                style={{
                  marginBottom: "12px",
                  marginLeft: "20px",
                  height: "106px",
                  width: "310px",
                }}
              >
                Я учитель
              </Button>
              <Button
                style={{ marginLeft: "20px", width: "310px", height: "106px" }}
              >
                Я учитель
              </Button>
            </div>
          </div>
        </ModalReg>
        
        {/* <Button
          style={{
            backgroundColor: "#f6f6f6",
            marginLeft: "0.83vw",
            width: "3.3vw",
            heigh: "52px",
          }}
        >
          <img src="../src/images/Frame.png" />
        </Button> */}
      </div>
    </div>
  );
}
