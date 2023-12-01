import { AppBar, Autocomplete, Box, InputAdornment, InputBase, TextField, Toolbar } from "@mui/material"
import Search from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link,Redirect} from 'react-router-dom'

const SearchField = (props) => {
  let  [regex,setRegex] = useState("")
  let [productList,setProductList] = useState([])
  let [search,setSearch] = useState(false)

  async function searchProducts(){
    if(regex==""){
      setProductList([])
      return
    }
    const data = await axios.get("http://localhost:9090/search/regex",{
      headers:{
        'Authorization':`Bearer ${localStorage.getItem('token')}`,  
        regex:regex}
    })
    /*
    const data = await fetch("http://localhost:9090/search/regex",{method:"GET",headers:{
      'Authorization':`Bearer ${localStorage.getItem('token')}`,  
      regex:regex}})*/
      
    if(data.status==200){
      const results = await data.data
      setProductList(results)
    }else{
      setProductList([])
    }
  }

  useEffect(()=>{searchProducts()},[regex])

  const handleChange = (event)=>{
    setRegex(event.target.value)
    //searchProducts()
  }
  const handleRedirect =(value)=>{
    //placeholder code
    props.history.replace("/search",{val:productList})
  }
  
  
  
  

  return (
    
    <div>
           
      
      <Autocomplete options={productList}
        freeSolo
        clearOnEscape
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            // Prevent's default 'Enter' behavior.
            event.defaultMuiPrevented = true;
            // your handler code
            console.log(event.target.value)
            handleRedirect()
            setSearch(true)
          }
        }}
        filterOptions={(a)=>a}
        getOptionLabel = {(option)=>option.name}
        renderOption={(props, option) => (
          <Link key={option.product_id} to={{pathname:"/display", state:{val:option}}}>
          <Box component="li" {...props} key={option.product_id}>
            
            {option.name}#{option.product_id} -- ${option.price}
          </Box>
          </Link>
        )}
        
        inputprops={{
        }}
        renderInput={(params) => <TextField 
        sx={{
          bgcolor:"#CCCCFF"
        }}
          {...params} 
          inputprops={{...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),}}
          
          variant="filled" 
          placeholder="search"
          hiddenLabel
          size="small"
          value={regex} 
          onChange={handleChange}
          
          />}
      />
           
            
    </div>
            
  )
}

export default SearchField