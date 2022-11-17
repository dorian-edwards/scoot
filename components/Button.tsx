import { ButtonProps } from '../Interfaces/Interfaces'

export default function Button({ text, type, styling }: ButtonProps) {
  return (
    <button
      type={`${type ? type : 'button'}`}
      className={`font-space text-[15px] bg-yellow text-snow leading-[25px] w-full max-w-[180px] h-[53px] block hover:bg-white hover:border-[3px] hover:border-yellow hover:text-yellow transition-colors ${
        styling || ''
      }`}
    >
      {text}
    </button>
  )
}
