import Button from "./components/button/button";
import ModalReg from "./components/modal/modal";
import Autho from "./authorization";
import SelfImpr from "./selfImpr";
import { useState } from "react";
import Profile from "./profile";
import Header from "./header";
import About from "./about";
import Admin from "./admin";
import Quiz from "./quiz";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("about");
  return (
    <>
      <Header active={page} onChange={(current) => setPage(current)} />
      {/* <Admin /> */}
      {page === "profile" && <Profile />}
      {page === "about" && <About />}
      {page === "selfImpr" && <SelfImpr />}

      {/* <Autho /> */}
      {/* <Quiz /> */}
    </>
  );
}
