import React from 'react'
const molds = () => {
             
    const moldData = [

       { id: 1, name: "donut", price:80, description:"cake mold donut", image:'/mould 2.webp'},
       { id: 1, name: "donut", price:80, description:"cake mold donut", image:'/mould 3.webp'},
       { id: 1, name: "donut", price:80, description:"cake mold donut", image:'/image 6.webp'},
       { id: 1, name: "donut", price:80, description:"cake mold donut", image:'/baking-mold-1.webp'},
       { id: 1, name: "donut", price:80, description:"cake mold donut", image:'/mould 1.webp'},
       { id: 1, name: "donut", price:80, description:"cake mold donut", image:'/mould 9.jpg'},
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
      </div>
    </div>
  )
}



export default molds



