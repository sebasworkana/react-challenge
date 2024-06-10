import React from 'react'
import type { RouteObject } from 'react-router-dom'
import Content from './pages/about/index'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Content />,
  },
]

export default routes
