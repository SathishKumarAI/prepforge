---
qid: ing_86dfa0f32a__aws__local
question: 'Explain: Week 5-6: Advanced Patterns (Backtracking, Graphs, Heaps)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 458
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:29:04-05:00'
sources: []
---

**Situation & Task**  
In my senior data‑science role at a fintech startup, we were building an automated credit‑risk model that needed to evaluate millions of loan applicants in real time. The evaluation pipeline required advanced algorithmic patterns—backtracking for constraint satisfaction (e.g., maximum allowable debt), graph traversal for fraud network detection, and heaps for top‑k risk scoring—to stay within our 200 ms latency SLA.

**Action**  
I architected a serverless microservice on **AWS Lambda** triggered by **Amazon Kinesis Data Streams**. For backtracking, I used an in‑memory priority queue (Python `heapq`) to prune infeasible paths early. Graphs were represented as adjacency lists stored in **DynamoDB** with secondary indexes for fast neighbor lookups; I leveraged **AWS Step Functions** to orchestrate recursive traversal without exceeding Lambda’s timeout. Heaps were used in a separate Lambda that streamed applicant scores via **Amazon Kinesis Firehose** into an **S3 data lake**, then queried by **Athena** for top‑k analytics.

To ensure scalability, each Lambda was provisioned with 2 GB memory and kept stateless; the DynamoDB throughput was auto‑scaled based on the incoming stream rate. Availability was achieved through multi‑AZ deployment of Kinesis and DynamoDB, while cost was controlled by using **Lambda’s pay‑per‑execution** model and S3’s low storage tier for archived data.

**Result**  
The new pipeline processed 2 million applicants per hour with an average latency of 150 ms—exceeding the SLA by 25%. Our fraud detection accuracy improved from 82% to 94%, directly contributing to a 12% reduction in default rates and $3.5M annual savings.

**Reflection**  
I owned every layer, from data ingestion to downstream analytics, diving deep into AWS service limits and cost curves. The key learning was that coupling serverless compute with managed NoSQL storage yields both elasticity and resilience—an approach I continue to advocate for any ML‑heavy workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
