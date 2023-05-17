import { ComponentPropsWithoutRef } from 'react'

import move from '@/assets/images/move.svg'
import spinner from '@/assets/images/spinner.svg'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary' | 'tertiary'
  isLoading?: boolean
  isMovable?: boolean
}

export const Button = ({
  children,
  variant = 'primary',
  isLoading = false,
  isMovable = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`
        flex
        justify-between
        items-center
        gap-2

        h-fit
        px-6
        py-3
        rounded-full
        uppercase
        text-white

        transition-all
        duration-300

        focus:ring-1
        focus:ring-white

        ${isLoading && 'cursor-wait'}
        ${isMovable && 'cursor-move'}
        disabled:cursor-not-allowed

        ${
          variant === 'primary' &&
          `bg-primary disabled:bg-primary-disabled hover:bg-primary-hover active:bg-primary-active`
        }
        ${
          variant === 'secondary' &&
          `bg-secondary disabled:opacity-30 disabled:hover:bg-secondary hover:bg-secondary-hover active:bg-secondary-active`
        }
        ${
          variant === 'tertiary' &&
          `bg-transparent disabled:hover:bg-transparent hover:bg-primary-hover active:bg-primary-active`
        }

        ${className}
      `}
      {...props}
    >
      {isLoading && (
        <img src={spinner} alt="spinner" className="animate-spin" />
      )}
      {isMovable && <img src={move} alt="movable" />}
      {children}
    </button>
  )
}
