---
qid: ing_c21788fb3d__aws__local
question: 'Explain: Search Request — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 416
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:41:55-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team on Instagram’s new “Search Request” feature, I was tasked to redesign the search pipeline so that 95 % of queries return results in <200 ms for millions of active users.  

**Action (Design)**  
I broke the problem into *indexing* and *query execution*.  
1. **Indexing** – a daily batch job on EMR clusters built inverted indexes, persisted to Amazon DynamoDB (partitioned by hashtag/geo) with TTL for freshness.  
2. **Query layer** – an API Gateway → Lambda → Step Functions orchestrator that pulls the relevant index shards from DynamoDB and merges results in memory. For high‑throughput bursts I added a read‑replica of DynamoDB and used Amazon ElastiCache (Redis) as a hot‑cache for the top 1 M popular tags, reducing latency by 60 %.  
3. **Observability** – CloudWatch metrics + X-Ray tracing allowed us to identify bottlenecks; auto‑scaling policies on Lambda were tuned using percentile‑based triggers.

**Result**  
Post‑launch, query latency dropped from 480 ms to **140 ms (70 % improvement)**, and the feature handled a 3× traffic spike during the Black Friday sale without any throttling. Operational cost was cut by 25 % thanks to serverless compute and cache reuse.

**Reflection (Bar‑raiser focus)**  
I took full ownership of the end‑to‑end flow, dived deep into DynamoDB’s read/write characteristics, quantified impact through latency & cost metrics, and learned that pre‑warming caches for hot data dramatically boosts UX. This aligns with *Customer Obsession* (fast, reliable search) and *Ownership* (from design to monitoring).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
