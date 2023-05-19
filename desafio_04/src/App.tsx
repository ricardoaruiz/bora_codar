import { useRef } from 'react'

import avatar from '@/assets/images/foto.png'
import { Header, InputMessage, Message } from '@/components'

function App() {
  const inputMessageRef = useRef<HTMLInputElement | null>(null)

  return (
    <section
      className="
        flex
        flex-col
        w-full
        h-screen
        px-8
        py-6
        md:px-16
        md:py-8
        bg-chat-black-500
        rounded-lg
      "
    >
      {/* Header */}
      <Header
        avatar={avatar}
        name="Cecilia Sassaki"
        onClose={() => console.log('close chat')}
        isOnline={true}
      />

      {/* Mensagens */}
      <div className="px-0 py-4 md:px-0 flex-1 flex flex-col h-[calc(100vh-230px)] overflow-y-auto">
        {/* Data e hora */}
        <h3 className="text-xs text-chat-white font-normal text-center">
          Hoje 11:30
        </h3>

        <Message name="Cecilia" time="11:30" received>
          Tive uma ideia incrível para um projeto! 😍
        </Message>
        <Message name="Você" time="11:31">
          Sério? Me conta mais.
        </Message>
        <Message name="Cecilia" time="11:32" received>
          E se a gente fizesse um chat moderno e responsivo em apenas uma
          semana?
        </Message>
        <Message name="Você" time="11:33">
          #boraCodar! 🚀
        </Message>
      </div>

      {/* Campo de mensagem */}
      <div className="h-20 pt-6">
        <InputMessage
          ref={inputMessageRef}
          placeholder="Digite a sua mensagem"
          onSend={() => {
            console.log(inputMessageRef.current?.value)
            if (inputMessageRef.current) inputMessageRef.current.value = ''
          }}
        />
      </div>
    </section>
  )
}
export default App
