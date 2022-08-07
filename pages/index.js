import { Button, Heading, Text, Code } from '@chakra-ui/react'

import { useAuth } from '@/lib/auth'

export default function Home() {
  const auth = useAuth()
  return (
    <div>
      <Heading>Feedback Helper</Heading>
      {!auth?.user && (
        <Button onClick={() => auth.signinWithGitHub()}>Sign in with github</Button>
      )}
      <Text>
        Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
      </Text>
      {auth?.user?.name}
      {auth?.user && (
        <Button onClick={() => auth.signOut()}>Sign out</Button>
      )}
    </div>
  )
}
