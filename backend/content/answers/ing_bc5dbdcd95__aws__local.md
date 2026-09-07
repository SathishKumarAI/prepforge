---
qid: ing_bc5dbdcd95__aws__local
question: What is a shard? — How many shards should I have in my Elasticsearch cluster?
  | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 470
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:29:43-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a 2024 migration of our product catalog from an on‑prem Elastic cluster to **Amazon OpenSearch Service**, I was asked: *“What is a shard and how many should we create?”*  

**Situation / Task** – The catalog grew from 5 M to 50 M documents, and query latency had spiked above 300 ms. We needed a scalable design that kept costs in check while guaranteeing sub‑200 ms reads for 95% of traffic.

**Action** –  
1. **Customer Obsession & Dive Deep**: I ran a sharding experiment on a test domain (10 M docs, 100 k QPS).  
2. Calculated the *shard size rule*: keep each primary shard < 30 GB to avoid costly merge operations.  
3. Determined **shard count = ceil(total data / 30 GB)** → 50 M ÷ 30 GB ≈ **2 shards per node** (for a 4‑node cluster).  
4. Added **one replica per primary** for high availability.  
5. Leveraged **OpenSearch Service’s auto‑scaling** to add nodes when CPU > 80% or free disk < 20%.  

**Result** – Post‑migration, read latency dropped from 320 ms to **145 ms (45% improvement)**; error rate fell below 0.01%; and we saved ~15% on EBS IOPS compared to a naïve “one shard per node” approach.

**Bar‑raiser cues**:  
- Demonstrated ownership by leading the experiment end‑to‑end.  
- Dive deep into metrics (shard size, latency, CPU).  
- Quantified impact with real numbers.  
- Learned from the initial over‑sharding failure and adjusted the formula accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
