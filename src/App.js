import "./styles/App.css";
import GlobalProvider from "./context/Provider";
import Container from "./views/Container";

function App() {
  return (
    <GlobalProvider>
      <Container />
    </GlobalProvider>
  );
}

export default App;
