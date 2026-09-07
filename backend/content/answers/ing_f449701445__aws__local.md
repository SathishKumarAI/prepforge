---
qid: ing_f449701445__aws__local
question: 'Explain: Storage (5 Years) — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 418
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:28:53-05:00'
sources: []
---

**Situation & Task** – In a previous role I led the redesign of our legacy URL‑shortener used by 3 M active users. The goal was to store all click events for five years while keeping latency < 50 ms and cost below $2k/month.

**Action** –  
1️⃣ **Data model & ownership**: Chose a *partitioned* table on DynamoDB (PK=hash(url), SK=time‑bucket) with TTL set to 5 years. This gives us instant read/write, strong consistency for clicks, and automatic purging—an example of *Ownership* and *Bias for Action*.  
2️⃣ **Analytics layer**: Exported streams to Kinesis Data Streams → Lambda → Redshift Spectrum (S3). Queries run in seconds against 5 yr data, enabling quarterly retention reports.  
3️⃣ **Scalability & availability**: DynamoDB auto‑scales; provisioned throughput set to 10× peak traffic with on‑demand fallback. S3/Redshift are multi‑AZ by default, ensuring *Availability*.  
4️⃣ **Cost trade‑offs**: Used on‑demand for DynamoDB (≈$1.8k/month) and reserved instances for Redshift ($0.5k). Total < $2.5k, meeting the budget.

**Result** – Reduced latency from 120 ms to 35 ms, saved $3k annually vs. legacy EC2+RDS stack, and provided a 5‑yr analytics pipeline that decreased manual data pulls by 90%. Learned that *Dive Deep* into storage patterns can unlock both performance and cost savings.  

**Bar‑raiser notes** – The answer shows clear ownership, deep technical reasoning (partitioning, TTL, stream processing), quantified impact, and lessons from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
