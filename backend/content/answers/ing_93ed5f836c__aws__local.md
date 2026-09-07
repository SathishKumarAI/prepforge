---
qid: ing_93ed5f836c__aws__local
question: 'Explain: Migrate to ILM — Index lifecycle management (ILM) in Elasticsearch
  | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 431
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:00:29-05:00'
sources: []
---

**Situation & Task**  
I led a migration of our on‑prem Elastic cluster (5 TB of log data) to **Amazon OpenSearch Service** and wanted to reduce storage costs while maintaining query performance. The goal was to implement **Index Lifecycle Management (ILM)** so that hot, warm, and cold phases were automatically handled.

**Action**  
1. **Dive Deep into Requirements** – I profiled query patterns: 90 % of searches hit the last 30 days, 10 % queried older data.  
2. **Design ILM Policy** –  
   * Hot phase (≤30 days): 3 replicas on m5.large.search nodes.  
   * Warm phase (31‑365 days): 1 replica on r5.large.search nodes with reduced refresh interval.  
   * Cold phase (>365 days): move to S3 via OpenSearch’s **Index State Management** “freeze” action, then rehydrate on demand using **S3 Select**.  
3. **Implement & Test** – Deployed policy in a staging domain; used **Lambda** (Python) to monitor `indices.stats` and auto‑scale nodes per phase.  
4. **Measure Impact** – After 90 days: storage cost dropped from $12k/month to $5k/month (58 % savings); query latency for hot data improved by 15 %.  

**Result**  
- Achieved **$7k/month** annual savings while keeping SLAs.  
- Demonstrated ownership and bias for action; learned that tuning `shrink` actions in warm phase avoided unnecessary reindexing overhead.

**Bar‑raiser check** – I owned the end‑to‑end migration, dived deep into performance data, quantified cost & latency impacts, and iterated on ILM settings after a failed initial shrink attempt.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
