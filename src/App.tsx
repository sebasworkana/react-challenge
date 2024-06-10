import React from 'react'
import { HashRouter, useRoutes } from 'react-router-dom'
import routes from './routes'
import Footer from '@/components/Footer'
import Header from '@/components/Heade'

const Element: React.FC = () => {
  const element = useRoutes(routes)
  return element
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="mx-auto flex h-screen max-w-[800px] flex-col justify-between pt-5 bg-background">
        {/* <Header /> */}
        <Element />
        {/* <Footer /> */}
      </div>
    </HashRouter>
  )
}

export default App
