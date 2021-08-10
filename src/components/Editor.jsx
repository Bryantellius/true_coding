import AceEditor from "react-ace";
import React from "react";
import "ace-builds/src-noconflict/mode-javascript";
// Will be used when html and css support are added
// import "ace-builds/src-noconflict/mode-html";
// import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-dracula";

const Editor = ({ q, currentCode, setCurrentCode, editorMode }) => {
  return (
    <>
      <div className="prompt-container px-3 text-start bg-dark border-bottom border-light w-100">
        <small className="small border-bottom border-light">Question</small>
        <p className="small">{q.displayQ()}</p>
        {q.displayTags()}
      </div>
      <AceEditor
        name="aceEditor"
        mode={editorMode}
        theme="dracula"
        value={currentCode}
        onChange={(e) => {
          setCurrentCode(e);
        }}
        fontSize={18}
        editorProps={{ $blockScrolling: false }}
        className="w-100 editor"
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          wrapBehavioursEnabled: true,
        }}
      />
    </>
  );
};

export default Editor;
