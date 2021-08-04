export const getGeneratedPageURL = ({ html, css, js }, editorMode) => {
  const getBlobURL = (code, type) => {
    const blob = new Blob([code], { type });
    return URL.createObjectURL(blob);
  };

  const customConsoleJS = `
    // Logs
  console.defaultLog = console.log.bind(console);
  console.logs = [];
  console.log = function () {
    // default &  console.log()
    console.defaultLog.apply(console, arguments);
    // new & array data
    console.logs.push(Array.from(arguments));
  };
  // Errors
  console.defaultError = console.error.bind(console);
  console.errors = [];
  console.error = function () {
    // default &  console.error()
    console.defaultError.apply(console, arguments);
    // new & array data
    console.errors.push(Array.from(arguments));
  };
  // Warnings
  console.defaultWarn = console.warn.bind(console);
  console.warns = [];
  console.warn = function () {
    // default &  console.warn()
    console.defaultWarn.apply(console, arguments);
    // new & array data
    console.warns.push(Array.from(arguments));
  };
  // Debugging
  console.defaultDebug = console.debug.bind(console);
  console.debugs = [];
  console.debug = function () {
    // default &  console.debug()
    console.defaultDebug.apply(console, arguments);
    // new & array data
    console.debugs.push(Array.from(arguments));
  };
    try {
      ${js} 
    } catch(error) {
      console.log(error)
    }
    console.logs.forEach((log, idx) => {
      const newLine = document.createElement("p");
      newLine.textContent = "> | " + log;
      document.getElementById('output').appendChild(newLine);
    })`;

  const cssURL = getBlobURL(
    editorMode === "javascript"
      ? `html {background-color: black; color: #eee; font-size: 24px; width: 100%; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;} p {margin: 0px 0px 5px 0px; color: #0094c8}`
      : css + " html {background-color: white; width: 100%;}",
    "text/css"
  );
  const jsURL = getBlobURL(
    editorMode === "javascript" ? customConsoleJS : js,
    "application/javascript"
  );

  const source = `
        <html>
          <head>
            ${`<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
            ${`<script src="${jsURL}" defer></script>`}
            </head>
            <body>
            <div id="output">
              ${html}
            </div>
          </body>
        </html>
      `;

  return getBlobURL(source, "text/html");
};
