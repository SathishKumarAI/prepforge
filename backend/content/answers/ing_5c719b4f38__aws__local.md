---
qid: ing_5c719b4f38__aws__local
question: 'Explain: Distinguish working memory from persistent memory in agent design.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 459
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:54:20-05:00'
sources: []
---

**Situation / Task**  
I was leading a team to build an autonomous recommendation agent for our e‑commerce platform. The core challenge was deciding how the agent should store short‑term context (working memory) versus long‑term knowledge (persistent memory).

**Action**  
1. **Define requirements** – Working memory must hold up to 20 user actions per session, be refreshed every 2 seconds, and support real‑time inference. Persistent memory needed to retain millions of product embeddings, user profiles, and interaction logs for offline model training.  
2. **Design** –  
   *Working Memory*: Use an in‑memory cache (Redis‑Cluster) with LRU eviction, TTL=5 s, backed by AWS ElastiCache for low latency (< 1 ms). This satisfies the bias‑for‑action principle: instant read/write without disk I/O.  
   *Persistent Memory*: Store embeddings and logs in Amazon S3 (object storage) and a transactional layer in DynamoDB (partitioned by user ID) for fast point queries. Periodic ETL jobs (AWS Glue) aggregate data into Amazon Redshift for batch analytics.  
3. **Scalability & Cost** – Redis auto‑scales with provisioned memory; S3 scales virtually unlimited, while DynamoDB’s on‑demand capacity keeps costs predictable.  

**Result**  
The agent achieved a 27 % lift in conversion rate within three months of deployment. Working memory latency dropped from 15 ms to <1 ms, meeting our SLA. The persistent layer enabled a 40 % reduction in model retraining time.

**Reflection (Bar‑raiser check)**  
*Ownership*: I owned the end‑to‑end architecture and drove cross‑team alignment.  
*Dive Deep*: I quantified latency, throughput, and cost trade‑offs for each AWS service.  
*Learned from Failure*: Early trials with a monolithic RDS failed due to write bottlenecks; pivoting to Redis & DynamoDB resolved the issue, illustrating iterative learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
