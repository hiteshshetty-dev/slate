import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Embeds = dynamic(() => import('../../examples/ts/embeds'), {
  ssr: false,
})

export default function EmbedsPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Embeds</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Embeds />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Embeds',
      examplePath: 'embeds',
    },
  }
}
