import React, { ReactNode } from 'react'
import Head from 'next/head'
import Footer from '@c/Footer'

type Props = {
  children?: ReactNode
  title: string
}

export default function Layout({
  children,
  title = 'This is the default title',
}: Props) {
  return (
    <div className="container">
      <Head>
        <title>DevUtils | {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
