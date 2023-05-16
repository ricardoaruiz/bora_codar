import image from '@/assets/images/image.svg'

import { PlayerControls, PlayerHeader, PlayerProgress } from '../components'

export const Player1 = () => {
  return (
    <div
      className="
        grid
        justify-center
        gap-7
        p-9
        bg-purple-player
        w-player1-width
        rounded-xl
      "
    >
      <img src={image} alt="Image sound" />
      <PlayerHeader title="Acorda Devinho" band="Banda Rocketseat" />
      <PlayerControls />
      <PlayerProgress duration="03:22" remaining="00:12" played={50} />
    </div>
  )
}
