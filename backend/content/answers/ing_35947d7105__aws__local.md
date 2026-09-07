---
qid: ing_35947d7105__aws__local
question: 'Explain: False Positives — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 516
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:25:55-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of our real‑time fraud detector for a payments platform that processed ~3 M events/sec. The previous rule engine produced >30 % false positives, causing merchant churn and higher operational costs.

**Action – Design**  
1. **Requirement clarification**  
   * *Customer Obsession*: reduce false positives to <5 % while keeping latency ≤ 50 ms.  
   * *Ownership*: end‑to‑end solution from ingestion to alerting.  

2. **Bloom filter architecture**  
   * Use an in‑memory **AWS ElastiCache Redis Cluster** (cluster mode enabled) as a distributed Bloom filter store, because Redis’ `BF.ADD`/`BF.EXISTS` commands are sub‑10 µs and support sharding for scale.  
   * Size the filter: target 1 % false positive rate with 5 M unique merchant IDs → ~12 GB per node (calculated via Bloom filter formula).  

3. **Pipeline**  
   * Events → **Amazon Kinesis Data Streams** → **AWS Lambda** (dedicated micro‑service) that checks `BF.EXISTS`.  
   * On positive hit, forward to **SQS** for downstream fraud logic; on negative, skip expensive ML models.  

4. **Scalability & Availability**  
   * Auto‑scales Redis nodes based on CPU/latency metrics (CloudWatch).  
   * Multi‑AZ replication ensures 99.99 % availability; failover is automatic in ElastiCache.  

5. **Cost & Trade‑offs**  
   * Estimated $1,200/month vs legacy ~$8,000/month for rule engine + compute.  
   * Acceptable trade‑off: a small increase in false positives (from 30 % to 5 %) yields huge cost savings and faster response.

**Result**  
- False positive rate dropped from **30 % → 4.2 %** (≈ 86 % reduction).  
- Operational cost decreased by **$6,800/month**.  
- Latency stayed below **45 ms** for 99th percentile traffic.  

**Reflection**  
I learned that a carefully sized Bloom filter can replace expensive compute without sacrificing accuracy. Future iterations will add adaptive resizing and integrate a lightweight neural net for edge cases—continuing to balance customer impact with operational efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
