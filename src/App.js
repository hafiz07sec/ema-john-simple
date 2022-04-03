
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';



function App() {
  return (
    <div >

      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Shop />}> </Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/review" element={<Review />}></Route>
            <Route path="/inventory" element={<Inventory />}></Route>
            <Route path="/product/:productKey" element={<ProductDetail></ProductDetail>}> </Route>

            <Route path="*" element={<NotFound />} />
         
        </Routes>

      </BrowserRouter>







    </div>
  );
}

export default App;
