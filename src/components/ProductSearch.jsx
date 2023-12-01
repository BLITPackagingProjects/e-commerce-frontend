
import Display from './Display';
import { MDBRow, MDBBtn } from 'mdb-react-ui-kit';
import {Redirect } from 'react-router-dom'

const ProductSearch = (props) => {
    console.log(props)
    let products = null
    try{
        products = props.location.state.val
    }catch(E){

    }
  return (
    <div>
        {products?
        <div>
      <MDBRow className='row-cols-1 row-cols-md-2 g-4'>

      {
        products.map((item)=>{
          return (
  
            <Display key={item.product_id} val={item}/>
            
            )
          })
          
        }
        </MDBRow>
        { localStorage.getItem("type")==2 ?
        <Link to={'/addproduct'}>
        <MDBBtn>Add product</MDBBtn>
        </Link>
        :null
        }
     
        </div>
        :<Redirect to="/productlist"/>
        }

    </div>
  )
}

export default ProductSearch