import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const CheckLists = dynamic(() => import('../../examples/ts/check-lists'), {
  ssr: false,
})

export default function CheckListsPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Checklists</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CheckLists />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Checklists',
      examplePath: 'check-lists',
    },
  }
}
