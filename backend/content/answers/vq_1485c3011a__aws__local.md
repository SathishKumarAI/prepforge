---
qid: vq_1485c3011a__aws__local
question: How can I coalesce free space?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 464
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:39:56-05:00'
sources: []
---

**Situation & Task**  
In my previous role as a DevOps lead at a fintech startup, our on‑premise storage cluster was hitting *99%* utilization after a year of growth. Each node had fragmented free blocks that were too small to be useful, causing read/write latency spikes and increased backup window times.

**Action (Technical Design)**  
I proposed an automated **“Coalesce‑Free‑Space” microservice** deployed as an AWS Fargate task:

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1. Scan | Amazon S3 Select + Lambda | Quickly list fragmented extents without pulling entire files. |
| 2. Merge | EFS File System with POSIX‑compatible APIs | Allows in‑place compaction; we used `fallocate` and `dd` to rebuild contiguous blocks. |
| 3. Monitor | CloudWatch Alarms & SQS | Triggered when fragmentation > 10% or latency > 200 ms. |
| 4. Rollback | Versioning + EBS snapshots | Ensured zero‑downtime and quick recovery if compaction corrupted data. |

The service ran hourly, processed ~500 GB per run, and used < 2 mB of RAM each task, keeping costs under **$0.03/hr**.

**Result**  
After 3 months, fragmentation dropped from **12% → 1%**, read latency fell by **48 ms (≈25%)**, and backup windows shortened from 4 hrs to 2 hrs—saving ~15 k CPU‑hours annually.  

---

### Leadership Principles Highlighted
- **Ownership** – I identified the hidden cost of fragmentation and drove a cross‑team solution.
- **Dive Deep** – I profiled storage behavior, measured block sizes, and tuned POSIX APIs for maximum efficiency.

*Bar‑raiser takeaways:* clear ownership, deep technical insight, quantifiable impact, and an iterative learning loop (continuous monitoring & rollback).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
