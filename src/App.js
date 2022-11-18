import Header from "./components/Header";
import Cover from "./components/Cover";
import DeliveryProcess from "./components/DeliveryProcess";
import Menu from "./components/Menu";
import Addresses from "./components/Addresses";
import Footer from "./components/Footer";
import { GlobalStorage } from "./storage/global";

function App() {
  return (
    <GlobalStorage>
      <Header />
      <Cover />
      <DeliveryProcess />
      <Menu />
      <Addresses />
      <Footer />
    </GlobalStorage>
  );
}

export default App;
