import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Styling = dynamic(() => import('../../examples/ts/styling'), {
  ssr: false,
})

export default function StylingPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Styling</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Custom styling example in Slate.js. Apply custom CSS, themes, and visual formatting to the rich text editor and its components."
        />
      </Head>
      <Styling />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Styling',
      examplePath: 'styling',
    },
  }
}
