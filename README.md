# React + Vite

git clone "repo"
git code .
npm create vite@latest . --template react
select o framework "react"
select a variant "javascript"
npm install
npm run dev
=============================================
# Estruturas de pastas 
public/ 
    para arquivos não processados, que não precisa ser renderizado
    é acessivel direto pela url
src/
    -assets
    passa pelo processo de renderização
    é importado por codigo
    na duvida, sempre usar o assets
    
    -components/
                -Header
                    index.jsx
                    style.css
                -Footer
                    index.jsx
                    style.css
    -pages
         -About
            index.jsx

=============================================
# props para as functions

Na function:

function Header( {titulo} ){ 
    return(
        <header>
        <h1> {titulo ? titulo : 'Não passou nada'} </h1>
        </header>
    )
}
para trocar nomes do titulo por exemplo dos headers

no app.jsx:

function App(){ 
    <>
        <Header />
        <Header titulo={" Pagina sobre nós "} />
    
=========================================================
# usando Ternarios: 
ternarios seria tipo um IF, o '?' significa 'Se' e o ':' seria o 'else'
então
function Header( {titulo} ){ 
    return(
        <h1> {titulo ? 'passou algo' : 'não passou algo'} </h1>
    )
}
=========================================================
# instalando o router-dom: 
npm i react-router-dom

depois ir para main.jsx e colocar o app dentro do BrowserRouter :
 <BrowserRouter>
      <App />
</BrowserRouter>

No app jsx:

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  )
}

Devem ter os imports de onde vai querer navegar, ex:

import { Route, Routes } from "react-router-dom"
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

Criar um botão ou linkref para a navegação dentro do <Link to='o diretorio onde quer navegar'> <button> </button> </Link> :
        <Link to='/About'> 
           <button type="button">Navegar</button>
        </Link>

E na outra pagina onde vai navegar:

import { Link } from "react-router-dom";
import "./style.css";

function About() {
  return (
    <>
    <h1>Paginas Sobre</h1>

    <Link to='/'>Voltar</Link>
    
    </>
  )
}

======================================================================================================
