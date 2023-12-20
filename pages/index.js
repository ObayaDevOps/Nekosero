import Head from 'next/head'
import {  Box, Icon } from '@chakra-ui/react'
import LandingPage from '../components/pageContent/landingPage'
import Image from 'next/image'
import HeadImage from '../public/images/icon/africa.png'
import { buildUrl } from 'cloudinary-build-url';


export default function Home() {
  return (
    <div >
      <Head>
        <title>Home | Nekosero</title>
        <meta name="description" content="Nekosero Webpage" />
        {/* <link rel="shortcut icon" href="../public/favicon.ico"></link> */}
        <link rel="shortcut icon" href="../../../images/icon/DWOLogo.png"></link>
      </Head>

      <Box>
        <LandingPage />
      </Box>

    </div>
  )
}
