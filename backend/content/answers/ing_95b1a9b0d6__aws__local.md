---
qid: ing_95b1a9b0d6__aws__local
question: 'Explain: Apache Lucene - Apache Lucene Core'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 508
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:04:22-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of our legacy on‑prem search stack to a cloud‑native solution that had to support *10 M queries/day* while keeping latency under **200 ms**. The core requirement was an open‑source, highly tunable index engine.

**Action – Technical Design**  
I chose **Apache Lucene Core** because it provides the low‑level inverted‑index data structures that drive Elasticsearch/OpenSearch and gives us full control over tokenization, scoring, and field compression.  
*Architecture:*  
- **Indexing Layer**: Java microservice (Spring Boot) streams documents from S3 into a Lucene `RAMDirectory`, then commits to an on‑disk `FSDirectory`.  
- **Query Layer**: A stateless REST API (AWS Lambda behind ALB) loads the latest index snapshot into memory and executes queries using `IndexSearcher`.  
- **Storage & Scaling**: Indices are stored in S3 Glacier for cost, with lifecycle policies moving hot indices to EBS‑optimized EC2 instances. We use DynamoDB to track version metadata and trigger reindexing via EventBridge.  

*Scalability & Availability:*  
- Horizontal scaling of Lambda functions gives burst capacity; the stateless design means no single point of failure.  
- Index replication across two AZs ensures 99.99 % availability.  
- Cost is ~**$0.02 per GB‑month** for S3, vs $2–$4 for managed OpenSearch clusters at similar traffic.

**Result (STAR)**  
The migration cut query latency from **350 ms to 180 ms** and reduced infrastructure spend by **35 % ($120k/yr)** while maintaining 99.999 % uptime.  

**Reflection & Bar‑Raiser Insight**  
I owned the end‑to‑end pipeline, dived deep into Lucene’s scoring algorithms to tune relevance, quantified every change (latency, cost), and learned that exposing the index layer to a Lambda cache can double throughput—an insight I’ll bring to future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
