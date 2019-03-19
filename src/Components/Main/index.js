import React from "react";

const Main = () => (
  <main className="main">
    <section className="home-section bg-dark">
      <div className="home-content">
        <div className="home-text">
          <h1 className="title-home font-alt">Miguel Daipré</h1>
          <h2 className="desc-home">Desenvolvedor Full Stack</h2>
          <a href="/CurriculoMiguel.pdf" target="_blank">
            <button className="btn-class btn-download">Baixar Currículo</button>
          </a>
          <h5 className="em-breve">Site em breve. Aguarde</h5>
        </div>
      </div>
    </section>
  </main>
);

export default Main;
