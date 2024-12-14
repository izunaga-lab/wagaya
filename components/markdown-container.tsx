import ReactMarkdown from 'react-markdown'

type Props = {
  markdown: string
}

export const MarkdownContainer = ({ markdown }: Props) => {
  return <ReactMarkdown className="markdown">{markdown}</ReactMarkdown>
}
