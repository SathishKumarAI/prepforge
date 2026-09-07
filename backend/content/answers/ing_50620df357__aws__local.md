---
qid: ing_50620df357__aws__local
question: 'Explain: Terminology — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 471
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:27:01-05:00'
sources: []
---

**Leadership Principles:** *Ownership*, *Dive Deep*  

**Situation (S)** – I was tasked at my previous role to build a real‑time leaderboard for a global gaming platform that served ~5 M concurrent users and had to rank players every 30 s. The existing solution lagged by minutes, hurting player engagement.

**Task (T)** – Deliver an end‑to‑end system that updates rankings in near real‑time, scales to millions of events per second, and keeps latency < 200 ms while staying under $5k/month.

**Action (A)** –  
1. **Event ingestion:** Use Amazon Kinesis Data Streams for high‑throughput, low‑latency event capture; set shard count to 10 for ~100k TPS.  
2. **Processing & aggregation:** Deploy AWS Lambda (or Fargate if stateful) to run a *streaming window* algorithm that updates per‑user scores in Amazon DynamoDB with `GSI` on score and timestamp.  
3. **Leaderboard materialization:** Every 30 s, a scheduled Lambda scans the GSI, writes the top‑N rows into an Amazon ElastiCache Redis cluster (read replica for high read concurrency).  
4. **API layer:** API Gateway + Lambda authorizer serves `/leaderboard` with pagination; CloudFront caches results for 5 s to offload DynamoDB reads.  
5. **Observability:** CloudWatch metrics + X-Ray traces to monitor latency, error rates, and shard utilization.

**Result (R)** – Achieved < 150 ms average read latency, 99.9% availability during peak load, and a cost of $3.8k/month. Player retention increased by 12% in the first quarter post‑launch.  

**Bar‑raiser notes:** I owned every component—design, implementation, ops—and dove deep into sharding thresholds, retry back‑off logic, and cold‑start mitigation. The quantified uplift demonstrates clear business impact, and after a mid‑project outage I introduced automated shard rebalancing to prevent recurrence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
