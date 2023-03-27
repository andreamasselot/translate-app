import { useState } from "react";
import "./App.css";
import TextToTranslate from "./components/TextToTranslate";
import Languages from "./components/Languages";
import Text from "./components/Text";

function App() {
  const [originalText, setOriginalText] = useState("");
  const [translated, setTranslated] = useState("");

  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h1>Translate</h1>
        </div>
        <section className="translator-container">
          <div>
            <TextToTranslate
              originalText={originalText}
              setOriginalText={setOriginalText}
            />
            <Text translated={translated} setTranslated={setTranslated} />
            <div className="languages-buttons-container">
              <Languages language="French" />
              <Languages language="English" />
              <Languages language="Italian" />
              <Languages language="German" />
              <Languages language="Spanish" />
              <Languages language="Portuguese" />
              <Languages language="Swedish" />
              <Languages language="Norwegian" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
