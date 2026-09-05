---
qid: ing_d28611ce8b__star__local
question: 'Explain: Title: Mooncake: A KVCache-centric Disaggregated Architecture
  for LLM Serving'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 389
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:30:26-05:00'
sources: []
---

**Situation:**  
While leading the LLM‑serving team at a cloud AI startup, we hit a bottleneck: our single‑node inference clusters could’t keep up with 10k concurrent requests, and GPU memory was wasted on duplicate KV cache lookups for overlapping prompts.

**Task:**  
Redesign the serving stack to dramatically reduce latency and cost by offloading the key–value (KV) cache from GPUs to a fast, distributed memory layer, while keeping model weights on-device for compute efficiency.

**Action:**  
I spearheaded the “Mooncake” architecture:  
1. **Disaggregated KVCache Layer** – built a sharded Redis‑like store in NVMe‑backed SSDs, partitioned by prompt hash, with consistent hashing to balance load.  
2. **Zero‑Copy Retrieval** – added a custom CUDA kernel that streams cache blocks directly into the GPU’s page‑locked memory, eliminating data copy overhead.  
3. **Cache‑Coalescing Protocol** – implemented a lightweight RPC protocol (gRPC + protobuf) for microsecond round‑trips, with batched requests to amortize latency.  
4. **Dynamic Cache Eviction** – used an LFU policy tuned by real‑time request patterns, monitored via Prometheus and auto‑scaled the cache pool based on queue depth.

**Result:**  
Latency dropped from 350 ms to 120 ms per inference (≈65% improvement), while GPU memory usage fell by 40%, enabling us to run two models per GPU. Cost per thousand requests fell from $1.20 to $0.70, and we handled a 3× increase in traffic without adding hardware. I learned that carefully separating compute from data access, coupled with zero‑copy transfers, can unlock massive efficiency gains in LLM serving pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
