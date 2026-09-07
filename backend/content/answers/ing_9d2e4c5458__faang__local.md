---
qid: ing_9d2e4c5458__faang__local
question: 'Explain: Practical coding: write a service that proxies streaming TTS to
  a browser and cancels cleanly when the user navigates away.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 621
total_tokens: 871
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:49:40-05:00'
sources: []
---

**Clarify**

We need a backend endpoint that streams synthesized speech (TTS) to the browser. The client may leave the page or cancel the request; when that happens we must stop the TTS API call and close the HTTP stream cleanly, avoiding orphaned connections or wasted resources.

Assumptions:
- Browser uses `fetch`/`XMLHttpRequest` with `responseType: 'stream'`.
- TTS provider exposes a streaming endpoint (e.g., via SSE or chunked transfer).
- We’re using Node.js/Express on the server.

**Approach**

1. Expose `/tts?text=…` that:
   - Starts a request to the TTS service.
   - Pipes its response chunks to `res`.
2. Use an `AbortController` for the upstream call.
3. Attach listeners to `req.on('close')` and `req.on('aborted')` to trigger cancellation.
4. Ensure proper header propagation (content‑type, length if known).

**Depth**

```js
// server.js
const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/tts', async (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).send('Missing text');

  // TTS provider URL
  const ttsUrl = `https://api.tts.example.com/synthesize?text=${encodeURIComponent(text)}`;

  const controller = new AbortController();
  const signal = controller.signal;

  // Cancel upstream when client disconnects
  req.on('close', () => controller.abort());

  try {
    const upstream = await fetch(ttsUrl, { signal });

    if (!upstream.ok) throw new Error('TTS error');

    // Mirror headers (e.g., audio/mpeg)
    res.setHeader('Content-Type', upstream.headers.get('content-type') || 'audio/mpeg');
    // Stream chunks
    upstream.body.pipe(res);
  } catch (err) {
    if (signal.aborted) {
      console.log('Client disconnected, TTS aborted');
    } else {
      console.error(err);
      res.status(502).send('TTS service failure');
    }
  }
});

app.listen(3000);
```

**Edge Cases**

- Network hiccups → retry logic or fallback to static audio.
- Large payloads → back‑pressure handled by pipe.
- Browser abort before response starts → controller aborts immediately.

**Optimize & Communicate**

- Use a connection pool for the TTS client to reduce TLS overhead.
- Log cancellation events for billing visibility.
- Explain in interview: “We use `AbortController` to tie the upstream request lifecycle to the downstream HTTP stream, ensuring no orphaned processes.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
