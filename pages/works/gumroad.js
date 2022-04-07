import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Gumroad">
            <Container>
                <Title>
                    Gumroad <Badge>2022</Badge>
                </Title>
                <P>
                    Gallery of tutorials
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://app.gumroad.com/heitorkimura'>
                        https://app.gumroad.com/heitorkimura <ExternalLinkIcon mx='2px' />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Contents</Meta>
                        <span>Data Science, Machine Learning, Google Sheets</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/temp-thumbnail.png" alt="Gumroad" />
            </Container>
        </Layout>
    )
}

export default Work