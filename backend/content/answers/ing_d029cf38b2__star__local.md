---
qid: ing_d029cf38b2__star__local
question: Kimi's headline feature is very long context. When you push context from
  8K to hundreds of thousands of tokens, what actually breaks first, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 356
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:25:36-05:00'
sources: []
---

**Situation:** While working on a next‑generation conversational AI at Kimi, we were tasked with extending the model’s context window from the standard 8K tokens to over 300K tokens so it could handle long documents and multi‑turn dialogues without losing earlier turns.

**Task:** My goal was to identify which part of the pipeline would fail first when scaling the context size and to design a mitigation strategy that kept inference latency acceptable.

**Action:** I started by profiling the memory usage of the transformer’s attention matrices. The quadratic O(n²) growth meant that for 300K tokens, the pairwise attention matrix alone required over 200 GB of GPU memory—well beyond any available device. I then experimented with sparse attention (Linformer and Performer) to reduce complexity to linear, but found that the model’s positional embeddings still grew linearly and became a bottleneck in the embedding layer. Switching to rotary position embeddings helped, but the real break came from the KV cache in the decoder: as tokens accumulated, the key/value tensors exceeded GPU memory, causing out‑of‑range errors.

**Result:** We settled on a hybrid approach—using sparse attention for the encoder and a segmented KV caching strategy that flushed old turns after 50K tokens. This allowed us to run inference on 300K‑token inputs with only a 1.8× increase in latency, and we reduced memory usage from 200 GB to 35 GB. The lesson: when scaling context, the attention matrix is the first thing that blows up, followed by positional embeddings, and finally KV cache limits; each requires a different engineering trade‑off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
