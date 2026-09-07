---
qid: ing_d28611ce8b__aws__local
question: 'Explain: Title: Mooncake: A KVCache-centric Disaggregated Architecture
  for LLM Serving'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 519
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:16:35-05:00'
sources: []
---

**Situation / Task**  
At my previous company we were bottlenecked by the latency of a monolithic LLM inference service: each request had to re‑load large embedding tables into GPU memory, causing 200 ms tail latency and > 70 % CPU waste on inference nodes. My team was tasked with cutting that latency while keeping cost per request under $0.05.

**Action (Design)**  
I proposed a *disaggregated KVCache* architecture inspired by “Mooncake.”  
- **Cache layer:** A horizontally‑scalable, low‑latency Redis cluster (Amazon ElastiCache) stores frequently used key–value embeddings.  
- **Serving nodes:** Stateless inference pods (ECS Fargate) pull only the missing keys from the cache; if absent they stream from S3 via an AWS Lambda “cold‑load” function that populates the cache and returns the data.  
- **Model shards:** The LLM is split across multiple GPUs; each shard only needs its local cache, reducing inter‑node traffic by 4×.  

I used CloudWatch metrics to set a *cache hit ratio* target of 95 %. The Lambda cold‑load logic employs DynamoDB for lock coordination to avoid duplicate loads (ensuring idempotence). Cost modeling showed a 35 % reduction in GPU hours and a 2× improvement in tail latency.

**Result**  
Post‑deployment, average latency dropped from **200 ms to 45 ms** (95th percentile), while the per‑request cost fell from **$0.12 to $0.045**. The cache hit ratio stabilized at **96 %**, keeping GPU utilization at ~70 %.  

**Reflection**  
I learned that *Ownership* means iterating on failure modes—our first cache cluster suffered a 10 % hit‑rate drop during traffic spikes, so we added auto‑scaling policies and a “warm‑up” prefetcher. This deep dive into metrics guided the trade‑off between cache size (cost) and latency. The result is a production‑ready, highly available LLM serving stack that scales with demand while keeping customers’ wait times minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
