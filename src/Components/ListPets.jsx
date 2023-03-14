import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

const ListPets = ({name,moveListItem,index}) => {
  //USEDRAG
  const [{isDragging},dragRef] = useDrag({
    type:'item',
    item:{index},
    collect:(monitor) => ({
        isDragging: monitor.isDragging(),
    })
  })
  //drop
  const [spec,dropRef] = useDrop({
    accept:'item',
    hover:(item,monitor) => {
        const dragIndex = item.index
        const hoverIndex = index
        const hoverBoundingRect = ref.current?.getBoundingClientRect()
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

         // if dragging down, continue only when hover is smaller than middle Y
         if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
         // if dragging up, continue only when hover is bigger than middle Y
         if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

         moveListItem(dragIndex,hoverIndex)
         item.index = hoverIndex
    },
  })
  const ref= useRef(null)
  const dragDropRef = dragRef(dropRef(ref))
  const opacity = isDragging ? 0.4 : 1
  return (
    <div 
    ref={dragDropRef}
    className='list-pets' style={{opacity:opacity}}>
        {name}
    </div>
  )
}

export default ListPets
