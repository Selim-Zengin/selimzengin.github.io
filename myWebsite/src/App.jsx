import "./App.css";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import AttachEmailSharpIcon from "@mui/icons-material/AttachEmailSharp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const App = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".element", {
      duration: 1000,
      distance: "0px",
      origin: "right",
    });
  }, []);

  return (
    <>
      <section id="anasayfa">
        <nav
          className="navbar navbar-expand-md element"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 999,
            backgroundColor: "black",
            height: 90,
          }}
        >
          <div className="container-fluid">
            <a className="navbar-brand " href="#">
              <img
                src="navbarIcan.png"
                alt="Logo"
                width="50"
                height="24"
                className="d-inline-block align-text-top "
              />
            </a>
            <div className="ml-auto">
              <button
                className="navbar-toggler navbar-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ backgroundColor: "white" }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div></div>
              <ul className="navbar-nav ">
                <li className="nav-item  ml-auto">
                  <a
                    className="nav-link mx-3"
                    href="#anasayfa"
                    style={{ color: "white" }}
                  >
                    Anasayfa
                  </a>
                </li>
                <li className="nav-item  ml-auto">
                  <a
                    className="nav-link mx-3"
                    href="#hakkimda"
                    style={{ color: "white" }}
                  >
                    Hakkımda
                  </a>
                </li>
                <li className="nav-item  ml-auto">
                  <a
                    className="nav-link mx-3"
                    href="#beceri"
                    style={{ color: "white" }}
                  >
                    Beceriler
                  </a>
                </li>
                <li className="nav-item  ml-auto">
                  <a
                    className="nav-link mx-3"
                    href="#iletisim element"
                    style={{ color: "white" }}
                  >
                    İletişim
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="d-flex justify-content-center p-0 element">
          <img
            src="resim1.png"
            className="img-fluid"
            alt="Selim Zengin"
            style={{
              marginTop: 90,
              objectFit: "cover",
              height: "540px",
              width: "100%",
            }}
          />
        </div>

        <br />

        <div
          className="aaa card mb-3 col-md-2 offset-md-2 element"
          style={{ width: 1040, border: "none", boxShadow: "none" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="resim2.png"
                className="resim img-fluid rounded-circle"
                alt="Selim Zengin"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <br />

                <h1 className="yazi card-title" style={{ marginLeft: 25 }}>
                  SELİM ZENGİN
                </h1>
                <h1 className="yazi card-title" style={{ marginLeft: 25 }}>
                  Front-End Developer
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <hr />
      <br />
      <br />
      <section id="hakkimda">
        <br />
        <br />
        <br />

        <div className="card container element" style={{ width: "68rem" }}>
          <div className="card-body">
            <h1 className="card-title">Hakkımda</h1>
            <p className="card-text" style={{ fontSize: 20 }}>
              2000 yılında İstanbul/Sultangazi'de doğdum ilkokul eğitimimi
              Orhangazi İlkokulunda aldım, ortaokul eğitimimide Orhangazi
              Ortaokulunda tamamladım, lise eğitimimide Bayrampaşa Özel Okulunda
              tamaladım. Çocukluğumdan beri bilgisayarlarla ilgilendim ilk
              bilgisayarla 7 yaşında tanıştım o zamandan beri bilgisayarlar özel
              ilgi alanım oldu, liseden beri hep yazılıma merakım vardı bu
              yüzden yazılım ile ilgili bir bölüm okumak istedim ve liseyi
              bitirdikten sonra Burdur Memhmet Akif Ersoy Üniversitesinde
              Bilgisayar Programcılığı bölümünü okudum 2023 yılında mezun oldum.
              Hakkımda detaylı bilgi için Cv'mi inceleyebilirsiniz
            </p>
            <a href="#" className="btn btn-primadry">
              CV'mi İndirmek İçin Tıklayın
            </a>
          </div>
        </div>
      </section>
      <br />
      <br />

      <div className="card text-center element">
        <div className="card-body">
          <h1 style={{ fontSize: 50 }}>Hobilerim</h1>
        </div>
      </div>
      <div className="container text-center element">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 m-5">
          <div className="col">
            <div className="card" style={{ width: 450 }}>
              <h5 className="card-title">Video Oyunları</h5>
              <img
                src="hobiOyun.jpg"
                className="card-img-top rounded-circle"
                alt="..."
                style={{ height: 280 }}
              />
              <div className="card-body"></div>
            </div>
          </div>
          <div className="col">
            {" "}
            <div className="col">
              <div className="card" style={{ width: 450 }}>
                <h5 className="card-title">Şarkı Dinlemek</h5>
                <img
                  src="hobiSarki.jpg"
                  className="card-img-top rounded-circle"
                  alt="..."
                  style={{ height: 280 }}
                />
                <div className="card-body"></div>
              </div>
            </div>
          </div>
          <div className="col">
            {" "}
            <div className="col">
              <div className="card" style={{ width: 450 }}>
                <h5 className="card-title">Yürüyüş Yapmak</h5>
                <img
                  src="hobiYuruyus.jpg"
                  className="card-img-top rounded-circle"
                  alt="..."
                  style={{ height: 280 }}
                />
                <div className="card-body"></div>
              </div>
            </div>
          </div>
          <div className=" col">
            {" "}
            <div className="col">
              <div className="film card" style={{ width: 450 }}>
                <h5 className=" card-title">Film & Dizi İzlemek</h5>
                <img
                  src="hobiFilm.jpg"
                  className=" card-img-top rounded-circle"
                  alt="..."
                  style={{ height: 280 }}
                />
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />

      <section id="beceri">
        <br />
        <br />
        <br />
        <br />
        <h1
          className="container element"
          style={{ textAlign: "center", fontSize: 50 }}
        >
          Beceriler
        </h1>
        <br />
        <br />
        <br />
        <br />
        <div style={{ width: "70%" }} className="container">
          <p style={{ fontSize: 25 }} className="element">
            Front-End Developer
          </p>
          <div
            className="progress element"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: 25 }}
          >
            <div className="progress-bar bg-dark" style={{ width: "50%" }}>
              {" "}
              <p style={{ fontSize: 20, marginTop: 13 }}>50%</p>{" "}
            </div>
          </div>
          <p style={{ fontSize: 25 }} className="element">
            İleri Seviye Bilgisayar Kullanımı
          </p>
          <div
            className="progress element"
            role="progressbar"
            aria-label="Info example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: 25 }}
          >
            <div className="progress-bar bg-dark" style={{ width: "85%" }}>
              <p style={{ fontSize: 20, marginTop: 13 }}>85%</p>
            </div>
          </div>
          <p style={{ fontSize: 25 }} className="element">
            Office Programları (Word, PowerPoint)
          </p>
          <div
            className="progress element"
            role="progressbar"
            aria-label="Warning example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: 25 }}
          >
            <div className="progress-bar bg-dark" style={{ width: "60%" }}>
              <p style={{ fontSize: 20, marginTop: 13 }}>60%</p>
            </div>
          </div>
          <p style={{ fontSize: 25 }} className="element">
            Android Developer
          </p>
          <div
            className="progress element"
            role="progressbar"
            aria-label="Danger example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: 25 }}
          >
            <div className="progress-bar bg-dark" style={{ width: "30%" }}>
              <p style={{ fontSize: 20, marginTop: 13 }}>30%</p>
            </div>
          </div>
        </div>

        <br />
        <br />
      </section>
      <hr />
      <br />
      <br />
      <section id="iletisim element">
        <br />
        <br />
        <br />
        <h1
          className="container element"
          style={{ textAlign: "center", fontSize: 50 }}
        >
          İletişim
        </h1>
        <br />
        <br />
        <br />
        <br />
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div className="col element">
              <div className="hover">
                <AddIcCallIcon
                  titleAccess="Telefon"
                  style={{ width: 70, height: 70, color: "green" }}
                />{" "}
                <p>0539 469 75 25</p>{" "}
              </div>
            </div>

            <div className="col element">
              <div className="hover">
                <AttachEmailSharpIcon
                  titleAccess="Mail"
                  style={{ width: 70, height: 70, color: "red" }}
                />{" "}
                <p>selimzzz321@hotmail.com</p>{" "}
              </div>
            </div>

            <div className="col element">
              <div className="hover">
                <a
                  title="Linkedin"
                  href="https://tr.linkedin.com/in/selim-zengin-b3920b266?trk=people-guest_people_search-card"
                  style={{ textDecoration: "none" }}
                >
                  <LinkedInIcon
                    style={{ width: 70, height: 70, color: "blue" }}
                  />
                  <p style={{ color: "black", textDecoration: "none" }}>
                    Selim Zengin
                  </p>
                </a>
              </div>
            </div>

            <div className="col element">
              <div className="hover">
                <a
                  title="GitHub"
                  href="https://github.com/Selim-Zengin"
                  style={{ textDecoration: "none" }}
                >
                  <GitHubIcon
                    style={{ width: 70, height: 70, color: "black" }}
                  />{" "}
                  <p style={{ color: "black", textDecoration: "none" }}>
                    Selim-Zengin
                  </p>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        style={{ width: "100%", backgroundColor: "black", height: 110 }}
        className="element"
      >
        <br />
        <p style={{ color: "white", textAlign: "center", fontSize: 25 }}>
          Selim Zengin | www.selimzengin.com
        </p>
      </div>

      {/* finish :) */}
    </>
  );
};

export default App;
