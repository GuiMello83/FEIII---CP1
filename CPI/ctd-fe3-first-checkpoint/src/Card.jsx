//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {

  return (
    <div className="card">
    <h1>{props.productData.name}</h1>
    <span> {props.productData.cor}</span>
</div>
  )
}



