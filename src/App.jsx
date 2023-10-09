import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowRecords } from "./components/ShowRecords";
function App() {
  const URL = "http://localhost:3000/";

  return (
    <>
      <ShowRecords url={URL} />
    </>
  )
}

export default App
