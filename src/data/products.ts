export type Brand = "pink" | "blue" | "green";

export interface ProductEntry {
  src: string;
  alt: string;
  brand: Brand;
  brandLabel: string;
  name: string;
  desc: string;
}

export interface ProductCategory {
  pet: "dog" | "cat";
  label: string;
  items: ProductEntry[];
}

const dog = (file: string) => `/images/products/dog/${file}`;
const cat = (file: string) => `/images/products/cat/${file}`;

const drsCare = (label: string): Pick<ProductEntry, "brand" | "brandLabel"> => ({
  brand: "pink",
  brandLabel: label,
});
const dietics = {
  brand: "blue" as const,
  brandLabel: "Dietics",
};
const drsDiet = {
  brand: "green" as const,
  brandLabel: "Dr.'s Diet",
};

export const productCategories: ProductCategory[] = [
  {
    pet: "dog",
    label: "食物アレルギー",
    items: [
      {
        src: dog("amino-protect-potato.webp"),
        alt: "アミノプロテクトケアポテト",
        ...drsCare("Dr.'s Care"),
        name: "アミノプロテクトケアポテト",
        desc: "フード中のたんぱく源を植物性のポテトプロテインのみに制限することで食物アレルギーに対応した療法食。",
      },
      {
        src: dog("amino-protect-pea.webp"),
        alt: "アミノプロテクトケアえんどう豆",
        ...drsCare("Dr.'s Care"),
        name: "アミノプロテクトケアえんどう豆",
        desc: "フード中のたんぱく源をえんどう豆たんぱく・加水分解チキンレバーパウダーのみに制限することで食物アレルギーに対応した療法食。",
      },
      {
        src: dog("allergen-select-cut.webp"),
        alt: "アレルゲンセレクトカット",
        ...dietics,
        name: "アレルゲンセレクトカット",
        desc: "フード中の原材料に牛肉・乳・小麦・卵・鶏肉・羊肉を使用しないことで食物アレルギーに対応した療法食。魚由来の原材料を使用することで嗜好性に配慮。",
      },
    ],
  },
  {
    pet: "dog",
    label: "ストルバイト尿石症・<br />シュウ酸カルシウム尿石症",
    items: [
      {
        src: dog("urinary-care.webp"),
        alt: "尿石ケア",
        ...drsCare("Dr.'s Care"),
        name: "尿石ケア",
        desc: "フード中のミネラルやアミノ酸を調整することでストルバイト尿石症およびシュウ酸カルシウム尿石症に対応した療法食。",
      },
      {
        src: dog("urinary-care-wet.webp"),
        alt: "尿石ケア（ウェット）",
        ...drsCare("Dr.'s Care"),
        name: "尿石ケア（ウェット）",
        desc: "フード中のミネラルやアミノ酸を調整することでストルバイト尿石症およびシュウ酸カルシウム尿石症に対応した療法食です。ウェットタイプならではの原材料や形状により食事療法の選択肢を増やすことができます。",
      },
    ],
  },
  {
    pet: "dog",
    label: "ストルバイト尿石症",
    items: [
      {
        src: dog("struvite-block.webp"),
        alt: "ストルバイトブロック",
        ...dietics,
        name: "ストルバイトブロック",
        desc: "フード中のミネラルバランスを調整することでストルバイト尿石症対応した療法食。鶏由来の原材料を使用することで嗜好性に配慮。",
      },
    ],
  },
  {
    pet: "dog",
    label: "消化器疾患",
    items: [
      {
        src: dog("stomach-care.webp"),
        alt: "ストマックケア",
        ...drsCare("Dr.'s Care"),
        name: "ストマックケア",
        desc: "フード中の脂質の含有量を調整することで消化器疾患に対応した療法食。腸内環境の健康維持に配慮して乳酸菌成分・可溶性食物繊維（フラクトオリゴ糖・難消化性デキストリン）を配合。",
      },
      {
        src: dog("stomach-care-light.webp"),
        alt: "ストマックケア 低脂肪",
        ...drsCare("Dr.'s Care"),
        name: "ストマックケア 低脂肪",
        desc: "フード中の脂質・ナトリウムの含有量を調整することで消化器疾患に対応した療法食。腸内環境の健康維持に配慮して乳酸菌成分・可溶性食物繊維（フラクトオリゴ糖・難消化性デキストリン）を配合。",
      },
      {
        src: dog("digestive-care-wet.webp"),
        alt: "消化器ケア低脂肪（ウェット）",
        ...drsCare("Dr.'s Care"),
        name: "消化器ケア低脂肪（ウェット）",
        desc: "フード中の脂質の含有量を調整することで消化器疾患に対応した療法食。腸内環境の健康維持に配慮して乳酸菌成分・オリゴ糖を配合しています。ウェットタイプならではの原材料や形状により食事療法の選択肢を増やすことができます。",
      },
      {
        src: dog("digest-aid.webp"),
        alt: "ダイジェストエイド",
        ...dietics,
        name: "ダイジェストエイド",
        desc: "フード中の脂質含有量を調整するとともに、原材料に牛肉・乳・小麦・卵・鶏肉・羊肉を使用しないことで消化器疾患に対応した療法食。魚由来の原材料を使用することで嗜好性に配慮。",
      },
    ],
  },
  {
    pet: "dog",
    label: "慢性腎臓病",
    items: [
      {
        src: dog("kidney-care.webp"),
        alt: "キドニーケア",
        ...drsCare("Dr.'s Care"),
        name: "キドニーケア",
        desc: "フード中のリン・たんぱく質・ナトリウムの含有量を調整することで慢性腎臓病に対応した療法食。慢性腎臓病に配慮して、オメガ3脂肪酸（DHA・EPA）を含有しています。",
      },
      {
        src: dog("kidney-care-wet.webp"),
        alt: "キドニーケア（ウェット）",
        ...drsCare("Dr.'s Care"),
        name: "キドニーケア（ウェット）",
        desc: "フード中のリン・たんぱく質・ナトリウムの含有量を調整することで慢性腎臓病に対応した療法食。ウェットタイプならではの原材料や形状により食事療法の選択肢を増やすことができます。",
      },
      {
        src: dog("kidney-keep.webp"),
        alt: "キドニーキープ",
        ...dietics,
        name: "キドニーキープ",
        desc: "フード中のリン・たんぱく質・ナトリウムの含有量を調整することで慢性腎臓病に対応した療法食。鶏由来の原材料を使用することで嗜好性に配慮。",
      },
    ],
  },
  {
    pet: "dog",
    label: "慢性心臓病",
    items: [
      {
        src: dog("heart-care.webp"),
        alt: "ハートケア",
        ...drsCare("Dr.'s Care"),
        name: "ハートケア",
        desc: "フード中のナトリウムの含有量を調整することで慢性心臓病に対応した療法食。関節の健康維持に配慮して、グルコサミンを配合しています。",
      },
    ],
  },
  {
    pet: "dog",
    label: "減量・関節",
    items: [
      {
        src: dog("weight-joint-care.webp"),
        alt: "ウェイト＆ジョイントケア",
        ...drsCare("Dr.'s Care"),
        name: "ウェイト＆ジョイントケア",
        desc: "フード中のカロリーを調整することで減量に対応した療法食。関節の健康維持に配慮して、グルコサミン・コンドロイチン硫酸を配合。",
      },
      {
        src: dog("slim-support.webp"),
        alt: "スリムサポート",
        ...dietics,
        name: "スリムサポート",
        desc: "フード中のカロリーを調整することで減量に対応した療法食。鶏由来の原材料を使用することで嗜好性に配慮。",
      },
    ],
  },
  {
    pet: "dog",
    label: "健康維持（総合栄養食）",
    items: [
      {
        src: dog("diet-weight-mgmt.webp"),
        alt: "Dr.'s Diet",
        ...drsDiet,
        name: "パピー / メインテナンス(pHエイド) / シニア / 避妊・去勢 / 体重管理 / 皮ふと毛づや",
        desc: "Dr.'s Diet：健康な時から獣医師のアドバイスのもとで食事を選ぶ。ライフステージ・機能性に合わせた国産プレミアムフード。",
      },
    ],
  },
  {
    pet: "cat",
    label: "ストルバイト尿石症・<br />シュウ酸カルシウム尿石症",
    items: [
      {
        src: cat("urinary-care.webp"),
        alt: "尿石ケア",
        ...drsCare("Dr.'s Care"),
        name: "尿石ケア",
        desc: "フード中のミネラルやアミノ酸を調整することでストルバイト尿石症およびシュウ酸カルシウム尿石症に対応した療法食です。心身の健康維持に配慮してトリプトファンを配合。",
      },
      {
        src: cat("urinary-care-fish-wet.webp"),
        alt: "尿石ケア フィッシュ（ウェット）",
        ...drsCare("Dr.'s Care"),
        name: "尿石ケア フィッシュ（ウェット）",
        desc: "フード中のミネラルやアミノ酸を調整することでストルバイト尿石症に対応した療法食。ウェットタイプならではの原材料や形状により食事療法の選択肢を増やすことができます。",
      },
      {
        src: cat("urinary-care-chicken-wet.webp"),
        alt: "尿石ケア チキン（ウェット）",
        ...drsCare("Dr.'s Care"),
        name: "尿石ケア チキン（ウェット）",
        desc: "フード中のミネラルやアミノ酸を調整することでストルバイト尿石症に対応した療法食。ウェットタイプならではの原材料や形状により食事療法の選択肢を増やすことができます。",
      },
    ],
  },
  {
    pet: "cat",
    label: "ストルバイト尿石症",
    items: [
      {
        src: cat("struvite-care-starter.webp"),
        alt: "ストルバイトケア スターター",
        ...drsCare("Dr.'s Care"),
        name: "ストルバイトケア スターター",
        desc: "フード中のミネラルやアミノ酸を調整することでストルバイト尿石症に対応した療法食。",
      },
      {
        src: cat("struvite-care-fish.webp"),
        alt: "ストルバイトケア フィッシュテイスト",
        ...drsCare("Dr.'s Care"),
        name: "ストルバイトケア フィッシュテイスト",
        desc: "フード中のミネラルやアミノ酸を調整することでストルバイト尿石症に対応した療法食。",
      },
      {
        src: cat("struvite-care-chicken.webp"),
        alt: "ストルバイトケア チキンテイスト",
        ...drsCare("Dr.'s Care"),
        name: "ストルバイトケア チキンテイスト",
        desc: "フード中のミネラルやアミノ酸を調整することでストルバイト尿石症に対応した療法食。",
      },
      {
        src: cat("struvite-care-light.webp"),
        alt: "ストルバイトケア ライト",
        ...drsCare("Dr.'s Care"),
        name: "ストルバイトケア ライト",
        desc: "フード中のミネラルやアミノ酸を調整することでストルバイト尿石症に対応した療法食。体重管理のために、カロリーを調整。",
      },
      {
        src: cat("struvite-block.webp"),
        alt: "ストルバイトブロック",
        ...dietics,
        name: "ストルバイトブロック",
        desc: "フード中のミネラルバランスを調整することでストルバイト尿石症対応した療法食。魚由来の原材料を使用することで嗜好性に配慮。",
      },
    ],
  },
  {
    pet: "cat",
    label: "消化器疾患",
    items: [
      {
        src: cat("stomach-care.webp"),
        alt: "ストマックケア（可溶性繊維）",
        ...drsCare("Dr.'s Care"),
        name: "ストマックケア（可溶性繊維）",
        desc: "可溶性食物繊維を配合するとともに、フード中の脂質含有量を調整することで消化器疾患に対応した療法食。",
      },
    ],
  },
  {
    pet: "cat",
    label: "慢性腎臓病",
    items: [
      {
        src: cat("kidney-care-fish.webp"),
        alt: "キドニーケア フィッシュテイスト",
        ...drsCare("Dr.'s Care"),
        name: "キドニーケア フィッシュテイスト",
        desc: "リン・たんぱく質・ナトリウムの含有量を調整することで慢性腎臓病に対応した療法食。慢性腎臓病に配慮して、オメガ3脂肪酸（DHA・EPA）を含有しています。",
      },
      {
        src: cat("kidney-care-chicken.webp"),
        alt: "キドニーケア チキンテイスト",
        ...drsCare("Dr.'s Care"),
        name: "キドニーケア チキンテイスト",
        desc: "リン・たんぱく質・ナトリウムの含有量を調整することで慢性腎臓病に対応した療法食。慢性腎臓病に配慮して、オメガ3脂肪酸（DHA・EPA）を含有しています。",
      },
      {
        src: cat("kidney-care-plus.webp"),
        alt: "キドニーケア プラス（可溶性繊維）",
        ...drsCare("Dr.'s Care"),
        name: "キドニーケア プラス（可溶性繊維）",
        desc: "リン・たんぱく質・ナトリウムの含有量を調整することで慢性腎臓病に対応した療法食。慢性腎臓病に配慮して、オメガ3脂肪酸（DHA・EPA）を含有するとともに、腸内環境の健康維持に配慮して可溶性食物繊維を配合。",
      },
      {
        src: cat("kidney-care-fish-wet.webp"),
        alt: "キドニーケア フィッシュ（ウェット）",
        ...drsCare("Dr.'s Care"),
        name: "キドニーケア フィッシュ（ウェット）",
        desc: "リン・たんぱく質・ナトリウムの含有量を調整することで慢性腎臓病に対応した療法食。ウェットタイプならではの原材料や形状により食事療法の選択肢を増やすことができます。",
      },
      {
        src: cat("kidney-care-chicken-wet.webp"),
        alt: "キドニーケア チキン（ウェット）",
        ...drsCare("Dr.'s Care"),
        name: "キドニーケア チキン（ウェット）",
        desc: "リン・たんぱく質・ナトリウムの含有量を調整することで慢性腎臓病に対応した療法食。ウェットタイプならではの原材料や形状により食事療法の選択肢を増やすことができます。",
      },
      {
        src: cat("kidney-keep-rich-wet.webp"),
        alt: "キドニーキープ リッチテイスト",
        ...dietics,
        name: "キドニーキープ リッチテイスト",
        desc: "フード中のリン・たんぱく質・ナトリウムの含有量を調整することで慢性腎臓病に対応した療法食。4種のうまみパウダーを使用することで嗜好性に配慮。",
      },
      {
        src: cat("kidney-keep.webp"),
        alt: "キドニーキープ",
        ...dietics,
        name: "キドニーキープ",
        desc: "フード中のリン・たんぱく質・ナトリウムの含有量を調整することで慢性腎臓病に対応した療法食。魚由来の原材料を使用することで嗜好性に配慮。",
      },
      {
        src: cat("kidney-keep-wet.webp"),
        alt: "キドニーキープ（ウェット）",
        ...dietics,
        name: "キドニーキープ（ウェット）",
        desc: "フード中のリン・たんぱく質・ナトリウムの含有量を調整することで慢性腎臓病に対応した療法食。ウェットタイプならではの原材料や形状により食事療法の選択肢を増やすことができます。",
      },
    ],
  },
  {
    pet: "cat",
    label: "減量・関節",
    items: [
      {
        src: cat("slim-support.webp"),
        alt: "スリムサポート",
        ...dietics,
        name: "スリムサポート",
        desc: "フード中のカロリーを調整することで減量に対応した療法食。魚由来の原材料を使用することで嗜好性に配慮。",
      },
    ],
  },
  {
    pet: "cat",
    label: "健康維持（総合栄養食）",
    items: [
      {
        src: cat("diet-weight-mgmt.webp"),
        alt: "Dr.'s Diet",
        ...drsDiet,
        name: "キティ / メインテナンス(pHエイド) / シニア / ハイシニア / 避妊・去勢 / 体重管理",
        desc: "Dr.'s Diet：健康な時から獣医師のアドバイスのもとで食事を選ぶ。ライフステージ・機能性に合わせた国産プレミアムフード。",
      },
    ],
  },
];
