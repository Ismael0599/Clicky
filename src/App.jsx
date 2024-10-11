import ItemListContainer from "./components/others/ItemListContainer";
import Layout from "./components/others/Layout";
import ItemDetailContainer from "./components/others/ItemDetailContainer";
import NotFound from "./components/others/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/Clicky" element={<ItemListContainer />} />
            <Route path="/Clicky/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/Clicky/detail/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
