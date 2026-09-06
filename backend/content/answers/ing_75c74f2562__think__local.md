---
qid: ing_75c74f2562__think__local
question: 'Explain: What contributes to time-to-first-audio — Understanding latency
  | ElevenLabs Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 442
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:48:32-05:00'
sources: []
---

**1. Clarify the scope and assumptions**

- *What is “time‑to‑first‑audio” (TTFA)?*  
  The latency from sending a text request until the first audio chunk is received.  
- *Which system?* ElevenLabs’ TTS API, not a generic model.  
- *Assume: network is stable, we’re using the official SDK or REST endpoint.*

**2. Mental model / framework**

TTFA = **(Client‑side latency) + (Server‑side processing time)**.  
Break down each component:
  - Client request build & send
  - Network round‑trip
  - Server queueing & inference
  - Streaming response buffer

**3. Step‑by‑step reasoning**

1. Measure *client‑to‑server* latency: `time` before `POST`, `time` after first byte received.  
2. Subtract network RTT (can be estimated with a ping or using headers like `X-Request-Timestamp`).  
3. Remaining time is server‑side inference + buffer delay.  
4. Consult ElevenLabs docs for *server‑side* constants: e.g., “base latency ≈ 300 ms” and “per‑word processing ≈ 15 ms”.  
5. Combine to explain observed TTFA.

**4. Common traps**

- Confusing total request time with TTFA; the former includes final audio download.  
- Ignoring the streaming buffer: first bytes may arrive after a few seconds if buffering is aggressive.  
- Assuming all latency comes from the model; network spikes can dominate.

**5. Sanity‑check & verbalize**

- Verify that measured RTT matches typical internet speeds (~50–200 ms).  
- If TTFA >> RTT, suspect server queue or heavy load.  
- Communicate by saying: “The first audio chunk appears after ~400 ms, which splits into 120 ms network + 280 ms server inference as documented.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
