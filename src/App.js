import logo from "./logo.svg";
import "./App.css";
import ProductTab from "./component/ProductsTab";
import MsgBox from "./component/MsgBox";

function App() {
  return (
    <div>
      <MsgBox userName="Mayank Sharma" textColor="red" />
      <ProductTab />
    </div>
  );
}

export default App;
