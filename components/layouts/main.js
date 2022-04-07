import Head from 'next/head'
import Navbar from '../navbar'
import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import _3dModel from '../3d-model'

const Main = ({ children, router }) => {
    return (
            <Box as ="main" pb={8}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    
                    <title>Heitor Kimura - Homepage</title>
                </Head>

                <Navbar path={router.asPath} />

                <Container maxW="container.md" pt={14}>
                    <NoSsr>
                        <_3dModel />
                    </NoSsr>
                    {children}
                </Container>
            </Box>
    )
}

export default Main