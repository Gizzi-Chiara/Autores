import { Route, Routes } from "react-router-dom";
import TodosAutores from "./components/TodosAutores";
import NuevoAutor from "./components/NuevoAutor";
import ActualizarAutor from "./components/ActualizarAutor";

const App = () => {
  return(
    <div className="container">
      <h1>Autores</h1>
      
      <Routes>
        <Route path="/" exact element={<TodosAutores/>}>Nuevo Autor</Route>
        <Route path="/nuevo"  element={<NuevoAutor/>}>Nuevo Autor</Route>
        <Route path="/editar/:id" element={<ActualizarAutor/>}/>
      </Routes>
    </div>
  )
}

export default App;
