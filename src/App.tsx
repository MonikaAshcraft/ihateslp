import { pageNames } from "./data/pages";
import { Page } from "./page/Page";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <Routes>
        {pageNames.map((name) => (
          <Route key={name} path={name} element={<Page page={name} />} />
        ))}
        <Route path="/" element={<Page page="default" />} />
      </Routes>
    </Router>
  );
};
