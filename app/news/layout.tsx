import { PageHeadingArea } from '@/components/page-heading-area'

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PageHeadingArea title="お知らせ" iconName="info" />
      {children}
    </div>
  )
}
