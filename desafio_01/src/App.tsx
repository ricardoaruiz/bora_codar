import { Player1, Player2, Player3 } from '@/components'

function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-main">
      <div className="flex gap-8">
        <Player1 />

        <div className="flex flex-col gap-8">
          <Player2 />
          <Player3 />
        </div>
      </div>
    </div>
  )
}
export default App
