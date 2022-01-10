type Props = {
  type: string
  name: string
  id: string
}

const Input = ({ type, name, id }: Props) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md max-w-lg h-10 px-4"
    />
  )
}

export default Input
