import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const ForcedLayout = dynamic(() => import('../../examples/ts/forced-layout'), {
  ssr: false,
})

export default function ForcedLayoutPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Forced Layout</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ForcedLayout />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Forced Layout',
      examplePath: 'forced-layout',
    },
  }
}
