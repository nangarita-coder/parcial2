import { useParams } from "react-router-dom";
export default function Detail() {
 const params = useParams();
 return (
   <div>
     <h1>I am {params.bandaId}</h1>
   </div>
 );
}