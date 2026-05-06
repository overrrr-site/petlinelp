import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const sourceLogo = resolve(root, "public/images/hero/logo.webp");
const publicDir = resolve(root, "public");

const CREAM = "#f6efe7";
const PINK = "#c5385f";

async function ensure(path) {
  await mkdir(dirname(path), { recursive: true });
}

async function buildSquareMaster() {
  const fitted = await sharp(sourceLogo)
    .resize(900, 900, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: 1024,
      height: 1024,
      channels: 4,
      background: CREAM,
    },
  })
    .composite([{ input: fitted, gravity: "center" }])
    .png()
    .toBuffer();
}

async function writePng(master, size, outRel) {
  const out = resolve(publicDir, outRel);
  await ensure(out);
  await sharp(master).resize(size, size).png().toFile(out);
  console.log(`  wrote ${outRel} (${size}x${size})`);
}

async function writeIco(master) {
  const sizes = [16, 32, 48];
  const buffers = await Promise.all(
    sizes.map((s) => sharp(master).resize(s, s).png().toBuffer())
  );
  const ico = await pngToIco(buffers);
  const out = resolve(publicDir, "favicon.ico");
  await writeFile(out, ico);
  console.log(`  wrote favicon.ico (${sizes.join("/")})`);
}

async function writeSvg(master) {
  const buf = await sharp(master).resize(256, 256).png().toBuffer();
  const b64 = buf.toString("base64");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <rect width="256" height="256" fill="${CREAM}"/>
  <image href="data:image/png;base64,${b64}" width="256" height="256"/>
</svg>
`;
  const out = resolve(publicDir, "favicon.svg");
  await writeFile(out, svg);
  console.log(`  wrote favicon.svg (256x256, embedded PNG)`);
}

async function main() {
  console.log("[favicons] building square master from logo.webp");
  const master = await buildSquareMaster();

  console.log("[favicons] writing PNG variants");
  await writePng(master, 16, "favicon-16x16.png");
  await writePng(master, 32, "favicon-32x32.png");
  await writePng(master, 180, "apple-touch-icon.png");
  await writePng(master, 192, "android-chrome-192x192.png");
  await writePng(master, 512, "android-chrome-512x512.png");

  console.log("[favicons] writing favicon.ico");
  await writeIco(master);

  console.log("[favicons] writing favicon.svg");
  await writeSvg(master);

  console.log(`[favicons] done. theme=${PINK} bg=${CREAM}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
