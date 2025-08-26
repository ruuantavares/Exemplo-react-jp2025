import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Images from "./components/Images";
import List from "./components/List";

function App() {
  return (
    <>
      {/* <!-- Cabeçalho --> */}
      <Header />
      {/* <!-- Conteudo da pagina --> */}
      <main>
        <List titulo={"Listas" }/>
        <Images />
        <Form />
      </main>
      {/* <!-- Rodapé --> */}
      <Footer />
    </>
  );
}

export default App;
