// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from './components/Login'
// import Register from './components/Register';
// import NavBar from './components/NavBar';
// // import CounterComponent from './components/CounterComponent';
// // import { Provider } from 'react-redux';
// // import store from './redux/store';
// function App(){
//   return(
//     <Router>
//       <div>
//         <Routes>
//            <Route path='/' element={<Login/>}/>
//            <Route path='/Register' element={<Register />}/>
//            <Route path='/NavBar' element={<NavBar />}/>

//         </Routes>
        
//       </div>
//     </Router>
    
//   );
// }
// export default App;

// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Navbar } from "./components/navbar1";
// import { Shop } from "./pages/shop/shop";
// import { Contact } from "./pages/contact";
// import { Cart } from "./pages/cart/cart";
// import { ShopContextProvider } from "./context/shop-context";

// function App() {
//   return (
//     <div className="App">
//       <ShopContextProvider>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Shop />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </Router>
//       </ShopContextProvider>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import { Navbar1 } from './components/navbar1';
import { Shop } from './pages/shop/shop';
import { Contact } from './pages/contact/contact';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';
import ThankYou from './pages/cart/thankyou';
import { About } from './pages/about/about';

function App() {
  return (
    <Router>
      <div>
        {/* Routes for the first set of components */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/NavBar" element={<NavBar />} />
        </Routes>

        {/* Routes for the second set of components */}
        <ShopContextProvider>
          <Routes>
            <Route path="/shop" element={<>
              <Navbar1 />
              <Shop />
            </>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ShopContextProvider>
      </div>
    </Router>
  );
}

export default App;

