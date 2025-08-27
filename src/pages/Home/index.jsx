import "./style.css";
import Header from "../../components/Header";
import List from "../../components/List";
import Images from "../../components/Images";
import Form from "../../components/Form";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <main>
        <List /> {/* caso não tente trocar o titulo ex: List titulo={"outro titulo"}*/}
        <List titulo={"Aparece se escrever algo no titulo"} /> {/* olhar o README ternario*/}
        <Images />
        <Form />
      </main>
      <Footer />
    </>
  );
}
export default Home;
