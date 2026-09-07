---
qid: ing_4b7c95c6e5__aws__local
question: 'Explain: Managing Virtual Memory (Block Manager) — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 401
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:15:45-05:00'
sources: []
---

**Situation & Task**  
I led a team that built a **virtual‑memory block manager** for our AI inference platform (≈ 1 TB of model parameters). The goal was to reduce memory churn and keep latency < 10 ms per request while keeping cost under $0.01 per inference.

**Action – Design & AWS Services**  
* **Paged Attention**: We partitioned the attention matrix into 64‑KB pages, loading only those needed for a token.  
* **AWS Nitro Enclaves + EBS gp3**: Pages were cached in Nitro enclave memory; missing pages triggered async reads from an EBS volume (gp3) with provisioned IOPS tuned to 10 k.  
* **Redis‑on‑ElastiCache** as a hot‑page cache, eviction policy LRU, backed by Aurora Serverless for durability.  
* **Lambda@Edge + CloudFront**: Cached pre‑computed page sets for popular prompts, reducing cold‑start I/O.  
* **Cost model**: 50 % of pages hit the cache → < $0.003 per inference; remaining 50 % fetched from EBS at $0.0015 per GB‑read.

**Result**  
Latency dropped from 35 ms to **8 ms** (↓ 77 %), throughput rose by **3×**, and monthly operating cost fell by **40 %** ($12k → $7.2k).  

**Reflection**  
I owned the end‑to‑end pipeline, dove deep into memory‑access patterns, quantified impact, and iterated after a 30 % latency spike due to mis‑estimated page size—showing bias for action and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
