---
qid: ing_15569d22cd__aws__local
question: What is context rot, and what compaction strategies do you use in long-running
  agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 590
total_tokens: 827
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:13:23-05:00'
sources: []
---

**Context Rot & Long‑Running Agent Compaction**

*Leadership Principles:* **Ownership**, **Dive Deep**

---

### Situation  
I led a team that built an AI‑driven virtual assistant for e‑commerce (10M active users). The agent maintained conversational state across multi‑hour sessions. After 6 months, we observed a 25 % drop in response accuracy and latency spiked from 200 ms to >1 s.

### Task  
Diagnose the root cause and design a scalable compaction strategy that preserves user experience while keeping memory footprint under 4 GB per instance.

### Action  

| What | How | AWS Services |
|------|-----|--------------|
| **Identify “context rot”** – stale, unused turns diluting relevance | Instrumented each token with *recency score* and built a Bloom‑filter to flag obsolete contexts. | CloudWatch + X-Ray for telemetry; DynamoDB Global Tables for state metadata |
| **Compaction policy** – “Trim‑by‑Utility” | 1️⃣ Compute utility = `recency × importance (slot weight)`. 2️⃣ Keep top‑N turns (N=20). 3️⃣ Persist trimmed context to S3 in Parquet; load on demand. | Lambda for batch compaction; Amazon SageMaker for training utility model |
| **Scalable storage** – avoid hot‑spotting | Partition by `session_id + hour`; use S3 Transfer Acceleration + CloudFront caching for low‑latency retrieval. | S3 Intelligent Tiering, Glacier for long‑term archival |
| **Cost & Availability** | Cold data in Glacier → $0.004/GB‑month vs $0.023/GB‑month in S3 Standard. Use Multi‑AZ RDS for metadata; read replicas for high availability. | Aurora Serverless v2 (pay per use), Amazon ElastiCache Redis for session cache |

### Result  
- Latency dropped to 180 ms (30 % improvement).  
- Accuracy improved from 78 % to 92 % on NLU F1 score.  
- Memory usage fell from 6 GB to 3.2 GB per agent, freeing capacity for 40 % more concurrent sessions.  

### Learnings  
*Ownership* – I took end‑to‑end responsibility from monitoring to deployment.  
*Dive Deep* – The Bloom‑filter + utility model revealed that 60 % of tokens were never referenced again.  
*Fail fast* – Initial policy (random trimming) caused a 15 % accuracy drop; pivoted quickly after A/B testing, illustrating the value of iterative learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
