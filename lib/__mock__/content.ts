import { fn } from '@storybook/test'

import { Content, ContentType } from '@/types'

export const getLatestContents = fn(async (contentType: ContentType): Promise<Content[]> => {
  let contents: Content[] = []
  if (contentType === ContentType.NEWS) {
    contents = [
      {
        id: '1',
        title: 'お知らせ1',
        date: new Date('2024-12-15'),
        content: 'お知らせ1の内容',
      },
      {
        id: '2',
        title: 'お知らせ2',
        date: new Date('2024-12-14'),
        content: 'お知らせ2の内容',
      },
      {
        id: '3',
        title: 'お知らせ3',
        date: new Date('2024-12-13'),
        content: 'お知らせ3の内容',
      },
      {
        id: '4',
        title: 'お知らせ4',
        date: new Date('2024-12-12'),
        content: 'お知らせ4の内容',
      },
      {
        id: '5',
        title: 'お知らせ5',
        date: new Date('2024-12-11'),
        content: 'お知らせ5の内容',
      },
    ]
  } else if (contentType === ContentType.ARTICLE) {
    contents = [
      {
        id: '1',
        title: '記事1',
        date: new Date('2024-12-15'),
        content: '記事1の内容',
      },
      {
        id: '2',
        title: '記事2',
        date: new Date('2024-12-14'),
        content: '記事2の内容',
      },
      {
        id: '3',
        title: '記事3',
        date: new Date('2024-12-13'),
        content: '記事3の内容',
      },
      {
        id: '4',
        title: '記事4',
        date: new Date('2024-12-12'),
        content: '記事4の内容',
      },
      {
        id: '5',
        title: '記事5',
        date: new Date('2024-12-11'),
        content: '記事5の内容',
      },
    ]
  }
  return contents
}).mockName('getLatestContents')
