import close from '@/assets/images/close.svg'
import online from '@/assets/images/online.png'

type HeaderProps = {
  avatar: string
  name: string
  isOnline: boolean
  onClose: () => void
}

export const Header = ({ avatar, name, isOnline, onClose }: HeaderProps) => {
  return (
    <div className="flex items-center h-20">
      {/* Avatar */}
      <img src={avatar} alt="Avatar" className="w-12 h-12" />

      {/* User data */}
      <div className="flex-1 flex flex-col gap-1 items-start ml-4">
        <p className="text-chat-white text-base font-bold">{name}</p>

        {isOnline ? (
          <img src={online} alt="On line" />
        ) : (
          <div className="h-[14px]"></div>
        )}
      </div>

      <button
        type="button"
        className="
        flex
        justify-center
        items-center
        w-8
        h-8
        p-2
        rounded-full
        hover:bg-black
        transition-all
        duration-300"
      >
        <img src={close} alt="close" onClick={onClose} />
      </button>
    </div>
  )
}
