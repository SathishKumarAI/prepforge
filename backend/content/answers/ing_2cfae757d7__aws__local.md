---
qid: ing_2cfae757d7__aws__local
question: 'Explain: Functional Requirements — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 447
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:06:30-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of a public‑facing leaderboard for a mobile game that had 12 M monthly active users (MAU). The existing system lagged by 4 s per request, caused API throttling, and produced stale rankings during peak hours. My goal was to deliver real‑time updates with sub‑100 ms latency while keeping the cost below $5k/month.

**Action – Design & AWS Services**  
1. **Event ingestion** – Game clients emit `score_update` events to **Amazon Kinesis Data Streams** (shard size 500 kb/s).  
2. **Stream processing** – A **Lambda** function aggregates scores per user, writes a “partial” ranking into **DynamoDB Global Secondary Index** (`rank‑idx`) and pushes the delta to **Amazon SNS** for real‑time feeds.  
3. **Leaderboard query** – Clients call an API Gateway endpoint that invokes another Lambda reading from the GSI; we use **DAX (DynamoDB Accelerator)** for 1 ms cache hits.  
4. **Historical analytics** – A nightly Glue job materializes cumulative scores into a Redshift spectrum table, enabling long‑term trend reports.

**Result**  
- Latency dropped from 4 s to 70 ms (average).  
- API error rate fell below 0.01%.  
- Monthly cost stayed at $3.8k, 15% under budget.  
- Player engagement increased by 9%, evidenced by a 1.2× lift in daily session length.

**Reflection & Learning**  
I owned the entire stack, iterated quickly (Bias for Action), and used CloudWatch metrics to dive deep into bottlenecks. The biggest failure was an initial assumption that DynamoDB alone could handle peak write traffic; switching to Kinesis + Lambda eliminated write stalls. This experience reinforced my focus on **Ownership**, **Dive Deep**, and delivering measurable results—core Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
