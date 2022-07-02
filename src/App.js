import "./App.css"
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <div className="App">
        <div className="blurblue" style={{top: '-18%', right: '0'}}></div>
        <div className="blurpurple" style={{top: '36%', left: '-8rem'}}></div>
        <Profile/>
    </div>
  );
}

export default App;