import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const CustomPlaceholder = dynamic(
  () => import('../../examples/ts/custom-placeholder'),
  {
    ssr: false,
  }
)

export default function CustomPlaceholderPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Custom Placeholder</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CustomPlaceholder />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Custom Placeholder',
      examplePath: 'custom-placeholder',
    },
  }
}
