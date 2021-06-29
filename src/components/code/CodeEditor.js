import MonacoEditor from '@monaco-editor/react'
import prettier from 'prettier'
import parser from 'prettier/parser-babel'
import { useRef, useState, useEffect } from 'react'

const CodeEditor = ({
  code,
  readOnly = false,
  lang = 'javascript',
  showButton = false,
}) => {
  const [formattedCode, setFormattedCode] = useState()
  const editorRef = useRef()
  const mountedMonaco = (editor) => {
    editorRef.current = editor
  }

  useEffect(() => {
    try {
      const prettier_code = prettier
        .format(code, {
          parser: 'babel',
          plugins: [parser],
          useTabs: false,
          semi: false,
          singleQuote: true,
        })
        .replace(/\n$/, '')
      setFormattedCode(prettier_code)
    } catch (e) {
      setFormattedCode(code)
    }
  }, [code])

  return (
    <div>
      {showButton && (
        <button
          onClick={(e) => {
            e.preventDefault()
            console.log(editorRef.current.getValue())
          }}
        >
          value
        </button>
      )}
      <MonacoEditor
        onMount={mountedMonaco}
        value={formattedCode}
        width="100%"
        height="400px"
        language={lang}
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
    </div>
  )
}
export default CodeEditor
