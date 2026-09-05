---
qid: ing_699f785d03__star__local
question: 'Explain: Memory — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 373
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:58:23-05:00'
sources: []
---

**Situation** – In my last role I was asked to build a recommendation engine for a streaming platform that had to serve 50 million daily active users with sub‑second latency while keeping the model size under 2 GB on each edge device.

**Task** – My goal was to design an efficient in‑memory representation of user embeddings and item vectors, estimate memory usage, and decide whether to compress or shard the data across multiple servers.

**Action** – I started with a back‑of‑the‑envelope calculation: 50 M users × 128‑dim float32 vectors ≈ 25.6 GB; similarly for 10 M items → 5.12 GB. That exceeded our per‑server limit, so I explored two trade‑offs:
1. Quantization to 8‑bit integers reduced each vector to 32 bytes (≈ 3.2 GB total) but increased inference error by ~0.4 %.  
2. Sharding the user space across 8 servers brought per‑server usage to ~400 MB, allowing us to keep float32 precision.

I also benchmarked CPU vs GPU memory footprints and concluded that a small CUDA tensor pool would handle the sharded data with negligible overhead.

**Result** – The final design used 8‑bit quantized embeddings on 8 edge servers, keeping total memory at ~4 GB per server while maintaining a 95.6 % top‑10 hit rate—up 3 % over baseline—and reducing deployment cost by 30 %. I learned that quick arithmetic estimates can guide critical trade‑offs before diving into implementation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
