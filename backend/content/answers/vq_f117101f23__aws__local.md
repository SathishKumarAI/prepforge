---
qid: vq_f117101f23__aws__local
question: What are the four types of SP?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 706
total_tokens: 934
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:21:58-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“In our data‑engineering team we talk about the **four canonical types of Stream Processing (SP)**:  
> 1️⃣ Batch/Batch‑to‑Stream, 2️⃣ Micro‑batch, 3️⃣ Event‑driven real‑time, and 4️⃣ Hybrid (combining micro‑batch + event‑driven).”*  

**Situation & Task** – While leading the migration of our telemetry pipeline to a new data lake, I had to decide which SP model best met latency, cost, and reliability goals.  

**Action** –  
1. **Defined requirements**: 99.9 % availability, <5 s end‑to‑end latency for high‑frequency events, and <$0.05 per GB processed.  
2. **Designed four prototypes** using AWS services:  
   * **Batch/Batch‑to‑Stream** – Glue ETL → S3 → Athena (cost‑effective but 30‑min lag).  
   * **Micro‑batch** – Kinesis Data Firehose → Lambda → Redshift Spectrum (≈2 min latency, moderate cost).  
   * **Event‑driven real‑time** – Kinesis Data Streams + EMR Serverless Spark Structured Streaming (≤5 s latency, higher compute spend).  
   * **Hybrid** – Combine Micro‑batch for bulk ingestion with a small Lambda fan‑out for critical alerts (balanced trade‑offs).  
3. **Ran A/B tests** on 1M events/day, captured metrics: throughput, cost per GB, and SLA adherence.

**Result** – The hybrid model delivered the lowest total cost ($12k/month vs $18k for pure real‑time) while meeting all SLAs; latency averaged 4 s for alerts and 15 min for daily aggregates. Post‑implementation, we cut incident response time by **38%** and reduced data engineering effort by **25%**.

---

### Leadership Principles Highlighted
* **Customer Obsession** – We prioritized real‑time alerts that directly improve customer experience (reduced churn by 12%).  
* **Ownership & Dive Deep** – I owned the entire migration, dissected each SP’s trade‑offs, and quantified impact with real metrics.  

### What a Bar‑Raiser Listens For
* Demonstrated ownership of both business outcome and technical depth.  
* Clear, data‑driven results that show tangible ROI.  
* Reflection on what didn’t work (e.g., pure batch lagged behind SLA) and how we learned to balance cost vs latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
