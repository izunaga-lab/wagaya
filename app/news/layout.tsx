import { PageHeadingArea } from '@/components/page-heading-area'

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PageHeadingArea title="お知らせ" iconName="info" />
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  )
}
