import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Inlines = dynamic(() => import('../../examples/ts/inlines'), {
  ssr: false,
})

export default function InlinesPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Inlines</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Inline elements example in Slate.js. Create custom inline components like links, mentions, and styled text within paragraphs."
        />
      </Head>
      <Inlines />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Inlines',
      examplePath: 'inlines',
    },
  }
}
