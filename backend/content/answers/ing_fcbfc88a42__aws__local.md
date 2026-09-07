---
qid: ing_fcbfc88a42__aws__local
question: 'Explain: Design the Twitter timeline and search — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 461
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:49:17-05:00'
sources: []
---

**Situation / Task**  
When I joined the new data‑science team at a startup, we were asked to prototype a **Twitter‑style timeline and search** service that could serve 1 M active users with sub‑second latency while keeping costs under $10k/month.

**Action**  
I scoped the requirements: (1) real‑time fanout of tweets, (2) personalized ranking, (3) full‑text search.  
*Timeline*: I designed a **fan‑in architecture**—each tweet is appended to a **Kinesis Data Stream**, then processed by Lambda into a **Redis‑Cluster** (AWS ElastiCache) per user shard for low‑latency reads. For scalability I partitioned the stream by user hash, allowing horizontal scaling of Kinesis shards and Redis nodes.  
*Search*: I indexed tweets in **Amazon OpenSearch Service** with an ingest pipeline that enriches text via AWS Comprehend (sentiment). Query latency < 200 ms was achieved using query rewriting and cached top‑N results in a separate DynamoDB table.  
I also added a **metrics dashboard** (CloudWatch + Grafana) to track QPS, cache hit ratio, and cost per request.

**Result**  
The prototype handled 300k TPS during load tests, with < 150 ms latency for 95% of timeline requests, and the search returned relevant results in 180 ms. Monthly operational cost stayed at $8.5k, 15% below budget. The system’s modular design enabled us to roll out a “trending topics” feature that increased user engagement by 22%.

**Learnings & Bar‑Raiser Lens**  
I took full ownership of the end‑to‑end flow, diving deep into AWS cost models and latency trade‑offs. I quantified impact (latency, cost, engagement) and iterated on failure points—e.g., Redis eviction policies—before production rollout. This aligns with **Customer Obsession**, **Ownership**, and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
