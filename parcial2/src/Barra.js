import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Barra() {
 return (
   <>
     <Navbar bg="dark" variant="dark">
       <Container>
         <Navbar.Brand href="/bandas">Bandas Musicales</Navbar.Brand>
       </Container>
     </Navbar>
   </>
 );
}

export default Barra;