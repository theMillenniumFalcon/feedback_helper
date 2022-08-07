import { Button, Flex } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoGoogle } from 'react-icons/io5'

import { useAuth } from '@/lib/auth'

export const LoginButtons = () => {
    const auth = useAuth()

    return (
        <Flex direction={['column', 'row']}>
            <Button
                onClick={() => auth.signinWithGitHub()}
                backgroundColor="gray.900"
                color="white"
                fontWeight="medium"
                leftIcon={<IoLogoGithub />}
                mt={4}
                mr={2}
                _hover={{ bg: 'gray.700' }}
                _active={{
                    bg: 'gray.800',
                    transform: 'scale(0.95)'
                }}
            >
                Continue with GitHub
            </Button>
            <Button
                onClick={() => auth.signinWithGoogle()}
                backgroundColor="white"
                color="gray.900"
                variant="outline"
                fontWeight="medium"
                leftIcon={<IoLogoGoogle />}
                mt={4}
                _hover={{ bg: 'gray.100' }}
                _active={{
                    bg: 'gray.100',
                    transform: 'scale(0.95)'
                }}
            >
                Continue with Google
            </Button>
        </Flex>
    )
}