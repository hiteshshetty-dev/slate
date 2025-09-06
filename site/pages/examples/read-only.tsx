import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const ReadOnly = dynamic(() => import('../../examples/ts/read-only'), {
  ssr: false,
})

export default function ReadOnlyPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Read-only</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Read-only editor example in Slate.js. Display formatted content without editing capabilities, perfect for content preview and display."
        />
      </Head>
      <ReadOnly />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Read-only',
      examplePath: 'read-only',
    },
  }
}
