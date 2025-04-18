import isHotkey from 'is-hotkey'
import React, { useCallback, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Editor, createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { Editable, ReactEditor, Slate, useSlate, withReact } from 'slate-react'
import { Button, Icon, Toolbar } from './components'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}
const IFrameExample = () => {
  const renderElement = useCallback(
    ({ attributes, children }) => <p {...attributes}>{children}</p>,
    []
  )
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  const handleBlur = useCallback(() => ReactEditor.deselect(editor), [editor])
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Toolbar>
        <MarkButton format="bold" icon="format_bold" />
        <MarkButton format="italic" icon="format_italic" />
        <MarkButton format="underline" icon="format_underlined" />
        <MarkButton format="code" icon="code" />
      </Toolbar>
      <IFrame onBlur={handleBlur}>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some rich text…"
          spellCheck
          autoFocus
          onKeyDown={event => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault()
                const mark = HOTKEYS[hotkey]
                toggleMark(editor, mark)
              }
            }
          }}
        />
      </IFrame>
    </Slate>
  )
}
const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)
  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}
const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }
  if (leaf.code) {
    children = <code>{children}</code>
  }
  if (leaf.italic) {
    children = <em>{children}</em>
  }
  if (leaf.underline) {
    children = <u>{children}</u>
  }
  return <span {...attributes}>{children}</span>
}
const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}
const IFrame = ({ children, ...props }) => {
  const [iframeBody, setIframeBody] = useState(null)
  const handleLoad = e => {
    const iframe = e.target
    if (!iframe.contentDocument) return
    setIframeBody(iframe.contentDocument.body)
  }
  return (
    <iframe srcDoc={`<!DOCTYPE html>`} {...props} onLoad={handleLoad}>
      {iframeBody && createPortal(children, iframeBody)}
    </iframe>
  )
}
const initialValue = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'In this example, the document gets rendered into a controlled ',
      },
      { text: '<iframe>', code: true },
      {
        text: '. This is ',
      },
      {
        text: 'particularly',
        italic: true,
      },
      {
        text: ' useful, when you need to separate the styles for your editor contents from the ones addressing your UI.',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'This also the only reliable method to preview any ',
      },
      {
        text: 'media queries',
        bold: true,
      },
      {
        text: ' in your CSS.',
      },
    ],
  },
]
export default IFrameExample
