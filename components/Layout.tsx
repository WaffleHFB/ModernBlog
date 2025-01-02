import { ReactNode } from 'react'
import Navigation from './Navigation'
import PageTransition from './PageTransition'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

const Layout = ({
  children,
  title = 'My Personal Blog',
  description = 'Welcome to my personal blog'
}: LayoutProps) => {
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-black text-white flex flex-col">
        <Navigation />
        <PageTransition>
          <main className={`flex-grow ${!isHomePage ? 'pt-20' : ''}`}>
            {children}
          </main>
        </PageTransition>
      </div>
    </>
  )
}

export default Layout
