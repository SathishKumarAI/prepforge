---
qid: ing_bf8c712d8c__aws__local
question: 'Explain: KV Cache Sharing (Copy-on-Write) — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 464
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:37:23-05:00'
sources: []
---

**Situation / Task**  
While revamping a multimodal inference service for an internal recommendation engine, I had to reduce GPU memory usage by **30 %** without hurting latency (<10 ms). The model used transformer layers with a large key‑value (KV) cache that was duplicated across parallel requests.

**Action – Technical Design**  
I implemented *Copy‑On‑Write (COW)* paged KV cache sharing:  
1. **Shared pages** are stored in a read‑only EBS‑optimized SSD, referenced by a reference counter.  
2. When an inference request mutates the cache, only that page is cloned (write‑back) – O(1) memory overhead.  
3. I wrapped this logic in a Rust service deployed via **AWS Fargate** with GPU support, exposing a gRPC endpoint.  
4. For scalability, I used **Amazon Elastic Container Service (ECS)** to auto‑scale the container fleet based on CPU/GPU utilization.  

**Result** – *Impact*  
- Memory footprint dropped from 24 GB to 16 GB per node → 30 % cost savings on GPU instances.  
- Latency improved by 12 % due to fewer cache misses.  
- Throughput increased from 8k RPS to 11k RPS under peak load.  

**Learnings & Ownership**  
I **owned** the end‑to‑end pipeline, diving deep into CUDA memory models and AWS service limits. The COW strategy required iterative profiling; a mis‑estimated reference counter caused rare cache thrashing—an early failure that taught me to instrument with CloudWatch metrics for proactive alerts.  

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered faster recommendations, directly improving user satisfaction scores by 4 pts.  
- **Ownership & Dive Deep:** Took full responsibility from design to production monitoring, iterating on hard‑edge performance bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
