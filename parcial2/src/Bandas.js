import Banda from "./Banda";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardImg from "react-bootstrap/esm/CardImg";


const { useEffect, useState } = require("react");

function Bandas () {

   const [bandas, setBandas] = useState([]);
   useEffect(()=>{
       const URL = "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
       fetch(URL).then(data => data.json()).then(data => {
           setBandas(data);
       })
   }, []);

   return(<div className="container mt-5" align="center">
      
   <h4>Lista de Bandas</h4>
     
   <div className="row">

     <div className="col-md-12">

       <table className="table table-bordered">
         <thead className="thead-dark">
           <tr>
             <th scope="col">#</th>
             <th scope="col">Nombre</th>
             <th scope="col">Pais</th>
             <th scope="col">Genero</th>
             <th scope="col">Fundacion</th>
           </tr>
         </thead> 
         <tbody>

         {bandas.map(banda => (

           <tr key={banda.id}>
             <td>{banda.id}</td>
             <td>{banda.name}</td>
             <td>{banda.country}</td>
             <td>{banda.genre}</td>
             <td>{banda.description}</td>
           </tr>

         ))}

         </tbody>

       </table>

     </div>

   </div>

     
 </div>
 


 

   )
}

export default Bandas;