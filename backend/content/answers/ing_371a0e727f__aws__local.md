---
qid: ing_371a0e727f__aws__local
question: 'Explain: Requirements — Hitcounterdesigntwitter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 429
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:29:16-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I was tasked with designing a real‑time “tweet‑view” counter that would serve 200 M active users and support a 10× traffic surge during trending events.

**Action (Dive Deep + Ownership)**  
1. **Requirements** – Accuracy within ±5% over any 5‑minute window; latency < 50 ms per hit; cost ≤ $0.05/1 M hits.  
2. **Architecture** –  
   * **API Gateway → Lambda** to ingest view events (stateless, auto‑scaling).  
   * **Kinesis Data Streams** buffer bursts and provide replay for failures.  
   * **DynamoDB Global Tables** store per‑tweet counters with conditional writes; provisioned throughput 1 kWCU ensures 99.999% availability.  
   * **S3 + Athena** archive raw events for audit and trend analysis (pay‑as‑you‑query).  
3. **Scaling & Cost** – Lambda scales to thousands of concurrent invocations; Kinesis shards auto‑grow (≤ $0.02/shard‑hr). DynamoDB’s on‑demand mode keeps costs predictable (~$0.25/GB‑month).  

**Result (Deliver Results)**  
- Deployed in 3 weeks; hit‑count accuracy 99.7% during a 12‑hour meme surge, with < 30 ms latency for 95th percentile requests.  
- Reduced per‑hit cost from $0.08 to $0.04 by eliminating synchronous DB writes.  

**Learnings (Bar‑raiser cues)**  
- Early sanity checks on throughput assumptions avoided a costly over‑provisioning mistake.  
- Continuous monitoring of Kinesis lag taught us to auto‑scale shards during flash crowds, ensuring zero data loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
