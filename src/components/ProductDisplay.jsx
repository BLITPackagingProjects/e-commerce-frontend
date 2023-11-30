import Display from "./Display"
import { MDBRow, MDBBtn } from 'mdb-react-ui-kit';

const ProductDisplay = (props) => {
    console.log(props)
    const item=props.location.state.val
  return (
    <div>
        {item ?<Display key={item.product_id} val={item}/>:<Redirect to="/productlist"/>}
    </div>
  )
}

export default ProductDisplay