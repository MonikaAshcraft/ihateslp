import { pageNames } from "./data/pages";
import { Page } from "./page/Page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page page="default" />} />
        {pageNames.map((name) => (
          <Route key={name} path={name} element={<Page page={name} />} />
        ))}
      </Routes>
    </Router>
  );
};
