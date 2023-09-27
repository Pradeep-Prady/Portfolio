import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProjectDetails from "./Components/layouts/Portfolio/ProjectDetails";
import Home from "./Components/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Toaster />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
