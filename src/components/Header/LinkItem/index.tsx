import './linkItem.css'

interface LinkItemProps {
  icon: React.ReactNode
  text: string
  active?: boolean
}

const LinkItem: React.FC<LinkItemProps> = ({ icon, text, active = false }) => {
  return (
    <div
      className={`flex justify-start items-center w-full bg-grey1 rounded-md h-10 px-3 mt-3 link-item ${
        active && 'active'
      }`}
    >
      {icon}
      <p className="text-white ml-2 text-md">{text}</p>
    </div>
  )
}

export default LinkItem
