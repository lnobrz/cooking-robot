import Header from "./components/Header";
import Cover from "./components/Cover";
import DeliveryProcess from "./components/DeliveryProcess";
import Menu from "./components/Menu";
import { CartStorage } from "./storage/cart";

function App() {
  return (
    <CartStorage>
      <Header />
      <Cover />
      <DeliveryProcess />
      <Menu />
    </CartStorage>
  );
}

export default App;
