---
qid: ing_a7db89ecca__aws__local
question: 'Explain: Ribbon Filter — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 432
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:46:19-05:00'
sources: []
---

**Situation** – At my last role I led a feature that had to serve *10 M* user requests per day for real‑time ad targeting while keeping latency <5 ms. The naive set lookup in DynamoDB was 200 µs, too slow for the front‑end.

**Task** – Build an in‑memory “ribbon” filter that can quickly reject non‑eligible users before hitting the database, with a false‑positive rate ≤0.1 %.

**Action** –  
1️⃣ **Design**: A *Bloom filter* per ad campaign stored in Amazon ElastiCache Redis (bit arrays). Each request hashes user ID 4 times, checks bits; if any zero → reject early.  
2️⃣ **Data‑driven sizing**: For 10 M users and 0.1 % FPR we need ~30 MB per filter (n log(1/p)/ln²2).  
3️⃣ **Scalability & Availability**: Redis Cluster with read replicas; cache warm‑up via Lambda on campaign rollout, auto‑scale on CloudWatch metrics.  
4️⃣ **Cost**: 4 GB ElastiCache cluster → ~$200/month vs $1k for DynamoDB scans.  
5️⃣ **Fail‑fast learning**: If filter misses (false positive) we log to Kinesis and trigger an S3 job that recomputes the Bloom bit array; drift analysis ensures the filter stays fresh.

**Result** – Latency dropped from 200 µs to <2 µs per lookup, reducing database reads by **92 %**, cutting costs by 75 %.  

*Leadership Principles*: **Customer Obsession** (instant user response), **Ownership** (own end‑to‑end performance).  
Bar‑raiser focus: deep dive into Bloom math, quantified impact, and continuous improvement loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
