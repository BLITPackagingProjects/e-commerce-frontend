// import '../Product.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCardSubTitle
} from 'mdb-react-ui-kit';
import { useState } from 'react';


const Product = (props) => {

  // const [product,setProduct] = useState([])
  // const [loading,setLoading] = useState(true)

  // async function fetchData() {
  //   const response = await fetch("http://localhost:9090/api/v1/product/id",{mode: 'no-cors'});
  //   console.log(response);
  //   const res = await response.json();
  //   setProduct(res) 
  //   setLoading(false) 
    
  // }

  //Deleting Product fucntion 
  // const onDelClick = async (url)=>{
  //   if(window.confirm("Are you sure to delete this product?")){
  //     try {
  //       const res = await fetch(url, {method: 'Delete'});
  //       console.log(res);
  //       if(!res.ok){
  //         throw new Error("Error while deleting a product")
  //       }
  //       await fetch();
  //     } catch (error) {
  //       console.error(error)
        
  //     }
  //   }
  // }

  //Delete data
//   const onDelClick = (id) => {
//     if (window.confirm("Are you sure?")) {

//         fetch('http://localhost:9090/api/v1/product/' + id,
//         {mode: 'no-cors'},
//             {
//                 method: 'DELETE',
//                 headers: {
//                     'Accept': 'application/json',
//                     'content-Type': 'application/json'
//                 }
//             })

//             .then(console.log("Deleted"))
//             .catch(err => console.log(err));
//     }
// };


// let onDelClick = async () => {
//   await fetch(`http://localhost:9090/api/v1/product/${props.val.id}`, {
//    method: "DELETE",
//   })
//   // history.push("/");
//  };

const [setProduct] = useState([])
    const [setLoading] = useState(true)
   

    async function fetchData() {
      const response = await fetch('http://localhost:9090/api/v1/product');
      const res = await response.json();
      setProduct(res) 
      setLoading(false) 
      
    }

    const onDelClick = async (url)=>{
      if(window.confirm("Are you sure to delete this product?")){
        try {
          const res = await fetch(url,{method: 'DELETE'});
          if(!res.ok){
            throw new Error("Error in deleting process")
          }
          await fetchData();
        } catch (error) {
          console.error(error)
          
        }
      }
    }
    
  return (
    <div >
      
      <MDBCard >  
      <MDBCardImage className='img' src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='imageName' /> 
      <MDBCardBody>
        <MDBCardTitle >{props.val.name}</MDBCardTitle>
        <MDBCardSubTitle>{props.val.price}</MDBCardSubTitle>
        <MDBCardSubTitle>{props.val.seller}</MDBCardSubTitle>
        <MDBCardText>{props.val.description}</MDBCardText>
        <MDBCardSubTitle>{props.val.quantity}</MDBCardSubTitle>
        <MDBBtn href='#update'>Update</MDBBtn>
        
        <MDBBtn onClick={()=>onDelClick('http://localhost:9090/api/v1/product/'+props.val.id)} href='#delete'>Delete</MDBBtn>

      </MDBCardBody>
    </MDBCard>

    </div>
  )
}

export default Product