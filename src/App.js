import { useState } from "react";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState("")
  const [translated, setTranslated] = useState("")
  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h1>Translate</h1>
        </div>
        <section className="translator-container">
          <div>
            <input type="text" name="original-text" id="original-text" placeholder="Enter your text ..."/>
            <textarea name="translated-text" id="translated-text" cols="30" rows="10"></textarea>
            <div className="languages-buttons-container">
              <button>French</button>
              <button>English</button>
              <button>Spanish</button>
              <button>German</button>
              <button>Portuguese</button>
              <button>Italian</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
