import { ComponentPropsWithoutRef } from 'react'

import { IconClose } from './IconClose'

type ButtonCloseProps = ComponentPropsWithoutRef<'button'>

export const ButtonClose = ({ className, ...props }: ButtonCloseProps) => {
  return (
    <button className={`${className}`} {...props}>
      <IconClose />
    </button>
  )
}
