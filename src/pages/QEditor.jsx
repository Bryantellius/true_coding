/* eslint-disable eqeqeq */
import { useState } from "react";
import Editor from "../components/Editor";
import challenges from "../utils/challenges";
import { getGeneratedPageURL } from "../utils/editor";

let screenWidth = window.screenX;

window.addEventListener("resize", () => (screenWidth = window.screenX));

function QEditor() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [feedback, setFeedback] = useState("");
  const qa = challenges[currentIndex];
  // const prev = currentIndex !== 0 ? currentIndex - 1 : challenges.length - 1;
  // const next = currentIndex < challenges.length - 1 ? currentIndex + 1 : 0;
  const editorMode = "javascript";
  const [currentCode, setCurrentCode] = useState("// Start Here");
  const [url, setUrl] = useState(
    getGeneratedPageURL(
      {
        html: "",
        css: "",
        js: 'console.log("Here we go!")',
      },
      editorMode
    )
  );

  const run = (currentCode, html, css, javascript) => {
    setUrl(
      getGeneratedPageURL(
        {
          html,
          css,
          js: currentCode,
        },
        editorMode,
        qa
      )
    );
  };

  function resetIndicators(newIdx) {
    setCurrentCode("// Start Here");
    console.clear();
    setUrl(
      getGeneratedPageURL(
        {
          html: "",
          css: "",
          js: 'console.log("Here we go!")',
        },
        editorMode
      )
    );
    setShowFeedback(false);
    setFeedback("");
    setCurrentIndex(newIdx);
    setShowSidebar(false);
  }

  function toggleSidebar(e) {
    if (screenWidth <= 550) setShowSidebar(!showSidebar);
  }

  return (
    <div className="d-flex h-90vh">
      <button
        className="sidebar_icon pointer"
        aria-label="Toggle menu"
        onClick={() => toggleSidebar(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      {/* Sidebar */}
      <aside className={`container__sidebar my-1 ${showSidebar ? "show" : ""}`}>
        <p
          className={`text-end pointer p-1 ${showSidebar ? "" : "hidden"}`}
          onClick={() => toggleSidebar(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </p>
        <ul className="list-group-flush px-2">
          {challenges.map((q, idx) => (
            <li
              key={idx}
              className={`list-group-item side_item px-4 text-start ${
                currentIndex == idx ? "border-info border border-2" : ""
              }`}
              onClick={(e) => resetIndicators(idx)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              {q.displayQ()}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Column */}
      <main
        className="container__main d-flex flex-column justify-content-center align-items-center h-100"
        aria-live="polite"
      >
        <Editor
          run={run}
          q={qa}
          currentCode={currentCode}
          setCurrentCode={setCurrentCode}
        />
        <iframe
          id="editor_output"
          style={{ width: "100%" }}
          className="output-container"
          src={url}
          title="Editor Output"
        ></iframe>
        <div className="editor-button-panel bg-dark w-100">
          <button
            className="btn squared btn-success"
            aria-label="Run Code"
            onClick={() => run(currentCode)}
          >
            Run
          </button>
          <button
            className="btn squared btn-secondary"
            aria-label="Copy Code to Clipboard"
            onClick={() => navigator.clipboard.writeText(currentCode)}
          >
            Copy
          </button>
        </div>
      </main>
    </div>
  );
}

export default QEditor;
