import React, { useCallback, useState } from 'react'
import ListPets from './ListPets';

const PETS = [
    { id: 1, name: 'dog' },
    { id: 2, name: 'cat' },
    { id: 3, name: 'fish' },
    { id: 4, name: 'hamster' },
]

const List = () => {
    const [pets,setPets]=useState(PETS);
    console.log(pets);
    const movePetListItem = useCallback((dragIndex,hoverIndex) =>{
        const dragItem = pets[dragIndex]
        const hoverItem = pets[hoverIndex]
        //swap
        setPets((pets) => {
            const updatedPets = [...pets]
            updatedPets[dragIndex] = hoverItem
            updatedPets[hoverIndex] = dragItem
            return updatedPets
        })
    },[pets],);
  return (
    <div className='list'>
        {pets.map((pet,index) => (
            <ListPets
            key={pet.id}
            id={pet.id}
            index={index}
            name={pet.name}
            moveListItem={movePetListItem}
            />
        ))}
    </div>
  )
}

export default List
