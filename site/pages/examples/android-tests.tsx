import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const AndroidTests = dynamic(() => import('../../examples/ts/android-tests'), {
  ssr: false,
})

export default function AndroidTestsPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Android Tests</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Android compatibility testing example in Slate.js. Test and ensure proper functionality across Android devices and browsers."
        />
      </Head>
      <AndroidTests />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Android Tests',
      examplePath: 'android-tests',
    },
  }
}
