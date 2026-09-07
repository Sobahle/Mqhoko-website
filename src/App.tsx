import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./routes/index";
import Tree from "./routes/tree";
import Person from "./routes/person.$id";
import NotFound from "./routes/not-found";
import Diagram from "./routes/diagram";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/diagram" element={<Diagram />} />
        <Route path="/person/:id" element={<Person />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}