import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Mentions = dynamic(() => import('../../examples/ts/mentions'), {
  ssr: false,
})

export default function MentionsPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Mentions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="User mention system example in Slate.js. Implement @mentions with user selection, and mention highlighting in the editor."
        />
      </Head>
      <Mentions />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Mentions',
      examplePath: 'mentions',
    },
  }
}
