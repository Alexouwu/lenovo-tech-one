import React from 'react'
import FooterWebsite from '../components/footer/footer website/index';
import HeaderBlog from '../components/header/header2/HeaderBlog';
import Contenidos from '../components/Blog/Contenidos';
import Destacados from '../components/Blog/Destacados';

function blog() {
  return (
      <>

    <HeaderBlog/>
    <Contenidos/>
    <Destacados/>
    <FooterWebsite/>

    </>
  )
}

export default blog



