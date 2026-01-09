import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConceptList from "./components/CoreConcept/CoreConceptList.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState("components");

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConceptList concepts={CORE_CONCEPTS} />
          </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleClick("components")}>Components</TabButton>
              <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
              <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
              <TabButton onSelect={() => handleClick("state")}>State</TabButton>
            </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          </section>
      </main>
    </div>
  );
}

export default App;
