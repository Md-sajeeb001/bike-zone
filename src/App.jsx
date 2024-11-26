import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div>
        <div className="container mx-auto px-5 sm:px-0 pt-4">
          <Header></Header>
          <div className="bg-slate-400 p-5 rounded-md my-7">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
