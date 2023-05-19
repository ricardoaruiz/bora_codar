import { PropsWithChildren } from 'react'

type MessagesProps = {
  date: string
}

export const Messages = ({
  date,
  children,
}: PropsWithChildren<MessagesProps>) => {
  return (
    <div className="px-0 py-4 md:px-0 flex-1 flex flex-col h-[calc(100vh-230px)] overflow-y-auto">
      <h3 className="text-xs text-chat-white font-normal text-center">
        {date}
      </h3>
      {children}
    </div>
  )
}
