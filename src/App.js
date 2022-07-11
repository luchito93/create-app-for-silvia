import { Gallery } from "./components/gallery/gallery";
import Uno from "./ejercicios/uno";
import List from "./toolist/list";
import Registros from "./registro/registros";


function App() {
  return (
    <div className="bg-rose-200 ">
      <div className=" h-screen container mx-auto px-3">
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
        </header><div class="container mx-auto bg-center">
        {/*<Gallery /> <List/>*/} 
       </div>
       <div>
        <Uno/> 
       </div>
        <div class="p-6 max-w-sm mx-center bg-pink-600 rounded-xl">
      <Registros/>
      </div>
      </div>
    </div>
  );
}

export default App;
