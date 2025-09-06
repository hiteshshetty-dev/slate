import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

// Dynamic import for the example component
const PasteHtml = dynamic(() => import('../../examples/ts/paste-html'), {
  ssr: false,
})

export default function PasteHtmlPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Paste HTML</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PasteHtml />
    </>
  )
}

// Static generation for this specific page
export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Paste HTML',
      examplePath: 'paste-html',
    },
  }
}
