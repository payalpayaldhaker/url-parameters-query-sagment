import { useParams } from "react-router-dom";




export default function UserDetails() {

  let params =useParams();
  return (
    <>  
    
       <div>UserDetails.</div>
       <h1>{(params.userId)}</h1>
       
    </>
   
  )
}
