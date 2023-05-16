import { ComponentPropsWithoutRef } from 'react'

type ControlButtonProps = ComponentPropsWithoutRef<'button'> & {
  icon: React.ReactNode
}

export const ControlButton = ({
  icon,
  className,
  ...props
}: ControlButtonProps) => {
  return (
    <button
      aria-label="back button"
      className={`text-white hover:text-slate-500 active:text-slate-700 ${className}`}
      {...props}
    >
      {icon}
    </button>
  )
}
