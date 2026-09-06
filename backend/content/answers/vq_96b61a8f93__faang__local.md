---
qid: vq_96b61a8f93__faang__local
question: How to validate the data once the ingestion is done?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 541
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:23:34-05:00'
sources: []
---

**1️⃣ Clarify**  
We want a post‑ingestion validation strategy that guarantees data quality before downstream consumption.  
Assumptions to confirm:  

* What formats (CSV, JSON, Parquet)?  
* Are we dealing with batch or streaming?  
* Which schema rules apply (types, ranges, foreign keys)?  
* How much latency can the validation tolerate?  

**2️⃣ Approach**  
1. **Schema & lineage capture** – store source schema and mapping in a catalog.  
2. **Automated validation pipeline** – run after each ingestion job.  
3. **Layered checks**:  
   * *Syntax*: parse, null‑count, type consistency.  
   * *Business rules*: ranges, patterns, cross‑field logic.  
   * *Referential integrity*: foreign key lookups in target tables.  
4. **Result reporting & alerts** – publish to a monitoring dashboard and trigger rollback or re‑ingest if critical failures occur.

**3️⃣ Depth**  
*Implementations:*  

| Layer | Tool/Tech | Complexity | Trade‑offs |
|-------|-----------|------------|------------|
| Syntax | Great Expectations / Spark DataFrames | O(n) per column | Requires schema definition |
| Business | Custom SQL UDFs or DB constraints | O(n) + index lookups | Adds compute cost |
| Referential | Delta Lake ACID transactions or Kafka Streams KTable joins | O(log m) via indexes | Latency increases with join size |

*Complexity:* Overall validation is linear in rows, plus logarithmic for indexed foreign‑key checks.  
*Rollback strategy:* Use immutable storage (e.g., S3 versioning) and atomic commits; if a job fails, re‑process from the last good checkpoint.

**4️⃣ Edge Cases**  
* Skewed data → uneven processing times.  
* Schema evolution → backward compatibility tests.  
* Partial failures in distributed systems → idempotent validation logic.  

Test scenarios: empty files, duplicate keys, out‑of‑range values, missing foreign records, and schema drift.

**5️⃣ Optimize & Communicate**  
- **Parallelize** checks across partitions; use vectorized operations.  
- **Cache** reference tables in memory for frequent lookups.  
- **Incremental validation**: only re‑validate new or changed rows.  

Narrate progress: “We’ll first confirm the data adheres to its declared schema, then enforce business constraints, and finally validate referential integrity before committing it to downstream services.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
