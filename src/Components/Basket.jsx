import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import PetCart from './PetCart'

const PETS = [
    { id: 1, name: 'dog' },
    { id: 2, name: 'cat' },
    { id: 3, name: 'fish' },
    { id: 4, name: 'hamster' },
]
const Basket = () => {
    const [basket,setBasket] = useState([])
    const [{isOver},dropRef] = useDrop({
        accept:'pets',
        drop: (item) => setBasket((basket) => 
        !basket.includes(item) ? [...basket,item] : basket),
        collect:(monitor) => ({
            isOver: monitor.isOver()
        })
    })
  return (
    <>
    <div className='pets'>
        {PETS.map((pet) => (
            <PetCart key={pet.id} id={pet.id} name={pet.name}/>
        ))}
    </div>
    <div className='basket' ref={dropRef}>
        {basket.map((pet) => <PetCart key={pet.id} id={pet.id} name={pet.name}/>)}
        {isOver && <div>Drop Here</div>}
    </div>
    </>
  )
}

export default Basket
