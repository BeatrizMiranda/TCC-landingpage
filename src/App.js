import React from "react";
import "./css/styles.scss";
import laptop from "./assets/laptop.jpg";
// import logoText from "./assets/logo-text.png";
import logo from "./assets/logo.png";
import app_store from "./assets/app_store.svg";
import google_play from "./assets/google_play.svg";

function App() {
    return (
        <div>
            <header className="header relative">
                <div className="header absolute z-2 w-100">
                    <img src={logo} alt="Logo" width="80px" className="logo" />
                    <div className="downloadIcons">
                        <img
                            src={app_store}
                            alt="Faça Download do app na app store"
                            width="50px"
                        />
                        <img
                            src={google_play}
                            alt="Faça Download do app na google play"
                            width="50px"
                        />
                    </div>
                </div>
            </header>
            <div className="homeBanner fullscreen relative w-100">
                <div className="absolute top-0 rigth-0 w-100 h-100">
                    <div
                        className="w-110 h-100 homeBanner--image"
                        style={{ backgroundImage: `url(${laptop})` }}
                    ></div>
                </div>
                <div className="absolute top-0 left-0 h-100 blurBackground">
                    <h1 className="title">{`Connect<IF>`}</h1>
                    <form>
                        <div className="input-field">
                            <input
                                id="nome"
                                type="text"
                                className="validate"
                                placeholder="Nome"
                            />
                        </div>
                        <div className="input-field ">
                            <input
                                id="password"
                                type="password"
                                className="validate"
                                placeholder="Password"
                            />
                        </div>
                        <div className="input-field">
                            <input
                                id="email"
                                type="email"
                                placeholder="email"
                                className="validate"
                            />
                        </div>
                        <div className="input-field ">
                            <select>
                                <option value="" disabled selected>
                                    Selecione o seu curso
                                </option>
                                <option value="ADS">ADS</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
