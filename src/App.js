import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <h1>Adopt Me!</h1>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
