import { PropsWithChildren, useMemo } from 'react'

type MessageProps = {
  name: string
  time: string
  received?: boolean
}

export const Message = ({
  name,
  time,
  received = false,
  children,
}: PropsWithChildren<MessageProps>) => {
  const myMessageBoxClasses = `mt-8 ${!received && 'self-end'}`

  const myTextClasses = !received ? 'text-right' : ''

  const messageClasses = useMemo(() => {
    if (received) {
      return 'bg-chat-pink rounded-tr-lg rounded-br-lg rounded-bl-lg'
    }

    return 'bg-chat-green-600 rounded-tl-lg rounded-tr-lg rounded-bl-lg'
  }, [received])

  return (
    <div className={myMessageBoxClasses}>
      <p
        className={`text-xs text-chat-white font-normal mb-2 ${myTextClasses}`}
      >
        {`${name} ${time}`}
      </p>

      <div
        className={`
          p-3
          text-xs
          text-chat-white
          font-normal
          w-[149px]
          sm:w-fit
          ${messageClasses}
        `}
      >
        {children}
      </div>
    </div>
  )
}
