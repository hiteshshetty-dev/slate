import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const IFrames = dynamic(() => import('../../examples/ts/iframe'), {
  ssr: false,
})

export default function IFramesPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Rendering in iframes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Iframe rendering example in Slate.js."
        />
      </Head>
      <IFrames />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Rendering in iframes',
      examplePath: 'iframe',
    },
  }
}
