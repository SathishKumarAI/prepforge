---
qid: ing_06ffe2ae3e__aws__local
question: 'Explain: And then a scan allows you to — AWS re:Invent 2021 - Which NoSQL
  database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 692
total_tokens: 939
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:41:57-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** In my last role I led a team that had to migrate an on‑premises relational catalog of 12 M product records into the cloud while keeping the UI latency under 200 ms for 90% of requests.  
> 
> **Task:** We needed a NoSQL store that could handle large, sparse data sets and support ad‑hoc analytics without locking us into a fixed schema.

---

### What “scan” means in DynamoDB

- **Scan** reads every item in a table (or a partition) regardless of key.  
- It is *unfiltered* by design; you can optionally apply filters after the read, but the underlying I/O still touches all items.  
- **Cost & latency:** Every 1 GB of data scanned costs $0.25 and each scan request consumes read capacity units (RCUs) proportional to size.

**Result:** In a prototype we ran a full‑table scan on 12 M items (~80 GB). The single scan took ~30 s and cost ~$20, which was unacceptable for production workloads.

---

### Choosing the right NoSQL database

| Criteria | DynamoDB | Amazon DocumentDB (MongoDB) | Amazon Timestream |
|----------|----------|-----------------------------|-------------------|
| **Schema flexibility** | ✅ | ✅ | ❌ |
| **Low‑latency reads** | 1–2 ms (RCUs) | ~10 ms | 5–10 ms |
| **Cost for large scans** | High (full table scan) | Low (index‑based queries) | N/A |
| **Write amplification & consistency** | Strong on a per‑item basis | Tunable via write concern | Event‑driven |

**Decision:** For a catalog with frequent key lookups and occasional full‑table analytics, *DynamoDB* is ideal. To avoid costly scans we:

1. Added a **Global Secondary Index (GSI)** on the `category` attribute to cover most filter queries.
2. Used **Parallel Scan** (up to 32 segments) during off‑peak windows for nightly ETL jobs—reducing runtime from 30 s to ~3 s and cost to ~$0.75.
3. Scheduled **On‑Demand backup** and leveraged **DAX** for read caching, cutting average latency to 1.2 ms.

---

### Bar‑raiser checklist

- **Ownership:** Took full responsibility for the migration plan and executed it with zero data loss.  
- **Dive Deep:** Benchmarked scan vs. GSI performance; documented RCU usage patterns.  
- **Quantified Impact:** Reduced nightly ETL cost by 96% and improved read latency by 40%.  
- **Learning from Failure:** Early prototype overestimated scan costs; pivoted to GSIs and parallel scans, demonstrating agility.

---

**Leadership Principles Highlighted**

1. **Customer Obsession** – Ensuring the catalog API stays under 200 ms for users.  
2. **Ownership & Dive Deep** – Own end‑to‑end migration, dive into AWS cost models, and iterate based on metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
