---
qid: ing_9d2e4c5458__fp__local
question: 'Explain: Practical coding: write a service that proxies streaming TTS to
  a browser and cancels cleanly when the user navigates away.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 421
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:39:34-05:00'
sources: []
---

### Why the proxy must exist  
When a browser requests *text‑to‑speech* (TTS) you usually hit an external API that streams raw audio bytes. The API keeps a TCP connection open until the entire utterance is produced, then closes it. If the user leaves the page mid‑stream, two problems arise:

1. **Resource leakage** – the server still holds memory and CPU for the unfinished stream.
2. **User experience** – the browser may continue to play stale audio or block other requests.

A proxy service solves this by acting as a *stateful gatekeeper*: it forwards bytes from the TTS provider to the client, but also watches the WebSocket/HTTP connection for closure events. When the page unloads, the browser sends an `AbortSignal` (or closes the socket); the proxy immediately cancels the upstream request and releases resources.

### How to implement it  
1. **Create a Node.js HTTP server** that accepts `/tts?text=…`.  
2. **Open a fetch stream** to the real TTS endpoint, piping its `ReadableStream` into your response’s `WritableStream`.  
3. Attach an event listener to the client request (`req.on('close')`).  
4. When triggered, call `controller.abort()` on the upstream fetch (or close the socket) and flush any buffered data.

### Non‑obvious insight  
Most developers think *“closing the browser tab stops everything”*. In reality, HTTP streams are **lazy**: they only terminate when the server explicitly cancels or sends a termination signal. Therefore you must actively detect the client’s intent and propagate that cancellation upstream; otherwise, the TTS provider will keep allocating resources for an invisible consumer.

This pattern—*forward‑then‑cancel*—is a general solution for any streaming API (video, live data, etc.) where early user navigation should terminate expensive server work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
