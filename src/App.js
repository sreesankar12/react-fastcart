import React from "react";
import { BrowserRouter as Router, Route, Routes ,Switch } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import ColorSchemesExample from "./Nvabar";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Cart from "./components/Cart";
import Registration from "./components/Registration";

import { AuthProvider } from "./components/hooks/useAuth";

function App() {
  const user = JSON.parse(localStorage.getItem('fastcart-user'))
  return (
    <AuthProvider user={user}>
      <div className="App">
          <Router>
          <ColorSchemesExample    />
              <Routes>
                  {/* <Switch> */}

                      <Route exact path="/" element={< ProductList />} />
                      <Route exact path="/products/:id/" element={< ProductDetails />} component={ProductDetails} />
                      <Route path="/login" element={< Login />} />
                      <Route path="/register" element={< Registration/>} />
                      <Route path="/logout" element={< Logout />} />
                      <Route path="/cart" element={< Cart />} />

                {/* </Switch> */}
              </Routes>
          </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
