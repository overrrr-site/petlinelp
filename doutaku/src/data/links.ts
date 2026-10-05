/**
 * 外部リンク。アプリストアへの導線は MGRe の流入経路計測URL を経由させる。
 *
 * 2026-09-14 ペットラインより受領（10-12月 初回送料当社負担CP 用）
 * - iOS:     d=ad_over_ios
 * - Android: d=ad_over_and
 * MGRe側の共通URLで、d パラメータだけが違う。UA判定で各ストアへ振り分けられる。
 *
 * ECへのリンクはLPに付いた流入パラメータをブラウザー側で引き継ぐ。
 * パラメータのない訪問に広告の流入元を付与しない。
 */
const MGRE_MEASURE_BASE =
  "https://insight.mgre.jp/measure/app_download/?ios_id=1670585352&ios_pt=117950995&android_id=jp.co.petline.members&ts=petline_petline&m=";

export const APP_STORE_URL = `${MGRE_MEASURE_BASE}&d=ad_over_ios`;

export const GOOGLE_PLAY_URL = `${MGRE_MEASURE_BASE}&d=ad_over_and`;

export const SHOP_URL = "https://drs.petline.co.jp/shop/default.aspx";

const ATTRIBUTION_PARAMS = [
  "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id",
  "gclid", "gbraid", "wbraid", "fbclid",
] as const;

export function buildShopUrl(search: string): string {
  const incoming = new URLSearchParams(search);
  const destination = new URL(SHOP_URL);

  for (const key of ATTRIBUTION_PARAMS) {
    const value = incoming.get(key);
    if (value?.trim()) destination.searchParams.set(key, value);
  }

  // Googleの自動タグだけで流入した場合も、EC側で媒体を識別できるよう補完する。
  // 明示的に設定されたUTMは優先し、fbclidだけでは広告／自然流入を推測しない。
  const hasGoogleClickId = ["gclid", "gbraid", "wbraid"].some(
    (key) => destination.searchParams.has(key),
  );
  if (hasGoogleClickId && !destination.searchParams.has("utm_source")) {
    destination.searchParams.set("utm_source", "google");
    if (!destination.searchParams.has("utm_medium")) {
      destination.searchParams.set("utm_medium", "cpc");
    }
  }

  return destination.toString();
}
