---
qid: vq_9e40d3bc8d__aws__local
question: WHAT IS NORMALIZATION IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 409
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:06:05-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a redesign of our customer‑data platform I was asked: *“What is normalization in SQL?”*  
I answered by framing it as a *system‑level discipline that reduces redundancy and improves data integrity—critical for scaling analytics pipelines.*

**S – Situation:** Our legacy ETL loaded 2 TB of raw order logs into DynamoDB, but duplicate customer records bloated storage and caused stale lookups.  

**T – Task:** I had to explain normalization while showing how it would reduce cost and improve query correctness.

**A – Action:**  
1. **Define the rules** – First, Second, and Third Normal Forms (1NF: atomic columns; 2NF: remove partial dependencies; 3NF: eliminate transitive dependencies).  
2. **Map to AWS services** – Use **Amazon RDS Aurora PostgreSQL** for ACID guarantees; partition tables by `customer_id` to keep hot data local, and enable **Aurora Serverless v2** to auto‑scale read replicas during analytics bursts.  
3. **Quantify impact** – Normalizing reduced duplicate rows from ~15 % to <1 %, cutting storage costs by 35 % and query latency for customer joins from 1.8 s to 0.4 s.

**R – Result:** The normalized schema allowed us to run ad‑hoc analytics in under a second, slashed RDS costs by $12K/month, and improved data quality scores (CRAM) from 92 % to 99.7 %.  

*Leadership Principles highlighted:* **Ownership** (I took responsibility for the entire data stack), **Dive Deep** (analyzed data patterns and AWS pricing models), **Deliver Results** (quantified cost & performance gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
