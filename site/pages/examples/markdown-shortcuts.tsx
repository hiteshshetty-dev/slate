import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const MarkdownShortcuts = dynamic(
  () => import('../../examples/ts/markdown-shortcuts'),
  {
    ssr: false,
  }
)

export default function MarkdownShortcutsPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Markdown Shortcuts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MarkdownShortcuts />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Markdown Shortcuts',
      examplePath: 'markdown-shortcuts',
    },
  }
}
