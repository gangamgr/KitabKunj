// import "./App.css";
// import Home from "./Page/Home";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Layout from "./Layout/Layout";
// import About from "./Page/About";
// import New from "./Page/new";
// import Contact from "./Page/Contact";
// import Shop from "./Page/Shop";
// // import call from "./Page/Shop/index"

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/new" element={<New />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/shop" element={<Shop />} />
//           {/* <Route path="/shop" element={<call/>} /> */}
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;


// import "./App.css";
// import Home from "./Page/Home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Layout from "./Layout/Layout";
// import About from "./Page/About";

// import HomePage from './PageComponent/HomePage';

// import Contact from "./Page/Contact";
// import Shop from "./Page/Shop";
// // import CartPage from "./PageComponent/CartPage"; // Import your CartPage component
// import CartPage from "../src/PageComponent/CartPage"
// import { CartProvider } from "./PageComponent/CartContext"; // Adjust this path if necessary

// function App() {
//   return (
//     <Router>
//       <CartProvider>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
           
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path="/cart" element={<CartPage/>} /> {/* Add this line */}

//           </Routes>
//         </Layout>
//       </CartProvider>
//     </Router>
//   );
// }

// export default App;



import "./App.css";
import Home from "./Page/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Shop from "./Page/Shop";
import CartPage from "./PageComponent/CartPage"; // Import your CartPage component
import { CartProvider } from "./PageComponent/CartContext"; // Import CartContext to manage cart state
import LoginForm from "./Page/RegistrationandLogin/LoginForm";
import RegistrationForm from "./Page/RegistrationandLogin/RegistrationForm";
import PaymentForm from "./PageComponent/PaymentForm";

function App() {
  return (
    <Router>
      {/* Wrap the whole app with CartProvider to provide cart state */}
      <CartProvider>
        <Layout>
          <Routes>
            {/* Define the routes for the app */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/PaymentForm" element={<PaymentForm />} />
            <Route path="/cart" element={<CartPage />} /> {/* Cart page route */}
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
}

export default App;




