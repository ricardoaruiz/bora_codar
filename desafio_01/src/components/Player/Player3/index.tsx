import image from '@/assets/images/image.svg'

import { PlayerControls, PlayerHeader } from '../components'

export const Player3 = () => {
  return (
    <div
      className="
        grid
        justify-center
        gap-7
        p-7
        bg-purple-player
        w-player2-width
        rounded-xl
      "
    >
      <div className="flex gap-7 items-center">
        <img src={image} alt="Image sound" className="w-[84px] h-[84px]" />
        <PlayerHeader title="Acorda Devinho" band="Banda Rocketseat" />
      </div>

      <PlayerControls />
    </div>
  )
}
