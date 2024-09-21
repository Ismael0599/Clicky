import Header from "./components/header/Header";
import ItemListContainer from "./components/others/ItemListContainer";

const App = () => { 
  return (
    <>
      <Header></Header>
      <ItemListContainer greeting="¡Bienvenido a Clicky!"></ItemListContainer>
    </>
  );
}

export default App;
