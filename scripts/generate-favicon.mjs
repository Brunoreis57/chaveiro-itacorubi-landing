import pngToIco from 'png-to-ico';
import fs from 'fs';
import path from 'path';

async function main() {
  // Use uma imagem quadrada com boa resolução para melhor qualidade.
  // Se preferir, troque por 'src/assets/chaveiroita.png'.
  const inputPng = path.resolve('public', 'favicon-16x16.png');
  const outputIco = path.resolve('public', 'favicon.ico');

  try {
    const buffer = await pngToIco(inputPng);
    fs.writeFileSync(outputIco, buffer);
    console.log('favicon.ico gerado em', outputIco);
  } catch (err) {
    console.error('Falha ao gerar favicon.ico:', err);
    process.exit(1);
  }
}

main();