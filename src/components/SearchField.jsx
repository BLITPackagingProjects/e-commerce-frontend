import { AppBar, Autocomplete, InputAdornment, InputBase, TextField, Toolbar } from "@mui/material"
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
    const results = await data.json()
    setProductList(results)
    console.log(regex,productList)
    setLoading(false)
  }


  const handleChange = (event)=>{
    setRegex(event.target.value)
    searchProducts()
  }
  return (
    
    <div>
            
      
      <TextField variant="filled" placeholder="search" value={regex} onChange={handleChange}
      InputProps={{
          startAdornment: (
              <InputAdornment position="start">
                  <Search/>
              </InputAdornment>
          ),
        }}
        />

          
    </div>
  )
}

export default SearchField