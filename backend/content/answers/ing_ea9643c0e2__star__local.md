---
qid: ing_ea9643c0e2__star__local
question: What is Log Rotation? How Does it Work? — What Is Log Rotation and How Does
  It Work? | Mezmo
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 360
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:17:27-05:00'
sources: []
---

**Situation**  
While leading the infrastructure team for a SaaS analytics platform, we hit a bottleneck: our daily ingestion pipeline produced ~120 GB of logs per day, and after two weeks the disk quota on our central ELK cluster was exceeded, causing service interruptions.

**Task**  
I needed to design an automated log‑rotation strategy that preserved critical audit data for 90 days while keeping storage usage under 200 GB, all without impacting ingestion latency or requiring downtime.

**Action**  
First, I evaluated the current log format and identified rotation points: hourly JSON files written to S3. Using AWS Lambda triggered by CloudWatch Events every hour, I scripted a rotation job that zipped the file, calculated its SHA‑256 checksum for integrity, and moved it to an “archive” S3 bucket with lifecycle rules set to transition to Glacier after 30 days and permanently delete after 90 days. For real‑time access, I maintained a small “hot” cache in Amazon EFS mounted on the ingestion nodes, purging entries older than one day via cron. This approach leveraged serverless functions for zero‑downtime execution and avoided manual pruning.

**Result**  
Storage consumption dropped from 120 GB to ~35 GB per month, keeping us well below the quota while still retaining all audit logs for compliance. The rotation process added less than 0.5 ms to each ingestion request, and we eliminated manual log clean‑ups entirely. I learned that a combination of event‑driven automation, lifecycle policies, and lightweight caching can turn an infrastructure pain point into a scalable, cost‑effective solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
