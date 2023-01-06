import React from 'react'
// props drilling
// OBYEKTIN PARCALANMASI OBJECT DESTRUCTURING
// ARRAY DESTRUCTURING MASSIVLERIN PARCALANMASI
const FeaturedWork = ({basliq,tarix, movzu, shekil}) => {
  return (
   <div className='work d-flex '>
        <div className='left-side'>
            <img src={shekil} />

           
        </div>

        <div className='right-side ps-5'>
                <h1>{basliq}</h1>

                <div className='metadata'>
                <span className='badge bg-secondary'>{tarix}</span>

                <span>{movzu}</span>
                </div>

                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
   </div>
  )
}

export default FeaturedWork