import MonacoEditor from '@monaco-editor/react'
import prettier from 'prettier'
import parser from 'prettier/parser-babel'

const CodeEditor = ({ code, readOnly = false }) => {
  const formattedCode = prettier
    .format(code, {
      parser: 'babel',
      plugins: [parser],
      useTabs: false,
      semi: false,
      singleQuote: true,
    })
    .replace(/\n$/, '')
  return (
    <MonacoEditor
      value={formattedCode}
      width="100%"
      height="400px"
      language="javascript"
      theme="vs-dark"
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
