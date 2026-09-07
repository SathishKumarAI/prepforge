---
qid: ing_de56085bcc__aws__local
question: 'Explain: Shards — What is Database Sharding? - Shard DB Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 396
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:42:20-05:00'
sources: []
---

**Situation & Task**  
When I joined the Data Engineering team at a fast‑growing fintech, our monolithic PostgreSQL database hit 3 TB and latency jumped to 250 ms for key user queries—unacceptable for real‑time fraud detection. The leadership directive was clear: **Own** the performance issue and deliver results within two sprints.

**Action**  
I introduced *sharding*—partitioning data horizontally across multiple nodes so each shard holds a subset of rows (by customer ID). I designed an auto‑scaling architecture on **Amazon Aurora Serverless v2** for the shards, using **AWS Global Accelerator** to route traffic by region. A lightweight **Lambda layer** handled shard routing logic; we stored metadata in **DynamoDB** for fast lookup. To keep consistency, I implemented a *two‑phase commit* pattern over **SNS/SQS**, ensuring atomic writes across shards.

I also added **Amazon CloudWatch** metrics and **X-Ray** tracing to surface latency per shard, enabling proactive scaling.

**Result**  
- Query latency dropped from 250 ms → <30 ms (10× improvement).  
- Throughput increased by 4×, supporting 20k TPS during peak fraud‑scan windows.  
- Operational cost fell 25% due to Aurora Serverless’s pay‑as‑you‑go model.

**Reflection**  
I learned that sharding is not a silver bullet; it requires careful consistency handling and monitoring. I documented the trade‑offs (complexity vs. performance) for future teams, embodying **Customer Obsession**, **Ownership**, and **Dive Deep**—hallmarks of an Amazon bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
