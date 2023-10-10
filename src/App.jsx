import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowRecords } from "./components/ShowRecords";
import { EditRecord } from "./components/EditRecord";
function App() {
  const URL = "http://localhost:3000/";

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowRecords url={URL} />} />
          <Route path="/rFormWeb/create" element={<ShowRecords url={URL} />} />
          <Route path="/rFormWeb/edit/:id" element={<EditRecord url={URL} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
