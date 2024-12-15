import { fn } from '@storybook/test'

import { Content } from '@/types'

export const getLatestNews = fn(async (): Promise<Content[]> => {
  const contents: Content[] = [
    {
      id: '1',
      title: '2024/12/15 お知らせ1',
      date: new Date(),
      content: 'お知らせ1の内容',
    },
    {
      id: '2',
      title: '2024/12/14 お知らせ2',
      date: new Date(),
      content: 'お知らせ2の内容',
    },
    {
      id: '3',
      title: '2024/12/13 お知らせ3',
      date: new Date(),
      content: 'お知らせ3の内容',
    },
    {
      id: '4',
      title: '2024/12/12 お知らせ4',
      date: new Date(),
      content: 'お知らせ4の内容',
    },
    {
      id: '5',
      title: '2024/12/11 お知らせ5',
      date: new Date(),
      content: 'お知らせ5の内容',
    },
  ]
  return contents
}).mockName('getLatestNews')
