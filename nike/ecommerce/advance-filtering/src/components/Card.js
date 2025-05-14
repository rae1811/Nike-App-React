import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { IoBagHandle } from "react-icons/io5";
const Card = () => {
  return (
    <section className='card'>
    <img src="https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg" alt="Shoe" className='card-img'></img>
 <div><h3 className='card-title'>shoe</h3>
 <section className='card-reviews'> <AiFillStar/><span className='total-reviews'>5</span></section>
<section className='card-price'>
<div className='price'><del>$300</del>$200</div>
<div className='bag'><IoBagHandle className='bag-icon'/></div>
</section>
 </div>
 </section>
  )
}

export default Card
