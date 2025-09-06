import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const SearchHighlighting = dynamic(
  () => import('../../examples/ts/search-highlighting'),
  {
    ssr: false,
  }
)

export default function SearchHighlightingPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Search Highlighting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SearchHighlighting />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Search Highlighting',
      examplePath: 'search-highlighting',
    },
  }
}
