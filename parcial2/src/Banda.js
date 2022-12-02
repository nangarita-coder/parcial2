import Card from 'react-bootstrap/Card';

function Banda(props){
   return(
       <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
           <Card.Img style={{ height: '14rem' }}  variant="top" src={props.banda.img}  />
           <Card.Body>
               <Card.Title>{props.banda.name}</Card.Title>
               <Card.Text>
                   {props.banda.description}
               </Card.Text>
           </Card.Body>
       </Card>
   );
}

export default Banda;