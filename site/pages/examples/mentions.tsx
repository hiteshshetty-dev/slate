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
