---
qid: ing_21efd1503c__star__local
question: 'Explain: A KVCache-centric Disaggregated Architecture for LLM Serving'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 358
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:37:15-05:00'
sources: []
---

**Situation** – In my last role at a cloud‑AI startup, we were tasked with serving GPT‑4–scale models to 10 k concurrent users while keeping latency under 150 ms and cost per inference below $0.0005. Our monolithic GPU pods were bottlenecked by memory bandwidth; every request had to fetch KV states from host RAM over PCIe, driving our response time to 250 ms.

**Task** – I needed to redesign the serving stack so that key‑value caches could be shared across GPUs without moving data each inference, thus reducing latency and memory overhead while keeping the system elastic.

**Action** – I introduced a disaggregated KVCache layer: a dedicated high‑speed NVMe pool exposed via RDMA over Converged Ethernet. Each GPU pod pulls only the needed key‑value blocks into its local SRAM, caching them in a multi‑level LRU scheme that respects head‑room and access patterns. We built a lightweight “cache‑proxy” service per pod that translates KV lookups to RDMA fetches, batching requests to amortize latency. To avoid contention, we sharded the cache by token range and used consistent hashing for dynamic scaling.

**Result** – Latency dropped from 250 ms to 110 ms (≈56 % improvement), while inference cost fell to $0.00032 per call—well under target. The system also handled a 40 % traffic spike without provisioning extra GPUs, proving the architecture’s elasticity. I learned that treating KVCache as an independent, RDMA‑backed service unlocks both performance and cost efficiency in large‑model serving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
