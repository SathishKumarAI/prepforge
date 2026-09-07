---
qid: ing_a836ffa874__aws__local
question: 'Explain: Rollover — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 398
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:47:11-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous company we built a real‑time log analytics platform on AWS for 1 M+ daily events. The ingestion rate spiked during promotions, causing the primary index to grow beyond our hot‑node capacity and latency to hit 200 ms. I was tasked with redesigning the rollover strategy so that performance stayed below 100 ms while keeping storage costs predictable.

**Action (A)**  
I introduced **Elasticsearch data streams** with a *rollover policy* driven by index size (`max_size: 50GB`) and age (`max_age: 7d`). The pipeline uses `ingest-attachment` to parse logs, then the data stream automatically creates a new backing index when limits are hit. I also enabled **index lifecycle management (ILM)** to move older indices to cold storage on S3 via EBS snapshots, and set up an AWS Lambda function that triggers every 30 min to check for orphaned indices and delete them.

**Result (R)**  
- Latency dropped from 200 ms to < 80 ms for 99.9% of queries.  
- Storage cost decreased by 35 % because cold data was archived automatically.  
- Operational overhead fell by 70 %—no manual index splits or deletions were required.

**Learning & Bar‑raiser focus**  
I *owned* the entire pipeline, diving deep into Elasticsearch internals and AWS cost modeling. I quantified impact with clear metrics (latency, cost) and iterated after a failed attempt that ignored `max_age`, learning to balance size vs age for predictable rollovers. This showcases **Ownership**, **Dive Deep**, and **Deliver Results**—the qualities Amazon looks for in an engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
