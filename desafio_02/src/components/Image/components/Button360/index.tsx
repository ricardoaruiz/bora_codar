import { ComponentPropsWithoutRef } from 'react'

import { Icon360 } from './Icon360'

type Button360Props = ComponentPropsWithoutRef<'button'>

export const Button360 = ({ className, ...props }: Button360Props) => {
  return (
    <button className={`${className}`} {...props}>
      <Icon360 />
    </button>
  )
}
