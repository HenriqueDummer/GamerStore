import Pagina from '@/components/tamplates/Pagina'
import React from 'react'

const layout = (props: any) => {
  return (
    <Pagina>
        {props.children}
    </Pagina>
  )
}

export default layout