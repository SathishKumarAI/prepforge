---
qid: ing_215ab2b1dc__aws__local
question: AWS re:Invent 2021 - Which NoSQL database is right for you?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 486
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:45-05:00'
sources: []
---

**Situation (S)**  
While leading the data‑engineering team for a fintech startup, we needed to ingest ~10 M events per day from mobile wallets into a real‑time fraud‑detection pipeline. The requirement was sub‑millisecond latency for read/write, high write throughput, and flexible schema for evolving event attributes.

**Task (T)**  
Choose an AWS NoSQL database that could scale elastically, keep costs predictable, and let us iterate quickly on the data model without costly migrations.

**Action (A)**  
I evaluated DynamoDB, Amazon DocumentDB, and Amazon Neptune. I ran a benchmark with 1 M writes/sec and 10 k reads/sec using the AWS SDK and AWS DAX for caching.  

* **DynamoDB** met all SLAs: <2 ms latency, on‑demand scaling, built‑in global tables for multi‑region redundancy, and automatic provisioned throughput throttling.  
* I designed a single‑table pattern with composite keys (`eventId#timestamp`) and GSIs for fraud score queries.  
* Integrated **DAX** (in‑memory cache) to reduce read latency to <0.5 ms.  
* Leveraged **AWS Lambda + EventBridge** for real‑time ingestion, and **AWS CloudWatch** metrics for autoscaling alerts.

**Result (R)**  
Within three months we handled 15 M events/day with a 99.999% availability SLA, keeping the database cost at $1.2k/month—30 % below our forecasted budget. The latency drop enabled the fraud engine to block suspicious transactions in <200 ms, increasing revenue protection by 12%.

**Leadership Principles Highlighted**  
* **Customer Obsession** – delivered a system that protected user funds with sub‑millisecond decisions.  
* **Ownership & Dive Deep** – I owned the benchmark study, dissected performance bottlenecks, and iterated until we hit our SLAs.

**Bar‑raiser cues** – The answer demonstrates ownership (end‑to‑end solution), depth (benchmark data, design patterns), quantified impact (cost savings, latency improvement), and learning from failure (initial trial with Neptune was discarded after profiling).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
