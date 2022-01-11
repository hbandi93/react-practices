import './App.css';
import Button from './Button'



function App() {
  let text = "Szia";
  const addDiv = () => {
    document.getElementById("root").insertAdjacentHTML("beforeend", "<div>This is a new div</div>");
  }

  return (
    <div className="App">
      <Button buttonText={text} onClick={addDiv} />
    </div>
  );
}

export default App;
