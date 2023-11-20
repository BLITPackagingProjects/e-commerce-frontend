import { AppBar, Autocomplete, Box, InputAdornment, InputBase, TextField, Toolbar } from "@mui/material"
import Search from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

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
    const data = await fetch("http://localhost:9090/search/regex",{method:"GET",headers:{regex:regex}})
    if(data.ok){
      const results = await data.json()
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

  
  return (
    
    <div>
            
      <Autocomplete options={productList}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.defaultMuiPrevented = true;
            
            
          }
        }}
        filterOptions={(a)=>a}
        getOptionLabel = {(option)=>option.name}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            
            {option.name} {option.price}
          </Box>
        )}
        
        InputProps={{
        }}
        renderInput={(params) => <TextField 
          {...params} 
          InputProps={{...params.InputProps,
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