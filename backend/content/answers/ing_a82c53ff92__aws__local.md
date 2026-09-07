---
qid: ing_a82c53ff92__aws__local
question: 'Explain: Aim for shards of up to 200M documents, or with sizes between
  10GB and 50GB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 411
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:47:05-05:00'
sources: []
---

**Situation / Task**  
I was leading a migration of an on‑prem search stack to Amazon OpenSearch for a global e‑commerce platform that indexed ~3 B product documents. The legacy cluster suffered from hot shards (up to 20 T) and frequent node churn, which broke our SLA of 99.9 % query latency.

**Action**  
1. **Dive Deep on shard sizing** – I benchmarked OpenSearch with varying target sizes: 10 GB, 25 GB, 50 GB, and 200 M documents per shard.  
2. **Design** – Adopted an index‑per‑category approach, using *shard‑allocation awareness* (zone‑aware routing) on an EC2 Auto Scaling group behind an ALB.  
3. **AWS Services** –  
   - Amazon OpenSearch Service for managed cluster and automatic snapshotting.  
   - AWS Lambda + Step Functions to orchestrate reindexing pipelines.  
   - CloudWatch Alarms to auto‑scale nodes when shard count per node > 7 or free disk < 10 %.  

**Result**  
- Reduced average query latency from **750 ms → 110 ms** (≈85 % improvement).  
- Shard churn dropped by **92 %**, cutting node restart time from 4 min to 30 s.  
- Cost decreased by **18 %** due to more efficient use of instance types and lower over‑provisioning.

**Learnings**  
Owning the migration, I validated that aiming for shards between **10–50 GB** (≈200 M docs) strikes a balance: enough data per shard for CPU efficiency while keeping recovery times short. Future teams should start with 25 GB and adjust based on real‑world latency metrics—never assume “one size fits all.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
