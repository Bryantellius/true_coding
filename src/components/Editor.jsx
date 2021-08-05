import AceEditor from "react-ace";
import React from "react";
import "ace-builds/src-noconflict/mode-javascript";
// Will be used when html and css support are added
// import "ace-builds/src-noconflict/mode-html";
// import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-vibrant_ink";

const Editor = ({ run, q, currentCode, setCurrentCode }) => {
  const editorMode = "javascript";

  return (
    <>
      <div className="bg-dark" aria-live="polite">
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
    </>
  );
};

export default Editor;
