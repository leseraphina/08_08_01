import { BrowserRouter, Route, Routes } from "react-router-dom";

// component
import Home from "./components/Home";
import Cart01 from "./components/Cart01"
import Cart02 from "./components/Cart02";
//  redux
import { Provider } from "react-redux";
import store from './store01';

export default function App() {
 return (
 <Provider store={store}>
  <BrowserRouter>
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart01" element={<Cart01 />} />
      <Route path="/cart02" element={<Cart02 />} />
    </Routes>
  </div>
  </BrowserRouter>
  </Provider>

 )
}
