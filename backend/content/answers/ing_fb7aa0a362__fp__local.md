---
qid: ing_fb7aa0a362__fp__local
question: Why do LLM products stream responses, and how does streaming actually work
  over HTTP?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 478
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:54:34-05:00'
sources: []
---

**Why stream LLM replies?**  
A language‑model inference pipeline is essentially a *producer–consumer* system. The model produces tokens one by one; the UI consumes them as they arrive. If the entire sequence were sent at once, the client would wait for the whole forward pass (often 1–3 s) before seeing any text, while the server could have already produced the first few words. By streaming we **decouple production from consumption**: the user sees a “live” answer, latency is perceived as lower, and downstream systems can start processing earlier tokens (e.g., for real‑time summarisation or error correction). In terms of information theory, early tokens carry high‑entropy content that most readers want first; delaying them increases expected waiting time without adding value.

**How does streaming work over HTTP?**  
HTTP/1.1 uses *chunked transfer encoding*: the server sends a `Transfer-Encoding: chunked` header and then streams data in discrete chunks, each prefixed by its size in hex and terminated by CRLF. The client reads until it encounters a zero‑length chunk (the stream terminator). For LLMs, each chunk often contains a JSON fragment with the next token(s) or an incremental response. WebSocket or Server‑Sent Events (SSE) are alternative protocols that keep the connection open and push data as events; they provide lower overhead for many small updates.

**Non‑obvious insight**  
The real power of streaming is not just faster perception but **feedback loops**: because tokens arrive incrementally, a client can *pre‑fetch* or even *adjust* subsequent generation (e.g., via user edits or re‑ranking) before the model finishes. This turns inference into an interactive optimization problem rather than a one‑shot computation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
