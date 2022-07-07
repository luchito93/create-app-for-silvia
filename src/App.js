import { Gallery } from "./components/gallery/gallery";
import {Uno}  from "./ejercicios/uno";


function App() {
  return (
    <div className="bg-violet-800 ">
      <div className="bg-violet-800 h-screen container mx-auto px-3">
        <header className="App-header">
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
          <p>
            Edit <code>src/App.js</code> and save to reload misi test.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Gallery />
       <div>
        <Uno/>
       </div>
     
     
      </div>
    </div>
  );
}

export default App;
