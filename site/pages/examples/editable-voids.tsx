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
        <meta
          name="description"
          content="Editable void elements example in Slate.js. Create custom interactive elements like buttons, inputs, and widgets within the editor."
        />
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
