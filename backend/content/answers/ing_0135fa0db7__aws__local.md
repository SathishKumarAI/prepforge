---
qid: ing_0135fa0db7__aws__local
question: 'Explain: Communications — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 479
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:27:14-05:00'
sources: []
---

**Situation & Task**  
When I joined a startup that wanted to launch a public paste‑bin service, the engineering lead asked me to design a scalable, highly available system that could ingest, store and serve code snippets with minimal latency. The goal was to handle 10 k writes/sec while keeping read latency under 50 ms for 99.9% of traffic.

**Approach & Design**  
I broke the problem into three layers: ingestion, persistence, and delivery.

| Layer | AWS Service(s) | Reasoning |
|-------|----------------|-----------|
| Ingestion | API Gateway + Lambda (with provisioned concurrency) | Serverless for instant scaling; 99.9% SLA with minimal ops. |
| Persistence | DynamoDB (partition key = `repo_id`, sort key = `snippet_id`) + S3 for large files | DynamoDB gives single‑digit ms reads, S3 stores blobs cost‑effectively; cross‑region replicas for durability. |
| Delivery | CloudFront edge cache + Lambda@Edge to rewrite URLs | Reduces latency globally; cache invalidation on new snippet ensures freshness. |

**Dive Deep – Trade‑offs**  
- **Scalability**: DynamoDB auto‑scales with read/write capacity units, avoiding hot partitions by hashing `repo_id`.  
- **Availability**: Multi‑AZ replication and CloudFront edge caching guarantee 99.999% uptime.  
- **Cost**: Serverless reduces idle compute; S3 lifecycle policies delete old snippets after 30 days to keep storage cheap.

**Result**  
After launch, the service handled 15 k writes/sec during a marketing campaign with no outages. Read latency stayed below 40 ms for 99.95% of requests, and monthly operational cost was 35% lower than a traditional EC2‑based stack.

**Reflection (Bar‑raiser cues)**  
I owned the end‑to‑end design, dug into DynamoDB’s partitioning nuances, quantified performance with real traffic data, and iterated after an initial cold‑start spike by adding provisioned concurrency. This demonstrates *Ownership*, *Dive Deep*, and *Bias for Action*—core Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
