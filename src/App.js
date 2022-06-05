import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Shared/NotFound/NotFound';

// import Register from './Pages/Login/Register/Register';
import ProductDetails from './Pages/Home/ProductDetails/ProductDetails';
import Products from './Pages/Home/Products/Products';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ManageItem from './Pages/ManageItem/ManageItem';
import AddProduct from './Pages/AddProduct/AddProduct';
import Subscribe from './Pages/Home/Subscribe/Subscribe';
import About from './Pages/About/About';
import Contact from './Pages/Home/Contact/Contact';
import Inventories from './Pages/Home/Inventories/Inventories';
// import Blogs from './Pages/Blogs/Blogs';
// import Services from './Pages/Home/Services/Services';
// import Login from './Pages/Login/Login/Login';
// import CheckOut from './Pages/CheckOut';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/inventory/:productId' element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>
        }></Route>
        <Route path='/manageitems' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        <Route path='/inventories' element={
          <RequireAuth>
            <Inventories></Inventories>
          </RequireAuth>
        }></Route>
        {/* <Route path='/product/:productId' element={<ServiceDetail></ServiceDetail>}></Route>
        
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/products' element={<Services></Services>}></Route>
        
        
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route> */}
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;