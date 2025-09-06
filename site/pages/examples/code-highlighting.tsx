import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const CodeHighlighting = dynamic(
  () => import('../../examples/ts/code-highlighting'),
  {
    ssr: false,
  }
)

export default function CodeHighlightingPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Code Highlighting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CodeHighlighting />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Code Highlighting',
      examplePath: 'code-highlighting',
    },
  }
}
