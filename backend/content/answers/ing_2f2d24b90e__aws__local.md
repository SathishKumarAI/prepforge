---
qid: ing_2f2d24b90e__aws__local
question: 'Explain: So suddenly your RAID controller becomes more'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 559
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:12:01-05:00'
sources: []
---

**Situation & Task**  
I was managing a 12‑node EKS cluster that stored terabytes of training data on an on‑prem storage array. One morning the **RAID‑10 controller** started throttling I/O, causing model training jobs to hit a 40 % latency spike and missing SLAs for nightly inference batches.

**Action (Technical & Design)**  
1. **Diagnose root cause** – queried `mdstat` & SMART logs; discovered an unbalanced mirror due to a recent disk failure that had been automatically resynced, creating hot‑spare contention.  
2. **Immediate mitigation** – spun down the degraded array, re‑queued I/O on the healthy mirrors, and switched to a *software RAID* (mdadm) with `queue_depth=32` to temporarily flatten the queue.  
3. **Long‑term solution** – migrated the dataset to **Amazon S3** + **SageMaker Ground Truth**, using an S3‑based **Glacier Deep Archive** tier for cold data and **S3 Intelligent‑Tiering** for active shards. Deployed a *Lambda* pipeline that periodically checks EC2 EBS snapshots against S3, ensuring consistency.  
4. **Cost/Availability trade‑offs** – paid ~$0.023 per GB/month for S3 Standard-IA vs $0.10 per GB/month for on‑prem SSDs; achieved 99.9 % durability and 99.99 % availability with negligible latency impact on the training pipeline.

**Result (Quantified Impact)**  
- Reduced I/O latency from **120 ms to <15 ms**, cutting nightly job runtimes by **35 %**.  
- Eliminated manual intervention for RAID rebuilds, freeing 10 hrs/month of ops effort.  
- Cut storage costs by **30 %** while maintaining compliance with data‑retention policies.

---

### Leadership Principles Highlighted
* **Ownership** – I owned the incident from detection to resolution and redesigned the storage stack.  
* **Dive Deep & Deliver Results** – performed low‑level diagnostics, chose appropriate AWS services, and quantified performance gains.  

A bar‑raiser would look for: clear ownership, depth of technical analysis, measurable impact, and lessons learned (e.g., automated health checks to pre‑empt future degradations).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
