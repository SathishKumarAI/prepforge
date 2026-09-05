---
qid: ing_8f50d55281__star__local
question: 'Explain: Q: Design a RAG system that serves 10,000 queries per second across
  500 tenants with a p99 latency of 2 seconds.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 359
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:19:39-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a multi‑tenant knowledge‑base platform that had to handle roughly 10,000 queries per second across 500 distinct tenants. Each tenant had its own data lake and the SLA demanded a p99 latency under two seconds.

**Task:**  
I was tasked with designing a Retrieval‑Augmented Generation (RAG) system that could scale horizontally, keep cost in check, and deliver sub‑2 s tail latency while isolating each tenant’s data.

**Action:**  
I split the workload into three layers: a CDN‑fronted vector index layer using Pinecone for fast similarity search; a stateless microservice pool on Kubernetes that fetched the top‑k docs and passed them to an OpenAI GPT‑4 Turbo wrapper; and a caching tier (Redis) keyed by tenant+query hash. I added rate limiting per tenant, sharded indices by tenant ID, and used pre‑computed embeddings stored in an SSD‑backed NVMe cluster. For tail latency, I implemented adaptive batching: if the system detected queue lengths above 200 ms, it would reduce batch size to keep latency low. I also introduced a “cold start” warm‑up script that preloaded the top 1000 vectors for each tenant on launch.

**Result:**  
The deployment handled 12,000 QPS comfortably, with p99 latency at 1.8 s across all tenants. The cost per query dropped by 35% thanks to efficient caching and sharding. I learned how careful index partitioning and adaptive batching can keep tail latency low in a highly multitenant environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
