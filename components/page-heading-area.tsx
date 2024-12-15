import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'

type Props = {
  title: string
  iconName: keyof typeof dynamicIconImports
}

export const PageHeadingArea = ({ title, iconName }: Props) => {
  const LucideIcon = dynamic(dynamicIconImports[iconName])

  return (
    <>
      <div className="h-20 bg-cyan-700"></div>

      <div className="container mx-auto px-4 -mt-10 mb-4">
        <div className="bg-white shadow-lg rounded-lg text-3xl font-extrabold p-6 flex items-center">
          <LucideIcon className="text-cyan-700 min-w-10 min-h-10" />
          <span className="ml-4">{title}</span>
        </div>
      </div>
    </>
  )
}
