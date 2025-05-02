import React, { useMemo } from 'react'
import {SketchPicker} from 'react-color'
import {useSnapshot} from 'valtio'
import state from '../store'

const ColorPicker = () => {
  const snap=useSnapshot(state);


  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
      color={snap.color}
      disableAlpha
      presetColors={[
        '#EFBD48',
        '#F5F5F5',
        '#E5E5E5',
        '#D5D5D5',
        '#C5C5C5',
        '#B5B5B5',
        '#A5A5A5',
        '#959595',
        '#858585',
        '#757575',

      ]}
      onChange={(color)=>state.color=color.hex}
      
      />
    </div>
  )
}

export default ColorPicker