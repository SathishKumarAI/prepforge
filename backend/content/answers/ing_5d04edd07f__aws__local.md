---
qid: ing_5d04edd07f__aws__local
question: 'Explain: ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 610
total_tokens: 838
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:56:06-05:00'
sources: []
---

**Situation (S)**  
While leading a data‑science team at my previous role, we built an online recommendation engine that served 2 M active users daily. The model training pipeline required *exactly* the same input features every time it ran; any drift in feature values caused catastrophic drops in CTR (≈ 12 %).  

**Task (T)**  
I had to design a data layer that guaranteed **ACID** guarantees for our feature store so that training jobs could consume immutable, consistent snapshots without manual reconciliation.  

**Action (A)**  
* **Architecture** – I chose *Amazon Aurora Serverless v2* (MySQL‑compatible) as the core transaction store because it supports ACID out of the box and scales automatically to 10 k RPS with < 200 ms latency.  
* **Feature Ingestion** – Each user event is written via an *AWS Lambda* function that performs a single `INSERT … ON DUPLICATE KEY UPDATE` inside a transaction, ensuring atomicity for per‑user feature vectors.  
* **Snapshotting** – A nightly Glue job runs `SELECT … FOR SHARE` to lock the current state and writes it as a Parquet file in *S3*, then triggers an Amazon SageMaker training job. The lock guarantees no concurrent updates during snapshot.  
* **Durability & Availability** – Aurora’s Multi‑AZ replication gives 99.99 % availability; S3 provides 11 nines durability for the snapshots.  
* **Cost/Trade‑offs** – Aurora Serverless is cheaper than provisioned instances at low load, but we reserve a small RDS instance during peak training hours to avoid cold starts.  

**Result (R)**  
The new pipeline reduced feature drift from 12 % CTR loss to < 0.3 %. Training jobs now finish 40 % faster because they read from the immutable snapshot instead of recomputing features on‑the‑fly. Operational cost dropped by 18 % due to Aurora Serverless and Glue’s pay‑per‑run pricing.  

**Leadership Principles**  
* **Ownership** – I owned the entire data‑quality chain, from ingestion to training.  
* **Dive Deep** – Chose Aurora after profiling latency, throughput, and durability against DynamoDB and Redshift.  
* **Bias for Action** – Deployed the Lambda‑Aurora pattern within two sprints instead of waiting for a fully‑fledged feature store product.  

Bar‑raiser notes: clear ownership, quantified impact (CTR & cost), deep technical justification, and learning loop—if ingestion failed, we re‑ran the Glue job to regenerate snapshots, ensuring zero data loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
