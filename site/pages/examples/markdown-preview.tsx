import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { ComponentLoader } from '../../components/ComponentLoader'

const MarkdownPreview = dynamic(
  () => import('../../examples/ts/markdown-preview'),
  {
    ssr: false,
    loading: () => <ComponentLoader />,
  }
)

export default function MarkdownPreviewPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Markdown Preview</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Live markdown preview example in Slate.js. Edit markdown in the editor and see real-time rendered output with syntax highlighting."
        />
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
