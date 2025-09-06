import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const HugeDocument = dynamic(() => import('../../examples/ts/huge-document'), {
  ssr: false,
})

export default function HugeDocumentPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Huge Document</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Large document performance example in Slate.js. Optimize editor performance for handling thousands of nodes and complex content."
        />
      </Head>
      <HugeDocument />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Huge Document',
      examplePath: 'huge-document',
    },
  }
}
