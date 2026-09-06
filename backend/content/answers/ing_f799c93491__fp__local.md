---
qid: ing_f799c93491__fp__local
question: 'Explain: Design Cursor''s tab (next-edit prediction) system: it must feel
  instant - sub-100ms perceived latency - for millions of daily users. Walk me through
  the stack.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 470
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:46:10-05:00'
sources: []
---

### Why instant feels *real*  
Human typing is a stream of events; any delay above ~80 ms breaks the “flow” and makes the UI feel laggy. The system must therefore predict the next token **before** the user releases the key, not after. That means the predictor’s latency budget is dominated by inference time, not network round‑trip.

### Core stack (bottom → top)

| Layer | Purpose | Key design choices |
|-------|---------|--------------------|
| **Hardware + SIMD kernels** | 1 ms GPU/TPU inference on a single core | Quantized transformer (INT8) with fused layernorm & GELU, pre‑tuned to < 30 ms per token on consumer CPUs. |
| **Edge model cache** | Avoid cold‑start for every user | 10 MB distilled model shipped in the browser; warmed via *pre‑fetch* on first tab open. |
| **Client‑side tokeniser & beam search** | Convert keystrokes to logits → candidate tokens | Byte‑pair encodings with a 3‑token lookahead beam (k=4) that can finish in < 10 µs. |
| **Server fallback** | Handle rare long‑context or multi‑word predictions | Asynchronous HTTP/2 POST; server returns top‑5 suggestions in ~30 ms, merged client‑side if still pending. |
| **Feedback loop** | Continual learning without latency hit | Client logs user corrections to a secure queue; nightly batch retraining on GPU cluster (≈ 12 h). |

### Non‑obvious insight  
The *perceived* latency is dominated by the first key press, not the total inference time. By pre‑computing the **logit distribution** for every possible next character during the previous keystroke, the system can instantly surface a ranked list while still completing full token generation in background. This “predict‑then‑display” trick turns a 30 ms inference into < 5 ms UI response, keeping millions of users engaged without sacrificing model quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
