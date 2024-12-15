import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

import { input } from '@inquirer/prompts'
import { v4 as uuidv4 } from 'uuid'
import yargs from 'yargs'

const askQuestions = async () => {
  const date = await input({
    message: 'ニュースを作成する日付を入力してください (YYYY-MM-DD): ',
  })

  return { date }
}

const argv = yargs(process.argv.slice(2))
  .options({
    date: {
      type: 'string',
      description: 'お知らせを作成する日付',
    },
  })
  .help().argv

type Options = {
  date: Date
}

const createYYYYMMDD = (date: Date, delimiter = '-'): string => {
  const monthMM = (date.getMonth() + 1).toString().padStart(2, '0')
  const dayDD = date.getDate().toString().padStart(2, '0')

  return `${date.getFullYear().toString()}${delimiter}${monthMM}${delimiter}${dayDD}`
}

const parseArgv = (val: { date: string | undefined }): Options => {
  let date: Date

  if (val.date) {
    date = new Date(String(val.date))
  } else {
    date = new Date()
  }
  return {
    date,
  } as Options
}

const template = fs.readFileSync(path.join(process.cwd(), 'scripts', 'templates', 'news.md')).toString()

;(async () => {
  let options
  if (process.argv.length > 2) {
    // コマンドライン引数がある場合
    options = parseArgv(await argv)
  } else {
    // コマンドライン引数がない場合
    const answers = await askQuestions()
    options = {
      date: new Date(answers.date),
    }
  }

  const contentDir = path.join(process.cwd(), 'content', 'news')
  let distPath = path.join(contentDir, `${createYYYYMMDD(options.date, '-')}.md`)
  let count = 0

  while (fs.existsSync(distPath)) {
    count++
    distPath = path.join(contentDir, `${createYYYYMMDD(options.date, '-')}_${count.toString().padStart(2, '0')}.md`)
  }

  const replacements: Array<[string, string]> = [
    ['%{id}', uuidv4()],
    ['%{date}', createYYYYMMDD(options.date, '/')],
  ]

  let content = template

  replacements.forEach(([matcher, replacement]) => {
    content = content.replace(matcher, replacement)
  })

  if (!fs.existsSync(contentDir)) {
    await promisify(fs.mkdir)(contentDir)
  }
  await promisify(fs.writeFile)(distPath, content)

  // eslint-disable-next-line no-console
  console.log(`${distPath} を作成しました`)
})()
