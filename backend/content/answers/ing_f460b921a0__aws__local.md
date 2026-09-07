---
qid: ing_f460b921a0__aws__local
question: 'Explain: 4.3 Search Indexes — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 417
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:29:09-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign Instagram’s *Search Index* (v4.3) so that a user could retrieve relevant posts in < 200 ms while the platform scales to 1 B daily active users. The goal was to improve hit‑rate and reduce backend cost.

**Action – Design & AWS Services**  
- **Data ingestion**: Use Kinesis Data Streams → Lambda → DynamoDB Streams to capture post metadata (tags, geotag, likes).  
- **Indexing engine**: Elastic Search (Amazon OpenSearch Service) for full‑text and geo‑search; shard per region, auto‑scaling based on query rate.  
- **Caching layer**: Redis‑compatible ElastiCache to store hot query results; TTL 5 min.  
- **Query path**: API Gateway → Lambda Authorizer → Lambda (service mesh) that first checks cache, then OpenSearch, finally falls back to DynamoDB for edge cases.  
- **Monitoring & autoscaling**: CloudWatch metrics + Application Load Balancer target tracking on QPS; spot instances for index workers.

**Result**  
- Query latency dropped from 350 ms to **190 ms (45% reduction)**.  
- Cache hit‑rate rose to **78%**, cutting OpenSearch traffic by 60%, saving ~$1M/yr in read capacity units.  
- System handled a 4× spike during peak events without SLA violations.

**Reflection & Bar‑raiser cues**  
I owned the end‑to‑end pipeline, diving deep into latency bottlenecks and iterating on shard sizing. The quantified impact (latency, cost) shows ownership. I documented a failure mode where stale tags caused incorrect results; we added a TTL refresh job, turning a risk into a learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
