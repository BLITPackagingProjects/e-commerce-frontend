import { AppBar, Autocomplete, Box, InputAdornment, InputBase, TextField, Toolbar } from "@mui/material"
import Search from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchField = () => {
  let [loading,setLoading] = useState(false)
  let  [regex,setRegex] = useState("")
  let [productList,setProductList] = useState([])

  async function searchProducts(){
    setLoading(true)
    if(regex==""){
      setProductList([])
      setLoading(false)
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
    setLoading(false)
  }

  useEffect(()=>{searchProducts()},[regex])

  const handleChange = (event)=>{
    setRegex(event.target.value)
    //searchProducts()
  }

  const handleRedirect =(value)=>{
    //placeholder code
    history.pushState({},"",`/home`)
  }
  
  
  
  

  return (
    

           
      <div>
      <Autocomplete options={productList}
        
        isOptionEqualToValue={(option,value)=>{if( value.id==option.id){handleRedirect(value);return true}else{return false}}}
        filterOptions={(a)=>a}
        getOptionLabel = {(option)=>option.name}
        renderOption={(props, option) => (
          <Box component="li" {...props} key={option.product_id}>
            
            {option.name}#{option.product_id} -- ${option.price}
          </Box>
        )}
        
        inputprops={{
        }}
        renderInput={(params) => <TextField 
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