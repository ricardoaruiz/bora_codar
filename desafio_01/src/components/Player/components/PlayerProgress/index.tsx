type PlayerProgressProps = {
  duration: string
  remaining: string
  played: number
}

export const PlayerProgress = ({
  duration,
  remaining,
  played,
}: PlayerProgressProps) => {
  return (
    <div className="grid gap-3">
      <div className="h-2 relative">
        <div className="bg-progress opacity-30 h-2 rounded-full w-full absolute z-10" />
        <div
          className={`bg-progress opacity-80 h-2 rounded-full absolute z-20`}
          style={{ width: `${played}%` }}
        ></div>
      </div>

      <div className="flex justify-between text-time">
        <div>{duration}</div>
        <div>{remaining}</div>
      </div>
    </div>
  )
}
