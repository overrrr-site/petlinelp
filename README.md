# どうぶつ病院宅配便 LP

Astro 6 + Tailwind CSS 4 で構築したスマートフォン向け1ページLP。
Figmaデザイン（[doutaku-haitatsubin SP](https://www.figma.com/design/GnP92GUPGgvsSZ9Ua8gd08/?node-id=231-479)）を1:1で再現する。

## レイアウト方針

- **SP固定**: モバイル幅（`--container-sp`、初期値480px）でデザインを実装
- **PC表示**: コンテンツをスマホ幅で中央寄せ、両サイドは `bg-neutral-100`

## セットアップ

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的ファイルを出力
npm run preview  # dist/ をローカルで確認
```

要件: Node.js 22.12+

## ディレクトリ構成

```
src/
├── layouts/BaseLayout.astro     # html/head/meta、SP固定+PC中央寄せコンテナ
├── components/sections/         # Figmaの各セクションを1:1で実装
│   └── Hero.astro
├── pages/index.astro            # LPエントリーポイント
└── styles/global.css            # Tailwind + @theme トークン定義
public/
└── images/                      # Figmaから書き出した画像（webp推奨）
```

## デプロイ

`npm run build` で生成される `dist/` を以下のいずれかにデプロイ:

### Cloudflare Pages
1. GitHubリポジトリと連携
2. Build command: `npm run build`
3. Build output: `dist`

### Vercel
1. GitHubリポジトリと連携、または `npx vercel`
2. Framework preset: Astro（自動検出）

## Figma連携（実装フロー）

1. Claude Code 起動時にFigma MCP（`plugin:figma:figma`）のツールがロードされていること
2. `figma:figma-implement-design` スキルでセクションごとに実装
3. デザイントークンは `src/styles/global.css` の `@theme` ブロックに集約
4. 画像アセットは `public/images/` に配置し、`<img>` または `astro:assets` で参照
