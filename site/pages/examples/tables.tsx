import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Tables = dynamic(() => import('../../examples/ts/tables'), {
  ssr: false,
})

export default function TablesPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Tables</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Tables />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Tables',
      examplePath: 'tables',
    },
  }
}
