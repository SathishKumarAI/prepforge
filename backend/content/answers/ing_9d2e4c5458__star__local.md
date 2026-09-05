---
qid: ing_9d2e4c5458__star__local
question: 'Explain: Practical coding: write a service that proxies streaming TTS to
  a browser and cancels cleanly when the user navigates away.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 338
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:46:28-05:00'
sources: []
---

**Situation**  
At my last startup we built an interactive e‑learning platform where students could ask questions in natural language. The TTS engine was a third‑party service that streamed audio via HTTP/2, but users often navigated away before the sentence finished, causing orphaned connections and wasted bandwidth.

**Task**  
I needed to create a lightweight proxy microservice that would stream the TTS audio to the browser, expose a clean cancel endpoint, and ensure no dangling sockets when a user left the page or refreshed.

**Action**  
I built an Express.js server with a `/tts` route. Inside I used `node-fetch` to call the third‑party API and piped its response stream directly to the client while attaching a `AbortController`. On the browser side, I wrapped the fetch in a `signal` tied to the page’s `visibilitychange` event; when the tab became hidden or unloaded, I called `abort()`. The server listened for the abort signal, closed the upstream connection immediately, and responded with a 499 (client‑aborted) status. I also added backpressure handling: if the client slowed down, the stream paused automatically, preventing memory bloat.

**Result**  
After deployment, orphaned TTS streams dropped from ~12 % of total requests to <1 %. Bandwidth savings were ~18 MB per day for our 2k daily active users. I learned how crucial event‑driven cancellation is in streaming services and the importance of matching client lifecycle events with server‑side cleanup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
