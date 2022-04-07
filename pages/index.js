import { Container, Box, Heading, Image, useColorModeValue, Link, Button, SimpleGrid, List, ListItem, Icon } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord
} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a data scientist based in Brazil!
                </Box>

                <Box display={{ md:'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Heitor Kimura
                        </Heading>
                        <p>Lifelong Learner for ( Data Science / Education / Music )</p>
                    </Box>
                    <Box 
                        flexShrink={0} 
                        mt={{base: 4, md: 0}}
                        ml={{md: 6}} 
                        align="center"
                        >
                        <Image 
                            borderColor="whiteAlpha.800" 
                            borderWidth={2} 
                            borderStyle="solid" 
                            maxWidth="150px" 
                            display="inline-block" 
                            borderRadius="full" 
                            src="/images/profile2.jpg" 
                            alt="Profile Image"
                        />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Data Scientist, Scout Chief, Musician and a long-life learner forever looking for new experiences. Currently exploring new ways of exchanging knowledge through writing/storytelling. Hope you enjoy!
                        <br></br>
                        <NextLink href="/works/gumroad">
                            <Link>Gumroad</Link>
                        </NextLink>
                        .
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1995</BioYear>
                        Born in São Paulo, Brazil
                    </BioSection>
                    <BioSection>
                        <BioYear>2014</BioYear>
                        Accepted in University of São Paulo&apos;s Polytechnic School - Materials Engineering Course
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                    Received "Award of Excellence" from the National Institute for International Education (국립국제교육원), Republic of Korea, during the 2019 GKS for African and Latin American Undergraduate Students
                    <br></br><br></br> 
                    Achieved Materials Engineering Undergraduate Degree at University of São Paulo&apos;s Polytechnic School
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                    Discovered the wonders of Data Science and engaged in this area
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        When not working, you'll find me...
                    </Heading>
                    <Paragraph>
                        - Singing and Playing Guitar
                    </Paragraph>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant='section-title'>
                        Social Links
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://twitter.com/heitor_kimura" target='_blank'>
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter}/>}>
                                    @heitor_kimura
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page