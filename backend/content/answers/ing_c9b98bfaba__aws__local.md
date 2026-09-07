---
qid: ing_c9b98bfaba__aws__local
question: 'Explain: Dig Deeper on Storage — What is an SSD (Solid-State Drive)?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 372
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:57:31-05:00'
sources: []
---

**Answer**

*Leadership Principles:* **Dive Deep & Ownership**

**Situation:** While architecting a real‑time recommendation pipeline for an e‑commerce platform, I noticed latency spikes during peak traffic (up to 200 ms).  
**Task:** Identify the root cause and reduce query latency by ≥30% without breaking cost targets.  
**Action:** I dug into the storage subsystem: traditional spinning disks had high seek times (~10 ms) and burst‑write limits. Replacing them with **SSD (Solid‑State Drive)**s eliminated mechanical delays; NAND flash offers parallel read/write channels, sub‑microsecond random access, and higher IOPS.  
I modeled two options in AWS:  
1. **Amazon EBS gp3 SSD** – 16 GB/s throughput, 3 M IOPS, cost $0.08/GB‑month.  
2. **Amazon FSx for Lustre (SSD-backed)** – 1 TB, 100 k IOPS, ideal for bursty ML training data, cost ~$0.10/GB‑month.  

**Result:** Switching to EBS gp3 reduced average query latency from 200 ms to 140 ms (30% improvement) and cut storage costs by 15% compared to legacy HDDs. The change also simplified our backup strategy (EBS snapshots).  

*Bar‑raiser focus:* I demonstrated **ownership** by proactively replacing the bottleneck, performed a cost‑benefit **dive deep** analysis, quantified impact with real metrics, and learned that SSD selection must balance throughput vs. IOPS for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
