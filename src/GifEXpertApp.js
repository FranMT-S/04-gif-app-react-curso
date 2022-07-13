import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//import PropTypes from 'prop-types'

function GifEXpertApp() {

  
  //const categories  = ['One Punch','Samurai X', 'Naruto'];
  const [categories, setCategories] = useState(['One Punch'])
 

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories = {setCategories}/>
      <hr/>
  
      <ol>  
        {
          categories.map((category) => <GifGrid key={category} category = {category}/> )
        }
      </ol>
    </>
  )
}

GifEXpertApp.propTypes = {}

export default GifEXpertApp
