import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const HoveringToolbar = dynamic(
  () => import('../../examples/ts/hovering-toolbar'),
  {
    ssr: false,
  }
)

export default function HoveringToolbarPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Hovering Toolbar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Hovering toolbar example in Slate.js. Context-aware toolbar that appears on text selection with formatting options and positioning."
        />
      </Head>
      <HoveringToolbar />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Hovering Toolbar',
      examplePath: 'hovering-toolbar',
    },
  }
}
