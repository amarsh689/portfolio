const path = require('path');
const fs = require('fs');
async function run() {
  try {
    const sharp = require('sharp');
    const pngToIco = require('png-to-ico');
    const publicDir = path.join(__dirname, '..', 'public');
    const src = path.join(publicDir, 'ap fevicon.png');
    if (!fs.existsSync(src)) {
      console.error('Source icon not found:', src);
      process.exit(1);
    }

    const sizes = [16, 32, 48, 64, 192, 512];
    const buffers = [];

    for (const size of sizes) {
      const outPath = path.join(publicDir, `favicon-${size}x${size}.png`);
      const buf = await sharp(src).resize(size, size, { fit: 'cover' }).png().toBuffer();
      await fs.promises.writeFile(outPath, buf);
      console.log('Written', outPath);
      if (size === 16 || size === 32 || size === 48) buffers.push(buf);
    }

    // apple-touch-icon (180x180)
    const appleBuf = await sharp(src).resize(180, 180, { fit: 'cover' }).png().toBuffer();
    await fs.promises.writeFile(path.join(publicDir, 'apple-touch-icon.png'), appleBuf);
    console.log('Written apple-touch-icon.png');

    // logo192 and logo512 (manifest)
    const logo192 = await sharp(src).resize(192, 192, { fit: 'cover' }).png().toBuffer();
    await fs.promises.writeFile(path.join(publicDir, 'logo192.png'), logo192);
    const logo512 = await sharp(src).resize(512, 512, { fit: 'cover' }).png().toBuffer();
    await fs.promises.writeFile(path.join(publicDir, 'logo512.png'), logo512);
    console.log('Written logo192.png and logo512.png');

    // Create favicon.ico from multiple PNG sizes
    const icoBuffer = await pngToIco(buffers);
    await fs.promises.writeFile(path.join(publicDir, 'favicon.ico'), icoBuffer);
    console.log('Written favicon.ico');

    console.log('All favicons generated successfully.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
