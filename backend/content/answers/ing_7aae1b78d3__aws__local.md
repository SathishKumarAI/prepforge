---
qid: ing_7aae1b78d3__aws__local
question: 'Explain: 4.2 Scaling Scheduling Service — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 419
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:02:57-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role I led the design of a distributed job scheduler for a global ML platform that processed **10 M training jobs per day**.  
I approached the problem with *Customer Obsession* and *Ownership*. The core requirement was to guarantee at least 99.9 % availability while scaling to thousands of concurrent workers across AWS regions.

1️⃣ **Requirements & Constraints** – Each job had a priority, dependency graph, and SLA (max latency 30 s).  
2️⃣ **Architecture** – I proposed an event‑driven design:  
   * **Amazon SQS FIFO queues** per region store ready jobs.  
   * A *Scheduler Service* (AWS Lambda + DynamoDB) polls the queue, resolves dependencies using a *DAG metadata table*, and emits **SNS topics** that trigger **Step Functions** for each job.  
   * Workers are **ECS Fargate tasks** behind an Application Load Balancer; autoscaling is driven by SQS depth.

3️⃣ **Scalability & Cost** – Using serverless components (Lambda, Step Functions) keeps idle cost near zero while allowing burst scaling to 10k concurrent workers. DynamoDB auto‑scales with provisioned throughput set to 5 x expected read/write load.  
4️⃣ **Availability** – All services are multi‑AZ; the scheduler replicates state across regions using DynamoDB Global Tables, ensuring failover in <30 s.

**Result** – After launch we reduced job start latency from 120 s to 18 s (6× improvement) and cut operational costs by 37 %.  
I learned that *Bias for Action* can be balanced with *Dive Deep*: iterating on queue depth metrics revealed a subtle bottleneck in the DAG resolver, which I fixed by caching dependency hashes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
