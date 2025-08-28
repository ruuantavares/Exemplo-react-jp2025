import "./style.css";
import List from "../../components/List";
import Images from "../../components/Images";
import Form from "../../components/Form";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main>

        <Link to='/About'> 
           <button type="button">Navegar</button>
        </Link>

        <List /> {/* caso não tente trocar o titulo ex: List titulo={"outro titulo"}*/}
        <List titulo={"Aparece se escrever algo no titulo"} /> {/* olhar o README ternario*/}
        <Images />
        <Form />
      </main>
    </>
  );
}
export default Home;
