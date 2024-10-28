import React from 'react'
import  './NetflixIndexComponents.css'
import  {NetflixHeaderComponents}  from './NetflixHeaderComponents'
import NetflixMainComponents from './NetflixMainComponents'
import { NetflixRegister } from './NetflixRegisterComponents'
import NetflixFooterComponents from './NetflixFooterComponents'

export function NetflixIndexComponents() {
  return (
    <div className='container-fluid'>
        <div className='box'>
          <header>
              <NetflixHeaderComponents></NetflixHeaderComponents>

          </header>
          <section className='d-flex justify-content-center align-items-center'>
            <main >              
              <NetflixMainComponents></NetflixMainComponents>
              <NetflixRegister></NetflixRegister>
            </main>

          </section>
          <footer className=''>
              <NetflixFooterComponents></NetflixFooterComponents>
          </footer>
        </div>
    </div>
  )
}

