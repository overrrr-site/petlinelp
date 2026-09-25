/**
 * 外部リンク。アプリストアへの導線は MGRe の流入経路計測URL を経由させる。
 *
 * 2026-09-14 ペットラインより受領（10-12月 初回送料当社負担CP 用）
 * - iOS:     d=ad_over_ios
 * - Android: d=ad_over_and
 * MGRe側の共通URLで、d パラメータだけが違う。UA判定で各ストアへ振り分けられる。
 *
 * Webサイト（EC本体）へのリンクは 2026-09-14 受領のUTM付きURL。
 * ※ utm_source=facebook 固定なので、P-Max経由の来訪者もEC側GA4では facebook 扱いになる。
 */
const MGRE_MEASURE_BASE =
  "https://insight.mgre.jp/measure/app_download/?ios_id=1670585352&ios_pt=117950995&android_id=jp.co.petline.members&ts=petline_petline&m=";

export const APP_STORE_URL = `${MGRE_MEASURE_BASE}&d=ad_over_ios`;

export const GOOGLE_PLAY_URL = `${MGRE_MEASURE_BASE}&d=ad_over_and`;

export const SHOP_URL =
  "https://drs.petline.co.jp/shop/default.aspx?utm_source=facebook&utm_medium=display&utm_campaign=202610freeshipping";
