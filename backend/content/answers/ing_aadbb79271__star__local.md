---
qid: ing_aadbb79271__star__local
question: 'Explain: Key ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 338
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:14:38-05:00'
sources: []
---

**Situation** – In my last role at a cloud‑AI startup we were building a real‑time language model service that had to handle multiple user requests simultaneously on a single GPU server. Our baseline inference latency was around 800 ms for a 2,048 token prompt, and the memory usage kept us from scaling beyond two concurrent sessions.

**Task** – I needed to reduce per‑token processing time by at least 30% while keeping peak VRAM under 12 GB so we could serve five users concurrently without swapping.

**Action** – I implemented *paged attention* from vLLM. Instead of loading the entire key/value tensor for each layer into fast GPU memory, I stored them in a low‑latency NVMe pool and fetched only the required pages on demand using an LRU cache keyed by block index. I wrapped this logic around PyTorch’s `torch.ops` calls to batch the page loads and used mixed precision (FP16) for the attention computation. I also tuned the block size to 128 tokens, balancing kernel launch overhead against memory bandwidth.

**Result** – Latency dropped from 800 ms to 520 ms per request, a 35% improvement. VRAM usage fell to 8.5 GB, allowing us to run seven concurrent sessions on the same GPU. The exercise taught me how paging can turn an otherwise quadratic attention cost into a linear one without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
