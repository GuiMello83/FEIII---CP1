//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {


  return (
    <div className="card" style={{backgroundColor:props.data.cor}} >
     
        <h1>{props.data.name}</h1>
        <span> {props.data.cor}</span>
    
    </div>
   
  )
}



