import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowRecords } from "./components/ShowRecords";
import { EditRecord } from "./components/EditRecord";
import { NewRecord } from "./components/NewRecord";
import './App.css';
import 'alertifyjs/build/css/alertify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const URL = "http://localhost:3000/";

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowRecords url={URL} />} />
          <Route path="/rFormWeb/create" element={<NewRecord url={URL} />} />
          <Route path="/rFormWeb/edit/:id" element={<EditRecord url={URL} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
