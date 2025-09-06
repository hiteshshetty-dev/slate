import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const PlainText = dynamic(() => import('../../examples/ts/plaintext'), {
  ssr: false,
})

export default function PlainTextPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Plain Text</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PlainText />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Plain Text',
      examplePath: 'plaintext',
    },
  }
}
