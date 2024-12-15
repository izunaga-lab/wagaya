import { PageHeadingArea } from '@/components/page-heading-area'

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PageHeadingArea title="記事" iconName="info" />
      {children}
    </div>
  )
}
