import Link from 'next/link'

interface MoreLinkProps {
  path: string
}

export default function MoreLink({ path }: MoreLinkProps) {
  return (
    <div className="text-right mt-6">
      <Link href={path} className="text-cyan-700 underline hover:opacity-70" id={`more-link-${path.replace('/', '')}`}>
        もっとみる
      </Link>
    </div>
  )
}
