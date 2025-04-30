import { createSarvam } from '@ai-sdk/sarvam';
import { experimental_transcribe as transcribe } from 'ai';
import { readFile } from 'fs/promises';

const sarvam = createSarvam({
  headers: {
    'api-subscription-key': '',
  },
});

const main = async () => {
  const result = await transcribe({
    model: sarvam.transcription('saarika:v2'),
    audio: await readFile('./src/transcript-test.mp3'),
    providerOptions: {
      sarvam: {
        language_code: 'en-IN',
      },
    },
  });

  console.log(result.text);
};

main();
