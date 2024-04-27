import "./style.css"
function Home() {
  return (
    <div className="containerPainelHome">
      <div className="titleTextHome">
        <h1 className="titleHome">Bem vindo ao meu portifólio</h1>
        <p className="textHome">
          Aqui você poderá conhecer um pouco sobre mi, meus projetos e minha
          carreira como desenvolvedor, espero que goste!
        </p>
      </div>
      <div className="imageHome"><img src="../../public/assets/computer.jpg" alt="" /></div>
    </div>
  );
}

export default Home;
