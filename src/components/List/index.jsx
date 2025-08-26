import "./style.css";

function List({ titulo, exibirPrimeiraLista }) {
  return (
    <section>
      <h2>{titulo}</h2>
      {exibirPrimeiraLista ? <>exibirPrimeiraLista</> : null}
      <div>
        <h3>Lista não ordenada (ul)</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>

      <h3>Lista ordenada (ol)</h3>
      <ol>
        <li>Primeiro item</li>
        <li>Segundo item</li>
        <li>Terceiro item</li>
      </ol>
    </section>
  );
}
export default List;
