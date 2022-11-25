import React from 'react'
import Footer from '../Footer'
import Header from '../Header/index'
import './mainLayout.css'
const MainLayout = (props: React.PropsWithChildren<{}>) => {
  return (
    <div className="container-layout overflow-hidden">
      <Header />
      <div className="layout-container">{props.children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
