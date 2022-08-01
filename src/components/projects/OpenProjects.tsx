import { KeyIcon } from '@heroicons/react/solid'
import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/outline'
import { useDrop, useDrag } from 'react-dnd'
import { ItemTypes } from '../../types'
import { useState } from 'react'

import Projects from './Projects'

import clsx from 'clsx'

export interface BoxProps {
  name: string
}

interface DropResult {
  name: string
}

export default function OpenProjects() {
  const [hasDropped, setHasDropped] = useState(false)

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>()
      if (item && dropResult) {
        setHasDropped(true)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  return (
    <div className="flex flex-col">
      <section className="pb-8 px-8 flex flex-col">
        <div
          className={clsx(
            hasDropped
              ? 'bg-white'
              : 'bg-gray-500 flex flex-col justify-center mt-5'
          )}
        >
          {!hasDropped && (
            <>
              <span className="flex justify-center mt-10 text-yellow-300 text-2xl mb-5">
                Drag the Key to the keyhole to unlock my projects!
              </span>
              <div className="flex flex-col justify-center" ref={drag}>
                <KeyIcon
                  data-testid={`box`}
                  className="h-32 w-32 text-yellow-400 m-auto cursor-move"
                />
              </div>
            </>
          )}

          {hasDropped ? (
            <Projects />
          ) : isOver ? (
            <LockOpenIcon
              className="flex justify-center h-64 text-slate-300 mt-20"
              ref={drop}
            />
          ) : (
            <LockClosedIcon
              ref={drop}
              data-testid="dustbin"
              className={clsx('flex justify-center h-64 text-slate-300 mt-20')}
            />
          )}
        </div>
      </section>
    </div>
  )
}
