import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowRecords } from "./components/ShowRecords";
import { EditRecord } from "./components/EditRecord";
import { NewRecord } from "./components/NewRecord";
import "./App.css";
import "alertifyjs/build/css/alertify.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const direccion = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
  const URL = `${direccion}/api/`;
  console.log(URL);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<ShowRecords url={URL} />} />
          <Route path="/admin/crear" element={<NewRecord url={URL} />} />
          <Route path="/admin/editar/:id" element={<EditRecord url={URL} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
