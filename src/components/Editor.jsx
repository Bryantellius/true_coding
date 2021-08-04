import AceEditor from "react-ace";
import React from "react";
import "ace-builds/src-noconflict/mode-javascript";
// Will be used when html and css support are added
// import "ace-builds/src-noconflict/mode-html";
// import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-vibrant_ink";

const Editor = ({ run, q }) => {
  const [currentCode, setCurrentCode] = React.useState("");
  const editorMode = "javascript";

  return (
    <>
      <div className="bg-dark">
        <p>{q.displayQ()}</p>
      </div>
      <AceEditor
        name={editorMode + "Editor"}
        mode={editorMode}
        theme="vibrant_ink"
        value={currentCode}
        onChange={(e) => {
          setCurrentCode(e);
        }}
        fontSize={18}
        editorProps={{ $blockScrolling: true }}
        className="w-100 editor"
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
      />
      <div className="editor-button-panel">
        <button className="btn btn-success" onClick={() => run(currentCode)}>
          Run
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => navigator.clipboard.writeText(currentCode)}
        >
          Copy
        </button>
      </div>
    </>
  );
};

export default Editor;
