import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const BodyWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 60px;

  @media screen and (max-width: 1200px) {
    padding: 60px 1em;
  }
`;

const MainWrapper = styled.main`
  margin: 0 auto;

  h1 { 
    font-size: 42px; 
    margin-bottom: 61px;
  }
`;


export default function Home() {
  return (
    <BodyWrapper>
      <Head>
        <title>Tsks. app</title>
        <meta name="description" content="Created for a test on outboxup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
        
      <MainWrapper>
        <h1>
          Hi there.
        </h1>
      </MainWrapper>

      <Footer />
    </BodyWrapper>
  )
}
