---
qid: ing_d71e3a3415__aws__local
question: 'What is Active-Active Geo Distribution? — Data replication explained: types,
  examples & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 419
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:25:53-05:00'
sources: []
---

**Answer (Amazon Style)**  

> **Situation:** I was tasked with designing a global recommendation engine for an e‑commerce platform that needed < 1 ms latency worldwide and 99.999% availability.  
> **Task:** Implement *Active‑Active Geo Distribution* so every region could serve reads/writes concurrently while keeping data consistent across the globe.  
> **Action:** I chose **Amazon DynamoDB Global Tables** (multi‑region, active‑active) and added **DynamoDB Streams + AWS Lambda** for conflict resolution using a last‑write‑wins policy on timestamped events. For analytical workloads I replicated tables to **Amazon Redshift Spectrum** via **S3 Data Lakes**.  
> • **Scalability:** DynamoDB auto‑scales; each region handles 1 M RCU/WCU, giving sub‑10 ms latency.  
> • **Availability:** Multi‑AZ + multi‑region ensures 99.999% uptime; regional failover is instant.  
> • **Cost:** ~12 $/hour for hot tables (≈ $8k/month) vs. $4k if single‑active, but we gained 5× faster global response and avoided 3‑hour outages that cost ~$1M in lost sales.  
> **Result:** Global latency dropped from 250 ms to 12 ms; revenue grew 18% YoY while incident rate fell by 95%.  

**Leadership Principles Highlighted**

* **Ownership** – I led the end‑to‑end architecture and drove cross‑regional ops teams.  
* **Dive Deep** – I benchmarked latency, analyzed conflict logs, and tuned provisioned capacity.  

Bar‑raiser focus: clear ownership narrative, quantified impact (latency & revenue), deep technical reasoning, and lessons learned from a prior single‑active deployment that caused costly downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
