
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import { Route } from 'react-router-dom'
import Home from './component/Home'
import ProductDetails from './component/ProductDetails'
import ProductRegistrationForm from './component/ProductRegistrationForm'


function App() {
 

  return (
      <div>
         
       <Navbar/>
       <Route exact path="/" component={Home}></Route>
       <Route exact path="/product" component={ProductDetails}></Route>
       <Route exact path="/addProduct" component={ProductRegistrationForm}></Route>
      </div>
   
  )
}

export default App
