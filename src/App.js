import logo from "./logo.svg";
import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h3>We serve delicius food </h3> 
    </main>
  );
}

function Footer(props) {
  return (
    <footer>
      <h4>{props.year}</h4>
    </footer>
  );
}
function App() {

  return (
    <div className="App">
      <Header name="Awatef" />
      <Main/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
