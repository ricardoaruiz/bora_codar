import React, { ComponentPropsWithRef } from 'react'

import send from '@/assets/images/send.svg'

type InputMessageProps = ComponentPropsWithRef<'input'> & {
  onSend: () => void
}
type InputMessageRef = React.Ref<HTMLInputElement>

const InputMessage = React.forwardRef(
  (
    { onSend, className, ...props }: InputMessageProps,
    ref: InputMessageRef
  ) => {
    return (
      <div className={className}>
        <div className="flex justify-between px-6 py-3 bg-chat-black-400 rounded-full">
          <input
            ref={ref}
            className={`
                  w-full
                  bg-chat-black-400
                  outline-none
                  placeholder:text-chat-white
                  text-chat-white
                `}
            {...props}
          />
          <button onClick={onSend}>
            <img src={send} alt="Enviar" />
          </button>
        </div>
      </div>
    )
  }
)

InputMessage.displayName = 'InputMessage'

export { InputMessage }
