import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const MarkdownPreview = dynamic(
  () => import('../../examples/ts/markdown-preview'),
  {
    ssr: false,
  }
)

export default function MarkdownPreviewPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Markdown Preview</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MarkdownPreview />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Markdown Preview',
      examplePath: 'markdown-preview',
    },
  }
}
