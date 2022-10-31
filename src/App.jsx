import { useState } from "react";
import Aside from "./components/aside/Aside";
import IconButton from "./reusable/buttons/IconButton/IconButton";
import "./App.css";

function App() {
    const [asideIsOpen, setAsideIsOpen] = useState();
    function toggleAside() {
        setAsideIsOpen(!setAsideIsOpen);
        console.log(asideIsOpen);
    }

    function openAside() {
        setAsideIsOpen(true);
    }

    return (
      <div className="App">
        <div className="container">
            <div
                className={
                    asideIsOpen
                        ? "aside-container"
                        : "aside-container aside-container-disabled"
                }
            >
                <IconButton
                    iconClass={`aside-container__button ${
                        asideIsOpen
                            ? "fa-solid fa-angles-left"
                            : "fa-angles-right"
                    }`}
                    handleClick={() => toggleAside()}
                />
                <Aside asideIsOpen={asideIsOpen}/>
            </div>
            <div className="main-container">
            </div>
        </div>
        </div>
    );
}

export default App;
