import "./index.css";
import Container from "./Components/Container";
import { explorer } from "./Data/data";

export default function App() {
  return (
    <div className="App">
      <Container explorer={explorer} />
    </div>
  );
}
