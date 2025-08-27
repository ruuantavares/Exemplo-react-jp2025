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
public 
    para arquivos não processados, que não precisa ser renderizado
    é acessivel direto pela url
src
assets
    passa pelo processo de renderização
    é importado por codigo
    na duvida, sempre usar o assets

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
Para usar Ternarios: 
ternarios seria tipo um IF, o '?' significa 'Se' e o ':' seria o 'else'
então
function Header( {titulo} ){ 
    return(
        <h1> {titulo ? 'passou algo' : 'não passou algo'} </h1>
    )
}