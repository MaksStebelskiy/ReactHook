
import { useState } from 'react'; 
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';
function 
App() {

  const [title, setTitle] = useState("Hello world!");
  const [products, setProducts] = useState([
    {id: 1, title: 'Телефон', price: 5000},
    {id: 2, title: 'Годинник', price: 1500},
    {id: 3, title: 'Мережевий адаптер', price: 899},
    {id: 4, title: 'Принтер', price: 6500},
    {id: 5, title: 'Мишка', price: 450}
    ]);

    const clickMe = () => {
      setTitle('Title is changed!');
      console.log("Clicked!");
    }

    const deleteProduct = (productId) => {
      const newProducts = products.filter(product => product.id !== productId);
      setProducts(newProducts);
    }


return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element =  {<ProductList products={ products } deleteProduct={deleteProduct} /> } >
          </Route>
          <Route path = '/about' element = {<About/>}></Route>
          <Route path ='/contact' element = {<Contact/>}></Route>
          <Route path = '/add' element = { <AddProduct/>} ></Route>
          <Route path = '/edit/:id' element = { <EditProduct/>} ></Route>
        </Routes>
      
      </BrowserRouter>      
    </div>
  );
}

export default App;
