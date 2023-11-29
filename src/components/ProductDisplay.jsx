import Display from "./Display"

const ProductDisplay = (props) => {
    const item=props.location.state.val
  return (
    <Display key={item.product_id} val={item}/>
  )
}

export default ProductDisplay