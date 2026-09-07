---
qid: vq_e1d4035439__aws__local
question: What is the architecture in terms of a hard disk, extents and pages?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 460
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:19:29-05:00'
sources: []
---

**Answer (Amazon style)**  

> *Leadership Principles:* **Ownership**, **Dive Deep**  
> 
> **Situation:** In my previous role I was tasked to redesign the on‑prem data lake that stored terabytes of log files for real‑time analytics. The existing architecture used a single 4 TB HDD with a flat file layout, leading to 30 % slower query times during peak periods and frequent I/O bottlenecks.  
> 
> **Task:** Build an elastic, cost‑effective storage system that reduces latency by at least 40 % while keeping total cost of ownership (TCO) below the legacy baseline.  
> 
> **Action:** I decomposed the problem into *extent* and *page* granularity layers.  
> - **Extents**: Small, fixed‑size blocks (4 MB each) stored as S3 objects, enabling parallel read/write via Amazon S3 Select and Athena.  
> - **Pages**: 8 KB pages inside each extent, compressed with Zstandard; page metadata cached in DynamoDB for quick lookup.  
> I orchestrated the pipeline using Glue to partition data by hour and Lambda to generate a *manifest* file that maps extents to partitions. This design leverages S3’s durability (11 nines), Auto Scaling for concurrent Athena queries, and S3 Intelligent‑Tiering to keep cold logs in Glacier at 0.004 $/GB/month.  
> 
> **Result:** After migration, query latency dropped from 12 s to 7.2 s (40 % improvement). Storage cost fell by 18 % (from $1,200 to $980/month) while maintaining full data integrity and auditability. I documented the architecture in a whitepaper that is now used across three AWS regions.  
> 
> **Reflection:** The key learning was that *granular extents* coupled with a lightweight page index can drastically improve parallelism without complex storage engines—an insight I will apply to future data‑engineering challenges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
