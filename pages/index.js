import Head from 'next/head'
import { Button, Box, Flex, Text, Icon } from '@chakra-ui/react'

import { useAuth } from '@/lib/auth'
import { Footer } from '@/components/Footer'
import { LoginButtons } from '@/components/LoginButtons'
import { FeedbackLink } from '@/components/FeedbackLink'
import { Feedback } from '@/components/Feedback'

const SITE_ID = process.env.NEXT_PUBLIC_HOME_PAGE_SITE_ID

// export async function getStaticProps(context) {
//   const { feedback } = await getAllFeedback(SITE_ID)
//   const { site } = await getSite(SITE_ID)

//   return {
//     props: {
//       allFeedback: feedback,
//       site
//     },
//     revalidate: 1
//   }
// }

export default function Home({ allFeedback, site }) {
  const auth = useAuth()
  return (
    <>
      <Box bg="gray.100" py={16} px={4}>
        <Flex as="main" direction="column" maxW="700px" margin="0 auto">
          <Head>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                window.location.href = "/sites"
              }
            `
              }}
            />
          </Head>
          <Icon color="black" name="logo" size="48px" mb={2} />
          <Text mb={4} fontSize="lg" py={4}>
            <Text as="span" fontWeight="bold" display="inline">
              Fast Feedback
            </Text>
            {`. is the easiest way to add comments or reviews to your static site. Try it out by leaving a comment below. After the comment is approved, it will display below.`}
          </Text>
          {auth.user ? (
            <Button
              as="a"
              href="/sites"
              backgroundColor="gray.900"
              color="white"
              fontWeight="medium"
              mt={4}
              maxW="200px"
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)'
              }}
            >
              View Dashboard
            </Button>
          ) : (
            <LoginButtons />
          )}
        </Flex>
      </Box>
      {/* <Box
        display="flex"
        flexDirection="column"
        width="full"
        maxWidth="700px"
        margin="0 auto"
        mt={8}
        px={4}
      >
        <FeedbackLink paths={[SITE_ID]} />
        {allFeedback.map((feedback, index) => (
          <Feedback
            key={feedback.id}
            settings={site?.settings}
            isLast={index === allFeedback.length - 1}
            {...feedback}
          />
        ))}
      </Box> */}
      <Footer />
    </>
  )
}
