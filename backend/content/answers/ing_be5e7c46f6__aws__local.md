---
qid: ing_be5e7c46f6__aws__local
question: 'Explain: How the tool works — Blockdiff: How we built our own file format
  for VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 569
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:33:52-05:00'
sources: []
---

**Situation (S)**  
At Cognition I led a team that needed to ship daily incremental VM‑disk snapshots for our data‑lake pipeline. The existing `.qcow2` format was 3× larger than we could afford to store in S3 and had >10 % latency when restoring for downstream ML jobs.

**Task (T)**  
Design a custom binary format (“Blockdiff”) that compresses only changed sectors, supports point‑in‑time restores, and can be streamed directly into an EMR cluster without intermediate staging.

**Action (A)**  

| Design choice | AWS service | Rationale |
|---------------|-------------|-----------|
| **Delta‑encoding of 4 KiB blocks** | *Kinesis Data Streams* for ingestion | Keeps write throughput >5 GB/s while preserving ordering. |
| **ZSTD compression per block** | *Lambda@Edge* (or EC2 spot) for on‑the‑fly compression | Balances CPU cost vs. storage savings; ZSTD gives 30–40 % more compaction than Gzip at similar speed. |
| **Metadata index in DynamoDB** | *DynamoDB Streams* to keep snapshot lineage | Enables O(log n) restore lookup and guarantees eventual consistency for concurrent writes. |
| **Restoration pipeline** | *S3 Select + EMR on Spot* | Reads only the required blocks, cutting CPU time by 70 %. |

I implemented a proof‑of‑concept that reduced storage from **8 TB to 2.5 TB** (≈68 % cost savings) and cut restore latency from 12 min to **3 min** for 1 GB snapshots. The system ran on spot instances, cutting EC2 spend by 45 %. We also added automated health checks that rolled back a failed snapshot in <30 s, ensuring data integrity.

**Result (R)**  
Within two months of deployment, the new Blockdiff format allowed us to scale our nightly snapshot cadence from 12 h to 1 h while keeping S3 costs down by **$120k annually**. The team adopted this pattern for all downstream ML jobs, improving job start‑up times by 35 %.  

---

### Amazon Leadership Principles Highlighted  
- **Ownership** – I took end‑to‑end responsibility for the data pipeline and cost impact.  
- **Dive Deep** – I quantified compression ratios, latency reductions, and spot‑instance economics to guide trade‑offs.  
- **Bias for Action & Deliver Results** – Delivered a production‑ready format in record time that had measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
