import type { GetServerSideProps, NextPage } from 'next'
import { getSession } from '@auth0/nextjs-auth0'

const Home: NextPage = () => {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res)

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false
      }
    }
  } else {
    return {
      redirect: {
        destination: '/app',
        permanent: false,
      }
    }
  }
}

export default Home
