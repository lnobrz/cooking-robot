import Header from "./components/Header";
import Cover from "./components/Cover";
import DeliveryProcess from "./components/DeliveryProcess";
import Menu from "./components/Menu";
import { GlobalStorage } from "./storage/global";

function App() {
  return (
    <GlobalStorage>
      <Header />
      <Cover />
      <DeliveryProcess />
      <Menu />
    </GlobalStorage>
  );
}

export default App;
