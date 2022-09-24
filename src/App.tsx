import React ,{Suspense} from "react";
import  Home  from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Loadable from 'react-loadable';
import "./scss/app.scss";


const Cart  = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */'./pages/Cart'),
  loading: () => <div>Идёт загрузка корзины...</div>,
});
const FullPizza = React.lazy(()=> import(/* webpackChunkName: "FullPizza" */'./pages/FullPizza'))
const NotFound = React.lazy(()=> import(/* webpackChunkName: "NotFound" */'./pages/NotFound'))



function App() {
  return (
    
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home />} />
        <Route path="cart" 
        element={
        <Suspense fallback={ <div>Идёт загрузка корзины...</div>}> 
          <Cart />
        </Suspense>} />
        <Route path="pizza/:id" 
        element={
        <Suspense fallback={ <div>Идёт загрузка..</div>}>
          <FullPizza />
        </Suspense>} />

        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
   
  );
}

export default App;
