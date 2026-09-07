---
qid: ing_2962a43068__aws__local
question: 'Explain: Horizontal Scaling — System Design was HARD until I Learned these
  30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 456
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:59:18-05:00'
sources: []
---

**Situation (S)**  
At my previous role we had a recommendation engine that was built on a single‑node Spark cluster. The data volume doubled every month and latency hit 4 s for 90 % of requests, hurting the **Customer Obsession** principle.

**Task (T)**  
I needed to redesign the system so it could handle 10× traffic while keeping cost under $50k/month, thereby improving user experience and revenue.

**Action (A)**  
1. **Dive Deep into metrics** – collected request latency, CPU, memory, and network I/O.  
2. **Horizontal Scaling blueprint** – split the pipeline into three stateless services: Ingest → Feature Store → Model Inferencing.  
3. **AWS services chosen** –  
   * **Amazon Kinesis Data Streams** for real‑time ingestion (auto‑scales with shards).  
   * **Amazon SageMaker Endpoint** behind an **Application Load Balancer** (ALB) to auto‑scale inference nodes using target tracking on CPU utilization.  
   * **AWS Lambda + Amazon DynamoDB** for feature lookup, eliminating the single point of failure.  
4. **Cost & Availability** – used spot instances for training jobs and reserved instances for steady inference traffic; set up cross‑AZ ALB for 99.99 % availability.  
5. **Iterative testing** – deployed to a staging cluster, ran load tests, tuned shard count and instance type.

**Result (R)**  
Latency dropped from 4 s to <200 ms (95th percentile). Traffic grew from 1M to 12M requests/month with cost staying at $48k. Revenue increased by 18 % due to higher conversion rates.  

*Bar‑raiser notes:* I demonstrated **Ownership** by leading the end‑to‑end redesign, performed a deep dive into data, quantified impact, and learned from an initial failure where we over‑provisioned shards—subsequently optimizing shard count reduced costs by 12 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
