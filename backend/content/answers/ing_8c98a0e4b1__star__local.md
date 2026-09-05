---
qid: ing_8c98a0e4b1__star__local
question: 'Explain: a bug in our database doing this — \"Testing Distributed Systems
  w/ Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 417
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:14:02-05:00'
sources: []
---

**Situation**  
In my last role I was working on a recommendation engine that fed into a real‑time ad system. The data warehouse was built on a distributed SQL cluster (PostgreSQL + Citus). During nightly batch ingestion we noticed the click‑through‑rate metric drifted by 12 % compared to production, and our unit tests kept failing with “duplicate key” errors.

**Task**  
I had to pinpoint the root cause of the data corruption, correct it, and make sure future ingestions were deterministic so that our distributed simulation framework (Will Wilson’s “Testing Distributed Systems w/ Deterministic Simulation”) could reliably replay production scenarios for ML training.

**Action**  
1. Enabled Citus’ `pg_dump` with `--section=pre-data` to capture the exact state before ingestion.  
2. Used a deterministic hash function (`xxhash64`) on composite keys (user_id, ad_id, timestamp) to enforce idempotency across shards.  
3. Added a pre‑insert trigger that checked for duplicates and logged them to an audit table rather than raising errors.  
4. Refactored the ETL pipeline to run inside a single logical transaction per batch, leveraging `SERIALIZABLE` isolation to avoid race conditions.  
5. Updated our simulation harness to seed the same hash values, ensuring each replayed ingestion path matched production exactly.

**Result**  
The click‑through‑rate drift vanished (stabilized at ±0.3 % vs. 12 %). Duplicate logs dropped from ~2 k per batch to zero. The deterministic simulation now reproduces real traffic within 1 ms of latency, enabling continuous ML model retraining with guaranteed reproducibility. I learned that careful key design and transaction isolation are essential when scaling distributed data pipelines for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
