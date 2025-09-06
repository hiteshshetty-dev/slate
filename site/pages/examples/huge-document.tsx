import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { css } from '@emotion/css'

const loaderContainer = css`
  flex-direction: column;
  min-height: 80vh;
`

const spinner = css`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-top: 3px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
`

const title = css`
  margin: 0;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0.5px;
`

const subtitle = css`
  margin: 8px 0 0 0;
  font-size: 14px;
  font-weight: 300;
`

const Loader = () => (
  <div className={`${loaderContainer} flex-center`}>
    <div className={spinner} />
    <h2 className={title}>Loading Huge Document</h2>
    <p className={subtitle}>Preparing thousands of nodes...</p>
  </div>
)

const HugeDocument = dynamic(() => import('../../examples/ts/huge-document'), {
  ssr: false,
  loading: () => <Loader />,
})

export default function HugeDocumentPage() {
  return (
    <>
      <Head>
        <title>Slate Examples - Huge Document</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Large document performance example in Slate.js. Optimize editor performance for handling thousands of nodes and complex content."
        />
      </Head>
      <HugeDocument />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      exampleName: 'Huge Document',
      examplePath: 'huge-document',
    },
  }
}
