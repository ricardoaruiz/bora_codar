import { ComponentPropsWithRef } from 'react'

type PlayerHeaderProps = ComponentPropsWithRef<'div'> & {
  title: string
  band: string
}

export const PlayerHeader = ({
  title,
  band,
  className,
  ...props
}: PlayerHeaderProps) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`} {...props}>
      <h2 className="text-white text-2xl">{title}</h2>
      <h3 className="text-band-text text-xl">{band}</h3>
    </div>
  )
}
