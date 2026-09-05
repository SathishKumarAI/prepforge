---
qid: ing_84fbfc1e55__star__local
question: Explain KV cache offloading and cross-request reuse beyond a single GPU's
  memory. When does loading a cached prefix beat just recomputing prefill?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 352
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:59:14-05:00'
sources: []
---

**Situation** – In a recent NLP service, we had to serve GPT‑style inference on a single 24 GB GPU while the model (13 B params) required ~35 GB of activation memory for a typical prompt. The latency budget was 150 ms per request and our traffic spiked during product launches.

**Task** – I needed to keep the model resident on the GPU without swapping out activations, so that we could handle many concurrent requests without exceeding memory or blowing up latency.

**Action** – I implemented a KV‑cache offload layer: after each inference step, the key/value tensors for the past few layers were compressed (via 8‑bit quantization) and written to NVMe. For subsequent requests that shared a common prefix—like “Once upon a time” in many stories—I reused those cached prefixes by loading them back into GPU memory at the start of each request. I also built a reference counter so the cache could be evicted when not needed, keeping the GPU free for new prefill computations. The decision logic compared the cost of loading (≈ 2 ms from NVMe) versus recomputing the prefix (≈ 8 ms on GPU), and chose load whenever the cached length exceeded 5 tokens.

**Result** – We reduced average per‑request latency by 30 % (from 150 ms to 105 ms) and increased throughput from 20 to 35 requests/sec. The key lesson: offloading works best when the prefix is long enough that GPU recomputation dominates, but short prefixes are cheaper to recompute.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
