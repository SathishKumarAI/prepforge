---
qid: ing_5a061b149e__aws__local
question: 'Explain: Date-Tiered Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 514
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:49:14-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When I joined the Data Platform team at my previous company, we were ingesting ~2 TB of IoT telemetry daily into ScyllaDB for real‑time analytics. The write latency spiked to 120 ms during peak hours because our default compaction policy created large SSTables that required expensive read‑repair operations.

**Action (Dive Deep + Bias for Action)**  
I researched Scylla’s *Date‑Tiered Compaction* (DTC) strategy, which groups SSTables by age rather than size. I redesigned the ingestion pipeline:  

1. **SSTable partitioning:** 5 min “hot” buckets for recent data and 30 day “cold” buckets for older data.  
2. **Compaction windows:** Configured DTC to merge only within each bucket, preventing cross‑tier compactions that cause read amplification.  
3. **AWS integration:** Exported cold buckets to S3 Glacier using a Lambda trigger for archival cost savings.

**Result (Deliver Results)**  
After deployment:  

- *Write latency* dropped from 120 ms to 45 ms (a 63 % improvement).  
- *Read‑repair overhead* fell by 70 %, freeing 1.5 CPU cores per node.  
- *Storage cost* decreased by $3,200/month due to Glacier tiering.

**Reflection & Learning (Invent & Simplify)**  
I learned that aggressive compaction can hurt real‑time workloads; a data‑driven policy like DTC balances performance and cost. I documented the trade‑offs in our internal wiki and created an automated health check that alerts when SSTable age deviates from target windows.

**Bar‑raiser signals I hit:**  
- Demonstrated ownership of end‑to‑end latency problem.  
- Dive deep into Scylla internals and AWS services to craft a scalable, cost‑effective solution.  
- Quantified impact with clear metrics (latency %, CPU savings, monthly cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
