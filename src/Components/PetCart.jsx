import React from 'react'
import { useDrag } from 'react-dnd'

const PetCart = ({id,name}) => {

    const[{isDragging},dragRef] = useDrag({
        type:'pets',
        item:{id,name},
        collect:(monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

  return (
    <div 
    className='pet-card'
    ref={dragRef}>
        {name}
        {isDragging &&  ' 😊'}
    </div>
  )
}

export default PetCart
