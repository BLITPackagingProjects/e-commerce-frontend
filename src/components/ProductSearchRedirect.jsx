import {Redirect } from 'react-router-dom'
const ProductSearchRedirect = (props) => {
  console.log(props)
  return (
    <Redirect to={{pathname:"/results", state:props.location.state}}/>
  )
}
export default ProductSearchRedirect