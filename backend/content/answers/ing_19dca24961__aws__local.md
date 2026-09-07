---
qid: ing_19dca24961__aws__local
question: 'Explain: Tier-selection table — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 449
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:56-05:00'
sources: []
---

**Situation & Task**  
While designing a serverless chatbot that could remember user context across millions of concurrent sessions, I realized our single‑tier RDS instance was throttling on read latency (average 120 ms → 5 % SLA breach). I needed a scalable “Tier‑Selection Table” to separate *short‑term* state from *long‑term* memory without sacrificing cost.

**Action**  
I proposed a two‑tier architecture:  
1. **Fast Tier – DynamoDB** (partition key = `agent_id`, sort key = `timestamp`) for the last 5 minutes of conversational state. Uses provisioned capacity with on‑demand burst to handle 50k R/W ops/s, ensuring <10 ms latency.  
2. **Long‑Term Tier – S3 + Glue** where we archive older interactions nightly into compressed Parquet, indexed by `agent_id`. Athena queries retrieve context when needed (≤200 ms).  

Implemented an AWS Lambda orchestrator that migrates rows older than 5 min from DynamoDB to S3, ensuring data consistency. Added CloudWatch metrics and a Lambda‑driven alarm that auto‑scales DynamoDB read capacity during traffic spikes.

**Result**  
- Latency dropped from **120 ms → 8 ms** for active sessions (99th percentile).  
- Cost reduced by **32 %** per month (DynamoDB reserved capacity + S3 storage).  
- SLA compliance improved to **>99.9 %** uptime over a 6‑month test period.

**Learning & Ownership**  
I owned the end‑to‑end pipeline, performed A/B tests, and iterated on the migration window until the trade‑off between freshness and cost hit the sweet spot. This exercise deepened my understanding of *Dive Deep* (profiling latency) and *Customer Obsession* (ensuring users never experience stale context).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
