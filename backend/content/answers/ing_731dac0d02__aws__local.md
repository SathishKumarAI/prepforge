---
qid: ing_731dac0d02__aws__local
question: 'Explain: Scaling Our Logging System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 436
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:45:54-05:00'
sources: []
---

**Situation & Task**  
When I joined the ML Ops team at a fintech startup, our experiment‑run logs were stored in a single S3 bucket and queried via Athena. As model iterations grew from 50 to 5,000 per month, query latency rose from 2 s to >30 s, jeopardizing *Customer Obsession*—our users couldn’t get real‑time diagnostics.

**Action**  
I re‑architected the pipeline with **AWS Kinesis Data Firehose → Lambda → DynamoDB (partition key = experiment_id) → S3 Glacier for long‑term storage**.  
1. *Ownership*: I drafted a 2‑week sprint plan, owned stakeholder alignment, and set SLAs (≤ 5 s query time).  
2. *Dive Deep*: Logged each step’s throughput; discovered the bottleneck was S3’s single‑partition table.  
3. *Bias for Action*: Deployed the new flow in a blue/green setup within 48 h.  
4. *Invent & Simplify*: Used DynamoDB Streams to trigger an Athena materialized view, eliminating ad‑hoc scans.

**Result**  
- Query latency dropped from **30 s → 3 s** (10× faster).  
- Monthly log volume increased by **600 %** without performance loss.  
- Cost fell from $1,200/month to **$650/month** due to efficient tiering and reduced Lambda invocations.

**Learnings & Bar‑Raiser Signals**  
I documented failure points, performed a post‑mortem on the initial S3 bottleneck, and iterated on partition strategy—showing *Ownership* and continuous improvement. The design balances **scalability**, **availability** (multi‑AZ DynamoDB), and **cost**, aligning with Amazon’s metrics‑driven culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
