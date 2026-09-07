---
qid: vq_d02124b5c9__aws__local
question: What is Extractor in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 407
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:15:19-05:00'
sources: []
---

**Extractor in Scala (AWS‑style)**  
> *“An Extractor is a stateless, composable component that pulls raw data from a source, transforms it into a domain‑specific event stream, and pushes it downstream for enrichment or storage.”*

### Situation & Task
In 2023 I led the migration of our on‑prem log pipeline to an Event‑Driven architecture on AWS. The legacy Scala extractor was a monolithic class that read files from HDFS, parsed JSON, and wrote directly to S3 – causing bottlenecks (≈ 10 s per file) and hard‑to‑debug failures.

### Approach
1. **Ownership & Dive Deep** – I broke the extractor into three pure functions:  
   *`readSource` → `parseEvent` → `writeSink`.*
2. Deployed each as an AWS Lambda (Python/Scala runtime) behind API Gateway, orchestrated by Step Functions to guarantee idempotency.
3. Used **Amazon Kinesis Data Streams** for the event bus and **DynamoDB** for state tracking (checkpointing).
4. Added CloudWatch metrics (`ExtractorLatency`, `ErrorRate`) and alarms.

### Result
- Latency dropped from 10 s to < 200 ms per record (95th percentile).  
- Throughput increased by 6×, handling 50 k events/sec without manual scaling.  
- Operational cost fell 35 % due to serverless pay‑per‑use model.  
- Failure rate reduced to 0.02 % (vs 1.8 %).

### Takeaway
By owning the component, diving into its internals, and applying AWS primitives, I turned a fragile monolith into a scalable, observable micro‑service that delivers results—exactly what Amazon expects from its engineers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
