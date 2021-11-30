import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomError } from "../data/errors";
import { isPageName, PageName, pages, sanitizePageName } from "../data/pages";
import "./NavForm.css";

type Props = {
  page: PageName;
};

export const NavForm = (props: Props) => {
  const { foreground, textColor } = pages[props.page];
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
      const sanitizedPageName = sanitizePageName(newPageName);
      if (isPageName(sanitizedPageName)) {
        navigate(`../${sanitizedPageName}`);
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
      <div
        className="page-formbox"
        style={{ backgroundColor: foreground, color: textColor }}
      >
        <span id="destination-input-label">Where do you want to go?</span>
        <br />
        <input
          aria-labelledby="destination-input-label"
          type="text"
          value={newPageName}
          onChange={handleNewPageNameChange}
          style={{ borderColor: textColor }}
        />
      </div>

      <span className={`page-warning ${showError ? "visible" : ""}`}>
        {errorMessage}
      </span>
    </form>
  );
};
