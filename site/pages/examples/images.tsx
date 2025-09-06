import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Images = dynamic(() => import('../../examples/ts/images'), {
  ssr: false,
})

export default function ImagesPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Images</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Images />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Images',
      examplePath: 'images',
    },
  }
}
