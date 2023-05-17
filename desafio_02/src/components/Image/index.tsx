import { ComponentPropsWithoutRef, useState } from 'react'

import { Button360, ButtonClose } from './components'

type ImageProps = ComponentPropsWithoutRef<'img'> & {
  staticImage: string
  motionImage?: string
}

export const Image = ({
  staticImage,
  motionImage,
  alt,
  className,
  ...props
}: ImageProps) => {
  const [showStatic, setShowStatic] = useState(true)

  return (
    <div className="relative">
      {showStatic && (
        <>
          <img
            src={staticImage}
            alt={alt}
            className={`w-[449px] ${className}`}
            {...props}
          />
          {motionImage && (
            <Button360
              className="absolute top-0 right-12 hover:text-main-hover transition duration-300"
              onClick={() => setShowStatic(false)}
            />
          )}
        </>
      )}
      {!showStatic && (
        <>
          <img
            src={motionImage}
            alt={alt}
            className={`w-[449px] ${className}`}
            {...props}
          />
          <ButtonClose
            className="absolute top-0 right-12 hover:text-main-hover transition duration-300"
            onClick={() => setShowStatic(true)}
          />
        </>
      )}
    </div>
  )
}
