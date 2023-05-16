import image from '@/assets/images/image.svg'

import { PlayerControls, PlayerHeader, PlayerProgress } from '../components'

export const Player2 = () => {
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
      <PlayerProgress duration="03:22" remaining="00:12" played={80} />
    </div>
  )
}
