import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomError } from "../data/errors";
import { isPageName } from "../data/pages";
import "./NavForm.css";

export const NavForm = () => {
  const navigate = useNavigate();
  const [newPageName, setNewPageName] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | JSX.Element>("");

  const handleNewPageNameChange = useCallback((e) => {
    setNewPageName(e.target.value);
    setShowError(false);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (isPageName(newPageName)) {
        navigate(`../${newPageName}`);
        window.scrollTo(0, 0);
        window.location.reload();
      } else {
        setErrorMessage(getRandomError());
        setShowError(true);
      }
    },
    [navigate, newPageName]
  );

  return (
    <form className="page-form" onSubmit={handleSubmit}>
      <div className="page-formbox">
        <span id="destination-input-label">Where do you want to go?</span>
        <br />
        <input
          aria-labelledby="destination-input-label"
          type="text"
          value={newPageName}
          onChange={handleNewPageNameChange}
        />
      </div>

      <span className={`page-warning ${showError ? "visible" : ""}`}>
        {errorMessage}
      </span>
    </form>
  );
};
