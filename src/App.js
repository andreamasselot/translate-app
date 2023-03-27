import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Languages from "./components/Languages";
import Text from "./components/Text";

function App() {
  const [languages, setLanguages] = useState("");
  const [translated, setTranslated] = useState("");
  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h1>Translate</h1>
        </div>
        <section className="translator-container">
          <div>
            <Input />
            <Text text="" />
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
