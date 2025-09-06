import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const EditableVoids = dynamic(
  () => import('../../examples/ts/editable-voids'),
  {
    ssr: false,
  }
)

export default function EditableVoidsPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Editable Voids</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <EditableVoids />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Editable Voids',
      examplePath: 'editable-voids',
    },
  }
}
