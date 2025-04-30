# Sarvam AI SDK Provider

The **Sarvam AI SDK Provider** is a library developed to integrate with the Vercel AI SDK. This library brings Speech to Text (STT) capabilities to your applications, allowing for seamless interaction with audio and text data.

Discover more of **sarvam-ai-provider**, refer to Vercel’s [API Reference](https://sdk.vercel.ai/providers/community-providers/sarvam)

Explore the [Sarvam API Documentation](https://docs.sarvam.ai/api-reference-docs/endpoints/speech-to-text) to gain deeper control and flexibility.

## Installation

```bash
npm install sarvam-ai-provider
```

## Before We Begin

### Get Your API Key

- Obtain your API key from the [Sarvam AI Dashboard](https://dashboard.sarvam.ai/auth/signin)
- Intialize the Sarvam AI SDK with your API key and set the headers in your code.

## Usage

### Transcription

```typescript
import { createSarvam } from 'sarvam-ai-provider';
import { experimental_transcribe as transcribe } from 'ai';
import { readFile } from 'fs/promises';

const sarvam = createSarvam({
  headers: {
    'api-subscription-key': 'YOUR_API_KEY',
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
```

### Output

```text
hello from sarvam ai.
```

## Features

- High-quality Speech-to-Text synthesis

## Supported Models

- `saarika:v1`
- `saarika:v2`
- `saarika:flash`

## Provider Options

When you call `transcribe`, you can pass extra settings in `providerOptions.sarvam`:

- `language_code?`  
  • Type: `'unknown' | 'hi-IN' | 'bn-IN' | 'kn-IN' | 'ml-IN' | 'mr-IN' | 'od-IN' | 'pa-IN' | 'ta-IN' | 'te-IN' | 'en-IN' | 'gu-IN'`  
  • Required for `saarika:v1`; optional for `saarika:v2`.  
  • Default: API auto-detect (unless you set `'unknown'`).

- `with_timestamps?`  
  • Type: `boolean`  
  • When `true`, each word/token will include start/end timestamps.  
  • Default: `false`

- `with_diarization?`  
  • Type: `boolean`  
  • When `true`, enables speaker diarization (Beta).  
  • Default: `false`

- `num_speakers?`  
  • Type: `number | null`  
  • Number of distinct speakers to detect (only when `with_diarization` is `true`).
