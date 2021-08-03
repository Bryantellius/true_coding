/* eslint-disable eqeqeq */
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import logo from "./assets/TCLogoOnly.png";
import data from "./utils/data";

let screenWidth = window.screenX;

window.addEventListener("resize", () => (screenWidth = window.screenX));

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [feedback, setFeedback] = useState("");
  const qa = data[currentIndex];
  const prev = currentIndex !== 0 ? currentIndex - 1 : data.length - 1;
  const next = currentIndex < data.length - 1 ? currentIndex + 1 : 0;

  function checkAnswer(e) {
    e.preventDefault();
    const a = document.querySelector("#answer");
    setFeedback(qa.evaluateAnswer(a.value));
    setShowFeedback(true);
  }

  function resetIndicators(newIdx) {
    const a = document.querySelector("#answer");
    a.value = "";
    setShowFeedback(false);
    setFeedback("");
    setCurrentIndex(newIdx);
    setShowSidebar(false);
    a.focus();
  }

  function toggleSidebar(e) {
    if (screenWidth <= 550) setShowSidebar(!showSidebar);
  }

  return (
    <div className="App">
      <nav className="h-10vh navbar p-0 navbar-light bg-light shadow-lg">
        <div className="container-fluid h-100 p-0 d-flex justify-content-center">
          <span className="navbar-brand m-0 p-0 h1">
            <img src={logo} className="h-10vh" alt="TrueCoders" />
          </span>
        </div>
      </nav>
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
      <div className="d-flex h-90vh">
        {/* Sidebar */}
        <aside
          className={`container__sidebar my-1 ${showSidebar ? "show" : ""}`}
        >
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
            {data.map((q, idx) => (
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
        <main className="container__main d-flex justify-content-center align-items-center h-100">
          <div className="q-card card text-dark shadow-lg">
            <div className="card-header bg-light">
              <p
                className={`alert ${
                  showFeedback
                    ? feedback.startsWith("Correct")
                      ? "alert-success"
                      : "alert-danger"
                    : "h-0 p-0"
                }`}
              >
                {feedback}
              </p>
            </div>
            <div className="card-body">
              <small className="small border-bottom border-dark">
                Question
              </small>
              <p className="card-title my-3 h3">{qa.displayQ()}</p>
              <hr />
              <small className="small border-bottom border-dark">
                Answer
              </small>
              <form className="input-group my-3" onSubmit={checkAnswer}>
                <input
                  type="text"
                  name="answer"
                  id="answer"
                  defaultValue=""
                  className="form-control w-50 mx-auto text-center"
                />
                <button type="submit" className="btn btn-outline-dark">
                  Submit
                </button>
              </form>
            </div>
            <div className="card-footer bgLight">
              {showFeedback ? (
                <>
                  <button
                    id="prevBtn"
                    className="mx-1 btn btn-outline-info"
                    onClick={(e) => resetIndicators(prev)}
                    aria-label="previous question"
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
                      className="feather feather-arrowLeft-circle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 8 8 12 12 16"></polyline>
                      <line x1="16" y1="12" x2="8" y2="12"></line>
                    </svg>
                  </button>
                  <button
                    id="nextBtn"
                    className="mx-1 btn btn-info"
                    onClick={(e) => resetIndicators(next)}
                    aria-label="next question"
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
                      className="feather feather-arrow-right-circle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 16 16 12 12 8"></polyline>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
