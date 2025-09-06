import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const RichText = dynamic(() => import('../../examples/ts/richtext'), {
  ssr: false,
})

export default function RichTextPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Rich Text</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RichText />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Rich Text',
      examplePath: 'richtext',
    },
  }
}
