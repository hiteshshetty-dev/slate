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
        <meta
          name="description"
          content="Image rendering example in Slate.js. Add images via toolbar or paste image URLs directly into the rich text editor for instant display."
        />
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
