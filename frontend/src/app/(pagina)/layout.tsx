import Pagina from '@/components/template/Pagina'
import React from 'react'

const layout = (props: any) => {
  return (
    <Pagina>
        {props.children}
    </Pagina>
  )
}

export default layout