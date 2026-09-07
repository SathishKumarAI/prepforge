---
qid: ing_27c2781d50__aws__local
question: 'Explain: Storage volume types — Filestorages'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 409
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:35-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the migration of a legacy document‑management system (≈ 50 TB) to AWS while keeping SLA ≥ 99.9 % and reducing cost by 30 %. The key decision was choosing the right file‑storage volume type.

**Action**  
I compared **Amazon EFS**, **FSx for Windows File Server**, and **S3 with FS‑X interface**.  
* **EFS** (General Purpose) gave low latency, elastic scaling, and 99.999 % durability—ideal for concurrent users on Linux workloads.  
* **FSx for Windows** provided native SMB/NTFS features needed by the legacy app, but at a higher per‑GB cost.  
* **S3‑based file access** (via S3 Select or FS‑X) offered best cost for infrequently accessed archives.

I built a hybrid model: real‑time documents on EFS, audit logs in FSx, and cold archives in S3 with lifecycle policies to transition to Glacier Deep Archive. I used **AWS Cost Explorer** and **CloudWatch Metrics** to monitor throughput (up to 5 GB/s) and latency (< 10 ms).

**Result**  
The migration delivered a 99.95 % uptime, cut storage cost by 32 %, and reduced read/write latency by 40 %. The architecture remains scalable—EFS automatically expands to petabytes without provisioning—and is cost‑effective for bursty workloads.

> **Leadership Principles:** *Customer Obsession* (meeting SLA), *Ownership* (architecting end‑to‑end solution), *Dive Deep* (performance metrics), and *Bias for Action* (rapid migration).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
