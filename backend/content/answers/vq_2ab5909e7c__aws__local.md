---
qid: vq_2ab5909e7c__aws__local
question: What are the two types of fragmentation?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 625
total_tokens: 853
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:44:39-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we design for the data scientist’s experience, not just for engineering convenience; *Dive Deep* – I dig into why fragmentation hurts performance and how to quantify it.

### What are the two types of fragmentation?  
1. **Horizontal Fragmentation (Sharding)** – rows are split across multiple nodes or partitions based on a key (e.g., user_id).  
2. **Vertical Fragmentation** – columns are divided so that only relevant attributes travel together, reducing I/O for queries that touch a subset of fields.

### STAR Example  

- **Situation:** Our real‑time analytics pipeline for the e‑commerce platform was hitting 70 % CPU on Redshift during peak hours, causing SLA violations.  
- **Task:** Identify and eliminate fragmentation that inflated query cost.  
- **Action:**  
  - Mapped out current table layout; discovered heavy horizontal fragmentation due to legacy inserts (≈ 30 % of data was split across > 50 slices).  
  - Implemented **horizontal sharding** on `order_id` using Redshift Spectrum with S3 partitioning, and **vertical fragmentation** by moving rarely‑accessed columns (`customer_notes`, `promo_codes`) into a separate table.  
  - Leveraged AWS Glue to orchestrate data movement and maintained schema evolution via Athena.  
- **Result:** Query latency dropped from **9 s → 1.2 s** (≈ 87 % improvement), CPU usage fell by **65 %**, and cost per query decreased from $0.12 to $0.02, saving ~$15k/month.

### Technical Takeaway  

| Aspect | Design Choice | AWS Services | Scalability / Availability | Cost Trade‑offs |
|--------|---------------|--------------|---------------------------|-----------------|
| Fragmentation type | Horizontal + Vertical | Redshift Spectrum, Athena, Glue | Horizontal sharding scales linearly; vertical splits reduce node I/O | Slightly higher storage (duplicate metadata) but cheaper compute |
| Data movement | ETL via Glue jobs | Glue, Lambda for triggers | Near‑real‑time with incremental crawls | Glue pay per DPU-hour |

**Bar‑raiser check:** I showed *ownership* by diagnosing the root cause, *dive deep* into fragmentation mechanics, quantified impact (latency & cost), and learned that early partitioning strategy prevents future performance regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
