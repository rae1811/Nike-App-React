import React, { useState } from 'react'
import './Colors.css'
import Input from '../../components/Input'
import products from './db/data'
const Colors = () => {
  const [selectCategory,setSelectedCategory]= useState(null);
const [query, setQuery]= useState("")

 const handleInputChange =event=>{
  setQuery(event.target.value)
 } 
 const filteredItems =products.filter(product=>product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!==-1))


 const handleChange =event =>{setSelectedCategory(event.target.value)}
 const handleClick = event =>{setSelectedCategory(event.target.value)}
  function filteredData(products, selected, query){
    let filteredProducts =products
    //Filtering Input Items
    if(query){
    filteredProducts =filteredItems
    }
    if(selected){
      filteredProducts = filteredProducts.filter({categorylopt expresslotl})
    }
  }
  return (
    <div>
    
      <h2 className='sidebar-title color-title'>Color</h2>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>


   
    </div>
  )
}

export default Colors
