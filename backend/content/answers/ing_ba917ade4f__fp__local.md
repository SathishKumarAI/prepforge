---
qid: ing_ba917ade4f__fp__local
question: 'Explain: Walk me through rendering a streaming LLM response in the browser,
  from HTTP response to pixels.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 415
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:40:17-05:00'
sources: []
---

### From HTTP to Pixels: Streaming an LLM Reply

1. **HTTP/2 Push** – The server opens a single multiplexed stream for the prompt and immediately starts sending *chunks* of JSON that contain partial tokens (e.g., `"text":"Hel"`).  
   - **Why?** HTTP/2’s header compression + zero‑copy framing lets the client receive data as soon as it is generated, avoiding round‑trip latency.

2. **EventSource / WebSocket** – The browser receives each chunk as a `MessageEvent`. A lightweight *token buffer* stores them in order; out‑of‑order chunks are re‑sequenced by their sequence number.

3. **Incremental Decoding** – Tokens are concatenated into a growing string. A small **lexical analyzer** splits the stream into displayable units (words, punctuation).  
   - **Why incremental?** The browser can update the DOM before the entire sentence is ready, giving the illusion of real‑time typing.

4. **Rendering Pipeline** – Each unit becomes a `<span>` in a `<div id="output">`. CSS `font` and layout are applied immediately; the text layer is painted by the compositor thread.  
   - The GPU renders glyphs to pixels using *text shaping* (Harfbuzz) and rasterization.

5. **Backpressure & Flow Control** – If the browser’s rendering queue stalls, the client sends a `WINDOW_UPDATE` on the HTTP/2 stream, throttling the server until it catches up.

> **Non‑obvious insight:** The *real* latency bottleneck is not network or GPU but the compositor’s ability to keep its paint queue unblocked. By batching token insertions (e.g., 5–10 characters at a time) and using requestAnimationFrame, we align text updates with frame renders, yielding perceptually instant feedback while preserving bandwidth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
