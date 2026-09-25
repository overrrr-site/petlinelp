/**
 * キャンペーン情報の一元管理。
 * 日付・コードをコンポーネントに直書きしないこと。
 *
 * 2026-09-14 ペットライン確定値（10-12月 初回送料当社負担CP）
 * - キャンペーンコード: 13571
 * - EC側のコード有効期間: 2026/6/1(月) 9:00 〜 2027/2/28(日) 23:59
 * - 画面上は終了日のみ表示、開始日は規約欄のみ
 */
export const CAMPAIGN_NAME = "初回送料当社負担キャンペーン";
export const CAMPAIGN_CODE = "13571";

/** FV / Promo / Flow などで使う短い期日表記 */
export const CAMPAIGN_END_SHORT = "2027/2/28(日) 23:59まで";

/** 規約欄のキャンペーン期間 */
export const CAMPAIGN_PERIOD_START = "2026年6月1日(月) 9:00〜";
export const CAMPAIGN_PERIOD_END = "2027年2月28日(日) 23:59";

/** 通常時の送料条件（常設情報） */
export const FREE_SHIPPING_THRESHOLD = "7,500円（税込）";
export const NORMAL_SHIPPING_FEE = "950円（税込）";
