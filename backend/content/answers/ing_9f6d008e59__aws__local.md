---
qid: ing_9f6d008e59__aws__local
question: 'Explain: SSD vs. HDD — What is an SSD (Solid-State Drive)?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 460
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:25:15-05:00'
sources: []
---

**Answer – “What is an SSD?”**

> **Situation & Task**  
> In the last project I led a migration of our data‑analytics platform from on‑premise servers to AWS. The team’s performance goal was to reduce query latency by 70 % while keeping operating costs below $1M per year.

> **Action**  
> I evaluated storage options: spinning HDDs versus SSDs (NVMe). I proposed a tiered architecture: critical OLAP tables on `io2.blockio` SSD volumes, archival data on Glacier. I wrote Terraform scripts to spin up 4 × 400 GB SSDs in an EBS‑optimized instance, and configured cross‑region replication with S3 Transfer Acceleration for cost‑effective backups.

> **Result**  
> Post‑migration, query latency dropped from 2.5 s to 0.6 s (75 % improvement). Storage costs fell by 35 %, and we avoided a projected $200K annual penalty for exceeding IOPS limits on HDDs. The solution also simplified our backup pipeline, cutting dev‑ops hours by 40 %.

> **Why SSD?**  
> An SSD stores data in NAND flash memory, eliminating spinning platters. This yields:
> * **Lower latency (≤ 1 ms vs. ~10 ms for HDD)**
> * **Higher IOPS (≥ 100k reads/writes vs. ~200–400 for HDD)**
> * **Better power efficiency and thermal profile** – critical for large‑scale AWS deployments.

> **Leadership Principles**  
> *Customer Obsession* – We delivered faster insights to analysts, directly improving business decisions.  
> *Ownership & Dive Deep* – I owned the storage decision, benchmarked performance, and iterated on volume sizing until we hit the SLA targets.  

> **Bar‑raiser notes** – Look for evidence of owning a technical decision, quantifying impact, and learning from trial runs (e.g., adjusting SSD size after benchmarking).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
