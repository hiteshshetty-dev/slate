import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { ComponentLoader } from '../../components/ComponentLoader'

const SearchHighlighting = dynamic(
  () => import('../../examples/ts/search-highlighting'),
  {
    ssr: false,
    loading: () => <ComponentLoader />,
  }
)

export default function SearchHighlightingPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Search Highlighting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Interactive search highlighting example in Slate.js rich text editor. Search and highlight text within the editor with real-time highlighting functionality."
        />
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
