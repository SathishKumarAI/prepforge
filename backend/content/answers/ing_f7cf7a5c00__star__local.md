---
qid: ing_f7cf7a5c00__star__local
question: What is the KV cache and why does it make generation fast?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 311
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:44:25-05:00'
sources: []
---

**Situation** – In my last role I was tasked with deploying a transformer‑based text generator on a low‑latency edge device for real‑time customer support. The model had to generate responses within 150 ms per request, but the baseline inference time was around 1.2 seconds.

**Task** – Reduce generation latency by an order of magnitude without sacrificing output quality or increasing memory usage beyond the device’s limits.

**Action** – I introduced a key‑value (KV) cache for the self‑attention layers. Instead of recomputing all attention scores at each decoding step, I stored the hidden states (values) and their corresponding keys from previous tokens. At step t+1 I only computed new keys/queries for the incoming token and performed a matrix multiplication against the cached values. I implemented this in PyTorch with fused kernels, ensuring that the cache fit within 512 MB of RAM. To keep memory bounded, I applied a sliding window policy that discarded the oldest KV pairs once they exceeded the maximum sequence length.

**Result** – Latency dropped from 1.2 s to 140 ms per token (an 8× speed‑up), while BLEU scores remained unchanged. The experience taught me how caching transforms transformer inference into a linear‑time process, turning what would be an O(n²) operation into O(n) and enabling deployment on constrained hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
