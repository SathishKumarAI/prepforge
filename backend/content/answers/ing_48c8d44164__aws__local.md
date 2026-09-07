---
qid: ing_48c8d44164__aws__local
question: 'Explain: Summary — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 765
total_tokens: 994
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:10:00-05:00'
sources: []
---

**Scenario (S)**  
I was asked to design a high‑throughput “summary & indexing” service for an internal analytics platform that ingests 10 TB of log data daily and must return keyword‑rich summaries in < 2 s for ad‑hoc queries.

**Task (T)**  
Build a scalable, fault‑tolerant pipeline that parses raw logs → generates concise summaries + searchable indices, while keeping cost under $5k/month.

**Action (A)**  

| Step | AWS Service | Why |
|------|-------------|-----|
| Ingest & parse | **Amazon Kinesis Data Streams** + **AWS Lambda** | Real‑time capture with autoscaling; Lambda handles 10 TB/day without provisioning. |
| Feature extraction | **Amazon SageMaker Endpoint (Batch Transform)** | Pre‑trained NLP model for summarization and keyword extraction, cost‑effective batch mode. |
| Indexing | **Elasticsearch Service (OpenSearch)** on **EBS gp3** | Full‑text search with high write throughput; dedicated nodes for hot data. |
| Orchestration | **AWS Step Functions** | Guarantees eventual consistency, retries, and visibility into each stage. |
| Monitoring | **Amazon CloudWatch + X-Ray** | Latency tracing (≤ 2 s) and cost metrics. |

**Design Choices**

* *Scalability*: Kinesis shards auto‑scale; Lambda concurrency limits are set to 10k to match ingestion peaks. OpenSearch domain uses 3 data nodes with burstable IOPS for write spikes.
* *Availability*: Multi‑AZ deployment of all services; Step Functions retries on transient errors, ensuring at least one copy of the summary is always available.
* *Cost*: Estimated monthly spend: Kinesis ($1.2k) + Lambda ($0.8k) + SageMaker batch ($0.5k) + OpenSearch ($2.4k) = **$5k**.

**Result (R)**  

* Latency dropped from 15 s to < 2 s (90% reduction).  
* Query throughput increased from 200 QPS to > 1,500 QPS without degradation.  
* Operational cost stayed within the $5k budget for a year.

---

### Leadership Principles Highlighted

| Principle | How it Shines |
|-----------|---------------|
| **Customer Obsession** | Delivered sub‑2‑second summaries that empowered analysts to act faster. |
| **Ownership** | Took full responsibility for end‑to‑end pipeline, from ingestion to monitoring. |
| **Dive Deep** | Tuned shard counts, Lambda concurrency, and OpenSearch node sizing based on actual metrics. |
| **Bias for Action** | Deployed a prototype in two weeks, iterated quickly based on real feedback. |
| **Deliver Results** | Exceeded performance targets while staying within budget. |

---

### What the Bar‑Raiser Looks For

1. **Ownership** – I drove every component from concept to production and set up monitoring for ongoing health.  
2. **Dive Deep** – I quantified shard counts, Lambda concurrency, and node sizing with real data; not just “use the default.”  
3. **Quantified Impact** – 90% latency reduction, > 6× throughput increase, cost within $5k/month.  
4. **Learning from Failure** – Initial prototype hit throttling; I adjusted Kinesis scaling and added a retry layer in Step Functions, turning a bottleneck into a learning point.

*This answer blends AWS service knowledge with Amazon’s leadership mindset to show both technical depth and business impact.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
