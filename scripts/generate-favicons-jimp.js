const path = require('path');
const fs = require('fs');

async function run() {
  try {
    const Jimp = require('jimp');
    const pngToIco = require('png-to-ico');

    const publicDir = path.join(__dirname, '..', 'public');
    const srcPath = path.join(publicDir, 'ap fevicon.png');
    if (!fs.existsSync(srcPath)) {
      console.error('Source icon not found:', srcPath);
      process.exit(1);
    }

    const sizes = [16, 32, 48, 64, 192, 512];
    const tmpBuffers = [];

    const image = await Jimp.read(srcPath);

    for (const size of sizes) {
      const outPath = path.join(publicDir, `favicon-${size}x${size}.png`);
      const resized = image.clone().cover(size, size);
      await resized.writeAsync(outPath);
      console.log('Written', outPath);
      if (size === 16 || size === 32 || size === 48) {
        tmpBuffers.push(await resized.getBufferAsync(Jimp.MIME_PNG));
      }
    }

    // apple-touch-icon
    const apple = image.clone().cover(180, 180);
    await apple.writeAsync(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('Written apple-touch-icon.png');

    // logo sizes
    const logo192 = image.clone().cover(192, 192);
    await logo192.writeAsync(path.join(publicDir, 'logo192.png'));
    const logo512 = image.clone().cover(512, 512);
    await logo512.writeAsync(path.join(publicDir, 'logo512.png'));
    console.log('Written logo192.png and logo512.png');

    // create favicon.ico from buffers
    const icoBuffer = await pngToIco(tmpBuffers);
    await fs.promises.writeFile(path.join(publicDir, 'favicon.ico'), icoBuffer);
    console.log('Written favicon.ico');

    console.log('Favicons generated successfully.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
