import React from 'react';
import App from 'next/app';

import PageContainer from '../components/organisms/PageContainer';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    )
  }
}