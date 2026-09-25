# Figma vector assets

Source file: https://www.figma.com/design/uVdty0R6fQw0Zt6uxhaWkG
Exported on 2026-09-16 from the editable traced design.

| Asset | Figma node |
| --- | --- |
| ratings-decoration.svg | 4:2 |
| rating-star.svg | 9:5 |
| promo-decoration.svg | 17:18 |
| promo-coupon.svg | 17:46 |
| campaign-decoration.svg | 20:18 |
| campaign-coupon.svg | 20:33 |
| megaphone.svg | 20:40 |
| campaign-logo.svg (02 / 03 shared) | 41:18 / 41:34 (adapted from user-supplied download.svg) |
| hero-title.svg (previous revision) | 34:18 |
| hero-decoration.svg | 21:37 |
| hero-coupon.svg | 21:27 |
| hero-cta-decoration.svg | 21:99 |

Only decoration, coupon geometry, and the FV title are exported. Ancestor frame background
rectangles inserted by the exporter were removed to preserve transparency.
No raster images or embedded image data are present in these SVGs.
All other text is rendered by Astro. Logos, products, and official store badges reuse
the existing assets in images/hero, images/promo, and images/footer.

The FV title was refined in Figma with auto layout and exported as outlined
vectors. Its accessible heading remains in HTML. Hero decoration exports were
updated alongside the title spacing and the registration note above the CTA.

The shared campaign logo is based on the user-supplied `download.svg`.
On 2026-09-17, its main lettering was changed in Figma to「送料当社負担」
using Noto Sans JP Black, preserving the original badge and subtitle vectors.
The SVG export contains outlined lettering. In Astro, the middle promo and
campaign-details sections share it. The 950-yen amount/shipping block is the
main hero offer, following the requested swap on 2026-09-17.
The hero coupon divider is CSS so it aligns with the right-hand text column;
its former SVG divider was removed. Promo decoration was moved up with the
shorter heading block, and its former heading accent lines were removed.

The shared logo's main text was enlarged from 114 to 130 logical pixels.
Heading rays now belong to the hero heading markup; the promo download
rays use CSS anchored to that label, replacing the SVG's fixed coordinates.

The campaign SVG viewBox is vertically cropped to `0 58 759 175`, with about
8 SVG units of padding above/below the artwork. Paths and horizontal scale
are unchanged. Astro image dimensions and surrounding spacing match the crop.


On 2026-09-17, the hero and promo product pair was replaced by the same four
products from approved Figma node 70:18 (02 uses 77:18): Dr.'s Care dog/cat,
then Dietics dog/cat. ProductLineup.astro shares official package images and
Figma-exported SVG silhouette masks from images/lineup across both sections.
The product images remain separate and have descriptive Japanese alt text.
Upper product-area paws were repositioned: left above, right below the lineup.
The promo's lower app-download paw decorations were preserved.
