import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const ShadowDOM = dynamic(() => import('../../examples/ts/shadow-dom'), {
  ssr: false,
})

export default function ShadowDOMPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Shadow DOM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Shadow DOM integration example in Slate.js. Render the editor within Shadow DOM for style isolation and component encapsulation."
        />
      </Head>
      <ShadowDOM />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Shadow DOM',
      examplePath: 'shadow-dom',
    },
  }
}
