import Form from "./components/Form";
import Home from "./components/Home";
import Respuesta from "./components/Respuesta";
import { useFirebaseApp } from "reactfire";
import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";

function App() {
  const firebase = useFirebaseApp();

  return (
    <BrowserRouter>
      <h1 className="header">- Challenge encuesta greydive -</h1>
      <div className="separador"></div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/formulario"} element={<Form />} />
        <Route path={"/respuesta/:id"} element={<Respuesta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
