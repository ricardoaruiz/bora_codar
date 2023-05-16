import { Back, ControlButton, Forward, Play } from './components'

type PlayerControlsProps = {
  onBack?: () => void
  onPlay?: () => void
  onForward?: () => void
}

export const PlayerControls = ({
  onBack,
  onPlay,
  onForward,
}: PlayerControlsProps) => {
  return (
    <div className="flex justify-around">
      <ControlButton
        onClick={() => onBack && onBack()}
        aria-label="back button"
        icon={<Back />}
      />
      <ControlButton
        onClick={() => onPlay && onPlay()}
        aria-label="play button"
        icon={<Play />}
      />
      <ControlButton
        onClick={() => onForward && onForward()}
        aria-label="forward button"
        icon={<Forward />}
      />
    </div>
  )
}
