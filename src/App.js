import React, { useState } from "react";
import "./css/styles.scss";
import background from "./assets/background.jpg";
import laptop from "./assets/laptop.jpg";
import logo from "./assets/logo.png";
import files from "./assets/files.svg";
import search from "./assets/search.svg";
import arrowUp from "./assets/arrowUp.svg";
import favorite from "./assets/favorite.svg";
import ourapp from "./assets/ourapp.png";
import app_store from "./assets/app_store.svg";
import google_play from "./assets/google_play.svg";
import Fade from "react-reveal/Fade";

function App() {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 150) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 150) {
            setShowScroll(false);
        }
    };

    window.addEventListener("scroll", checkScrollTop);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div
                className={`scrollTop ${showScroll ? "scroll" : "init"}`}
                onClick={scrollTop}
            >
                <img src={arrowUp} alt="Go to top of Page" width="50px" />
            </div>
            <header
                className={`header relative ${showScroll ? "scroll" : "init"}`}
            >
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
            <Fade>
                <div className="homeBanner fullscreen relative w-100">
                    <div className="absolute top-0 rigth-0 w-100 h-100">
                        <div
                            className="w-100 h-100 homeBanner--image"
                            style={{ backgroundImage: `url(${laptop})` }}
                        ></div>
                    </div>
                    <div className="absolute top-0 left-0 h-100 blurBackground">
                        <h1 className="title">{`Connect<IF>`}</h1>
                    </div>
                </div>
            </Fade>
            <div className="threeFeatures fullscreen w-100">
                <div className="w-100 tc">
                    <h2>Melhores Features</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                </div>
                <Fade>
                    <div className="threeFeatures--icons flex">
                        <div className="iconContainer">
                            <img
                                src={search}
                                alt="Pesquise seus orientadores"
                                className="icons"
                            />
                            <p>Encontre orientadores perfeitos para seu TCC</p>
                        </div>
                        <div className="iconContainer">
                            <img
                                src={files}
                                className="icons"
                                alt="Pesquise seus orientadores"
                            />
                            <p>Encontre orientadores perfeitos para seu TCC</p>
                        </div>
                        <div className="iconContainer">
                            <img
                                src={favorite}
                                alt="Informações de seu orientador"
                                className="icons"
                            />
                            <p>Tenha todas as informações de seu orientador</p>
                        </div>
                    </div>
                </Fade>
            </div>
            <div
                className="formback fullscreen w-100 h-100"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="formback--color">
                    <div className="o-100 flex">
                        <Fade left>
                            <div className="w-50 tc relative">
                                <img
                                    className="image-phone absolute"
                                    src={ourapp}
                                    alt="screenshot from app"
                                />
                            </div>
                        </Fade>
                        <div className="formContainer w-50 flex justify-center items-center flex-column">
                            <h2>Faça seu Cadastro</h2>
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
                                        placeholder="Senha"
                                    />
                                </div>
                                <div className="input-field">
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Email"
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
            </div>
            <footer>
                <div className="downloadIcons flex items-center justify-around">
                    <div className="flex items-center">
                        <img
                            src={app_store}
                            alt="Faça Download do app na app store"
                            width="50px"
                        />{" "}
                        Download na App Store
                    </div>
                    <div className="flex items-center">
                        <img
                            src={google_play}
                            alt="Faça Download do app na google play"
                            width="50px"
                        />
                        Download na Play Store
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;
