import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayImages from "./components/DisplayImages";
import AddNewImage from "./components/AddNewImage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DisplayImages />} />
          <Route path="/add-new" element={<AddNewImage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
