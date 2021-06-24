import MonacoEditor from '@monaco-editor/react'
const CodeEditor = ({ code, readOnly = false }) => {
  return (
    <MonacoEditor
      value={code}
      width="100%"
      height="400px"
      language="javascript"
      theme="dark"
      options={{
        readOnly: readOnly,
        wordWrap: 'on',
        minimap: { enabled: false },
        showUnused: false,
        folding: false,
        lineNumbersMinChars: 3,
        fontSize: 16,
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
  )
}
export default CodeEditor
