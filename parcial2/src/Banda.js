import Card from 'react-bootstrap/Card';

function Banda(props){
   return(
       <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
           <Card.Img style={{ height: '14rem' }}  variant="top" src={props.banda.foto} alt={props.banda.descripcion} />
           <Card.Body>
               <Card.Title>{props.banda.nombre}</Card.Title>
               <Card.Text>
                   {props.banda.descripcion}
               </Card.Text>
           </Card.Body>
       </Card>
   );
}

export default Banda;