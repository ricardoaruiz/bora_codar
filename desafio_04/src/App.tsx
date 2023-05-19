import { useRef } from 'react'

import avatar from '@/assets/images/foto.png'
import { Header, InputMessage, Message, Messages } from '@/components'

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
      <Header
        avatar={avatar}
        name="Cecilia Sassaki"
        isOnline={true}
        onClose={() => console.log('close chat')}
      />

      <Messages date="Hoje 11h30">
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
      </Messages>

      <InputMessage
        ref={inputMessageRef}
        placeholder="Digite a sua mensagem"
        onSend={() => {
          console.log(inputMessageRef.current?.value)
          if (inputMessageRef.current) inputMessageRef.current.value = ''
        }}
      />
    </section>
  )
}
export default App
