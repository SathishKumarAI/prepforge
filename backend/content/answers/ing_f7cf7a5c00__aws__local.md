---
qid: ing_f7cf7a5c00__aws__local
question: What is the KV cache and why does it make generation fast?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 522
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:39:07-05:00'
sources: []
---

**Situation – Problem**  
I was leading a team that built a real‑time story‑generation service for an e‑commerce recommendation engine. The model (GPT‑Neo) took ~12 s per prompt on a single GPU, which broke our SLA of 1 s for the front‑end.

**Task – Goal & Constraints**  
Reduce latency to <1 s while keeping cost ≤ $0.02 per request and maintaining 99.9% availability in us‑east‑1.

**Action – Technical Solution**  
We added a **KV cache** (key‑value store of token embeddings) implemented with **Amazon ElastiCache Redis**. For every new prompt we first check the cache for previously computed hidden states; if present, the transformer skips recomputing them and only runs the remaining layers.  

Key decisions:  
* **ElastiCache** – low‑latency (≤ 1 ms) access, automatic sharding for scalability.  
* **Lambda@Edge** – to proxy cache lookups near users, reducing round‑trip time.  
* **S3 + CloudWatch** – store eviction policies and monitor hit rates.  

We tuned the cache size to 512 MB per node; hit rate climbed from 0% to 78%, cutting average inference time from 12 s to **0.8 s** (≈90 % speed‑up). Cost dropped by 35 % because we could use a single p3.2xlarge instead of 8 GPUs.

**Result – Impact & Learning**  
* Delivered <1 s latency, meeting SLA and increasing user engagement by 23%.  
* Demonstrated ownership: I drove cross‑team coordination (SRE, data science) and took responsibility for the production rollout.  
* Dive deep: We analyzed cache warm‑up patterns, identified a cold‑start issue, and automated pre‑warming via scheduled Lambda jobs—reducing 5th‑percentile latency by an additional 15 %.  

**Bar‑raiser takeaways**  
- Ownership of performance bottlenecks and end‑to‑end delivery.  
- Deep dive into cache behavior and metrics.  
- Quantified impact (latency, cost, engagement).  
- Learned from a cold‑start failure to improve resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
