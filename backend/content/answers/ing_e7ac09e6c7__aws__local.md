---
qid: ing_e7ac09e6c7__aws__local
question: What are the advantages of SSDs? — What is an SSD (Solid-State Drive)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 492
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:02:30-05:00'
sources: []
---

**Answer**

> **Situation:**  
> I led a migration of our recommendation engine from legacy spinning‑disk storage to SSDs in an on‑prem cluster that handled ~10 M daily user requests. The goal was to reduce latency and increase throughput while keeping costs under $50k/month.

> **Task:**  
> Quantify the benefits of SSDs over HDDs for a high‑throughput ML inference pipeline and design a scalable, cost‑effective solution on AWS.

> **Action:**  
> 1. **Performance dive** – benchmarked read/write speeds: SSD (NVMe) gave *~400 MB/s* vs HDD’s *~70 MB/s*, cutting data loading time from 12 s to 2 s per batch.  
> 2. **AWS design** – used **Amazon FSx for Lustre** linked to an **EFS** backed by SSD storage, auto‑scaling IOPS (up to 80k) and a *Burst Buffer* for peak loads.  
> 3. **Availability & cost** – leveraged Multi‑AZ FSx with replication; cost per GB was 30% higher than HDD but the overall system spend dropped from $70k/month to $48k/month due to reduced EC2 CPU usage (CPU‑time down 35%).  
> 4. **Monitoring** – set CloudWatch metrics for IOPS, latency, and auto‑scaling triggers; instituted a post‑mortem loop to refine thresholds.

> **Result:**  
> *Latency* dropped from 350 ms to 80 ms (77% reduction), *throughput* increased by 4×, and *cost per inference* fell 28%. The migration earned the team a “High Impact” award and was adopted company‑wide for all ML pipelines.

**Leadership Principles Anchored:**  
- **Customer Obsession** – delivered faster recommendations to end users.  
- **Ownership & Dive Deep** – performed hands‑on benchmarks, designed AWS architecture, and iterated based on metrics.  

Bar‑raisers look for: concrete ownership, deep technical insight, quantified impact, and a learning loop from post‑mortem data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
