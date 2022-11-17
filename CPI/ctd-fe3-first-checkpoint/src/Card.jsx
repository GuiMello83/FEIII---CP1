//Este componente deverá receber dados por Props e mostrar as Informações em Tela

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export function Cards (props) {


  return (
    <Card  component="span" >
      <CardContent>
    <div  style={{backgroundColor:props.data.cor}} >
     
        <h1>{props.data.name}</h1>
        <span> {props.data.cor}</span>
    </div>
    </CardContent>
     </Card>
  );




}
