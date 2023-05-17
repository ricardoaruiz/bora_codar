import cursorDefault from '@/assets/images/cursor-default.svg'
import cursorLoading from '@/assets/images/cursor-loading.svg'
import cursorMove from '@/assets/images/cursor-move.svg'
import cursorNotAllowed from '@/assets/images/cursor-not-allowed.svg'

import { Button } from './components'

function App() {
  return (
    <div className="bg-dark1 h-screen w-full">
      <div className="grid grid-cols-[160px_1fr] h-full">
        {/* Lateral esquerda */}
        <div className="pt-[96px] bg-dark2 h-full grid grid-rows-[repeat(6,48px)] gap-10">
          <p className="flex justify-center items-center uppercase text-white">
            default
          </p>
          <p className="flex justify-center items-center uppercase text-white">
            hover
          </p>
          <p className="flex justify-center items-center uppercase text-white">
            focus
          </p>
          <p className="flex justify-center items-center uppercase text-white">
            disabled
          </p>
          <p className="flex justify-center items-center uppercase text-white">
            loading
          </p>
          <p className="flex justify-center items-center uppercase text-white">
            movable
          </p>
        </div>

        {/* Lateral direita */}
        <div className="grid grid-rows-[64px_calc(100vh-64px)]">
          {/* Header */}
          <div className="px-8 py-4 bg-dark2 grid grid-cols-4 text-white uppercase">
            <p className="flex justify-center items-center">botão primário</p>
            <p className="flex justify-center items-center">botão secundário</p>
            <p className="flex justify-center items-center">botão terciário</p>
            <p className="flex justify-center items-center">cursor</p>
          </div>

          {/* Botões */}
          <div className="p-8 grid grid-cols-4 gap-3">
            <div className="grid grid-rows-[repeat(6,48px)] gap-10 justify-items-center">
              <Button>default primary</Button>
              <Button>hover primary</Button>
              <Button>focus primary</Button>
              <Button disabled>disabled primary</Button>
              <Button isLoading>loading primary</Button>
              <Button isMovable>movable primary</Button>
            </div>

            <div className="grid grid-rows-[repeat(6,48px)] gap-10 justify-items-center">
              <Button variant="secondary">default secondary</Button>
              <Button variant="secondary">hover secondary</Button>
              <Button variant="secondary">focus secondary</Button>
              <Button variant="secondary" disabled>
                disabled secondary
              </Button>
              <Button variant="secondary" isLoading>
                loading secondary
              </Button>
              <Button variant="secondary" isMovable>
                movable secondary
              </Button>
            </div>

            <div className="grid grid-rows-[repeat(6,48px)] gap-10 justify-items-center">
              <Button variant="tertiary">default tertiary</Button>
              <Button variant="tertiary">hover tertiary</Button>
              <Button variant="tertiary">focus tertiary</Button>
              <Button variant="tertiary" disabled>
                disabled tertiary
              </Button>
              <Button variant="tertiary" isLoading>
                loading tertiary
              </Button>
              <Button variant="tertiary" isMovable>
                movable tertiary
              </Button>
            </div>

            <div className="grid grid-rows-[repeat(6,48px)] gap-10 justify-items-center">
              <img src={cursorDefault} alt="cursor default" />
              <img src={cursorDefault} alt="cursor default" />
              <img src={cursorDefault} alt="cursor default" />
              <img src={cursorNotAllowed} alt="cursor not allowed" />
              <img src={cursorLoading} alt="cursor loading" />
              <img src={cursorMove} alt="cursor move" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
