# petlinelp

Vercel デプロイ用モノレポ。サイトはサブディレクトリ単位で配置されます。

## 配置

| パス | 内容 |
|---|---|
| `doutaku/` | どうぶつ病院宅配便 初回1+1キャンペーン LP (Astro 6 + Tailwind 4) |

## デプロイ (Vercel)

ルートの [`vercel.json`](./vercel.json) で `doutaku/` を `/doutaku/` パスに配信:

- `buildCommand`: `cd doutaku && npm install && npm run build`
- `outputDirectory`: `doutaku/dist`
- `rewrites`: `/doutaku/*` → `/*`

## Basic 認証

ルートの [`middleware.ts`](./middleware.ts) で全パスに Basic 認証を要求します。

Vercel の Project Settings → Environment Variables で以下を設定してください:

| Key | 値 (例) |
|---|---|
| `BASIC_AUTH_USER` | `admin` |
| `BASIC_AUTH_PASS` | (お好みの値) |

未設定時のデフォルトは `admin` / `doutaku2026`。
