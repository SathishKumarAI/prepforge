---
qid: ing_a14d733d99__aws__local
question: 'Explain: Risky Shard Key: Fields With Few Values — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 460
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:29:53-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I was tasked to redesign the user‑profile store that had grown to 200 M rows and started throttling on read/write ops. The DBA suggested sharding by `country_code`, but the field only contained 4 distinct values – a classic “risky shard key”. I needed to preserve horizontal scalability while avoiding hotspot shards.

**Action**  
I *dive deep* into the access patterns: 90 % of queries were global analytics, 10 % were country‑specific. I proposed **hashed composite sharding** on `(country_code, user_id_hash)` and deployed it on an Amazon Aurora Serverless cluster with read replicas spread across three AZs. To keep write latency low, I added a DynamoDB Global Secondary Index (GSI) for the analytics workload. Cost was monitored via AWS Budgets; we kept under 25 % of the previous RDS spend.

**Result**  
After migration, average write latency dropped from **350 ms to 85 ms**, and read throughput increased by **4×** without any hotspot spikes. The system handled a 3× traffic surge during a marketing campaign with <1 % error rate. I documented the trade‑offs (extra index overhead vs. analytics speed) and presented a rollback plan, demonstrating ownership.

---

### AWS Services Used
- **Aurora Serverless v2** – auto‑scaling RDS for transactional ops  
- **DynamoDB GSI** – fast analytics read path  
- **CloudWatch + Budgets** – performance & cost monitoring  

### Bar‑raiser cues I listen for
1. **Ownership** – clearly owns the redesign and rollback strategy.  
2. **Dive Deep** – analyzes shard cardinality, query mix, and latency metrics.  
3. **Quantified Impact** – provides concrete latency and throughput gains.  
4. **Learning from Failure** – documents trade‑offs and future monitoring plans.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
