import CommentSection from '@/components/Comment'
import React from 'react'
const molds = () => {
             
    const moldData = [

       { id: 1, name: "donut", price:80, description:"cake mold donut", image:'/mould 2.webp'},
       { id: 2, name: "Circle cake mold", price:80, description:"cake mold donut", image:'/mould 3.webp'},
       { id: 3, name: "Cake Stand", price:80, description:"cake mold donut", image:'/image 6.webp'},
       { id: 4, name: "heart mold", price:80, description:"cake mold donut", image:'/mould 4.webp'},
       { id: 5, name: "Rectangular mold", price:80, description:"cake mold donut", image:'/mould 1.webp'},
       { id: 6, name: "Square mold", price:80, description:"cake mold donut", image:'/mould 9.jpg'},
       ]  
    
  return (
    <div>
      <div className='mold'>
        {moldData.map((molds) => (
          <div
         key={molds.id} className='molds-card'>
            <img src={molds.image} alt={molds.name} />
            <h3>{molds.name}</h3>
            <p>{}molds.description</p>
            <div className='price'>{molds.price}Rs</div>
            <button>Add to Cart</button>
         </div>
        ))}
        <CommentSection />
      </div>
    </div>
  )
}



export default molds



