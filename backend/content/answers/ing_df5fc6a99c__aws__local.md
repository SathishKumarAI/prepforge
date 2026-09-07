---
qid: ing_df5fc6a99c__aws__local
question: 'Explain: Using sort keys for version control — Best practices for using
  sort keys to organize data in DynamoDB - Amazon DynamoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 398
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:44:40-05:00'
sources: []
---

**Leadership Principles:** *Customer Obsession* – we deliver fast, reliable ML pipelines that end‑users trust; *Ownership* – I own the data schema and its evolution.

**Situation / Task**  
I was tasked with migrating an on‑prem analytics pipeline to DynamoDB while keeping versioned feature vectors for each user. The goal: sub‑second read latency for model inference and minimal operational cost.

**Action**  
1. **Sort Key Design** – I chose `userId#version` (`PK = UserID`, `SK = Version`) so that the latest vector is always at the end of the keyspace.  
2. **Global Secondary Index (GSI)** – added `modelId#timestamp` to enable bulk model‑specific queries for retraining, using `projection=ALL`.  
3. **TTL** – set a 90‑day TTL on older versions; DynamoDB automatically deletes them, keeping storage lean.  
4. **Provisioned Throughput** – calculated RCU/WCU based on the peak inference load (≈10 k req/s) and added a 20 % safety margin.  
5. **Batch Writes** – used `TransactWriteItems` to atomically write new vectors and delete stale ones, ensuring consistency.

**Result**  
- Read latency dropped from 120 ms to <15 ms (95th percentile).  
- Storage cost fell by 35 % due to TTL pruning.  
- Operational overhead reduced: no manual archival scripts required.  

**Bar‑raiser cues:** I demonstrated **ownership** by redesigning the schema, performed a **deep dive** into throughput and indexing trade‑offs, quantified impact with concrete metrics, and learned from early trials where improper sort key ordering caused 3× slower queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
