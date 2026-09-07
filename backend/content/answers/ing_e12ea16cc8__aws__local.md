---
qid: ing_e12ea16cc8__aws__local
question: 'Explain: Binary Search Variations — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 456
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:48:36-05:00'
sources: []
---

**Situation (S)** – While leading a data‑science team at my last role, we needed to expose *binary‑search* style queries over millions of user records in near real‑time for an ad‑tech product. The existing batch job took 12 h and cost ~$2k/month.

**Task (T)** – Design a **low‑latency, highly available service** that can handle 10K concurrent search requests per second, with <50 ms latency, while keeping infrastructure costs below $1k/month.

**Action (A)**  
- Built an **API Gateway + Lambda** front‑end; each request triggers a *stateless* Lambda that performs a binary search on a sorted S3 object list.  
- Used **S3 Select** to pull only the relevant key range, dramatically cutting I/O.  
- Cached recent query results in **ElastiCache‑Redis** (1 GB node) for 5 min; hit rate >90 %.  
- Employed **AWS Step Functions** to orchestrate retries and exponential back‑off on S3 failures.  
- Monitored with CloudWatch; set alarms for latency spikes, auto‑scaling Lambda concurrency.

**Result (R)** – Latency dropped from 12 h batch to <40 ms per query; throughput reached 15K QPS during a campaign peak. Monthly spend fell from $2k to $650 while maintaining 99.95 % availability.  

*Leadership Principles:* **Ownership** – I took end‑to‑end responsibility for cost and performance. **Dive Deep** – I profiled S3 Select, Lambda memory, and Redis eviction policies to fine‑tune the system.  

Bar‑raiser cues: clear ownership narrative, data‑driven impact (latency, cost), deep technical reasoning (S3 Select vs DynamoDB, trade‑offs in caching vs cold start).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
