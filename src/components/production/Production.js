import React from 'react'
import './Production.scss'
import production from '../../assets/production.jpg'
import ProdTwo from './prodTwo/ProdTwo'
const Production = () => {
  return (
    <div>
        <div id="about-img" style={{ backgroundImage: `url(${production})` , backgroundPosition:'bottom' }}> 
            <div id="main-titles" >
              Üretim
            </div>
            <div id="main-titles-two">
              Tecrübemiz , İşimiz , Kalitemiz ...
            </div>
        </div>
        <div>
         
        </div>
        <div>
          <ProdTwo></ProdTwo>
        </div>
    </div>
  )
}

export default Production