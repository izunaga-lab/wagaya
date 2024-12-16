# wagaya
伊豆永ゼミのホームページを構築するリポジトリです！

## 開発環境構築

1. リポジトリをクローン
    ```bash
    git clone https://github.com/izunaga-lab/wagaya.git
    ```
    - デフォルトブランチ `main` へPRを作成してください

2. 依存関係をインストール
    ```bash
    pnpm install
    ```
    - パッケージマネージャーは `pnpm` を使用しています
    - `pnpm` がインストールされていない場合は、[公式サイト](https://pnpm.io/installation) を参照してインストールしてください

3. 開発サーバーを起動
    ```bash
    pnpm dev
    ```
    - デフォルトポート `3000` で起動します
    - ブラウザで `http://localhost:3000` にアクセスしてください

4. `Storybook` を起動
    ```bash
    pnpm storybook
    ```
    - デフォルトポート `6006` で起動します
    - ブラウザで `http://localhost:6006` にアクセスしてください

## 記事の作成
1. `content` ディレクトリに記事を作成します
    ```bash
    pnpm new-content --content <news or article> --date <YYYY-MM-DD>
    ```
    - `news` はニュース記事
    - `article` は記事
    - `date` は記事の日付
2. 記事の内容を作成します
    - 1. で作成されたファイルに記事の内容を作成します
    - 記事の内容はMarkdown形式で作成します

## ビルド

```bash
pnpm build
```
- ビルドは `out` ディレクトリに出力されます
- `next.config.mjs` で `output: 'export'` と設定されているため、静的サイトとしてビルドされます

## デプロイ
- `main` ブランチへのプッシュで自動デプロイされます。
- デプロイは [GitHub Actions](https://github.com/izunaga-lab/wagaya/actions/workflows/deploy.yml) で行われます。
- デプロイ先は [GitHub Pages](https://izunaga-lab.github.io/wagaya/) です。
