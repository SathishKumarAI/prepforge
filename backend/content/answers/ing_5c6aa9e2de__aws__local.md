---
qid: ing_5c6aa9e2de__aws__local
question: 'Explain: Worker Table — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 485
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:54:10-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** A client needed to run nightly ML‑training jobs across thousands of data shards while guaranteeing no job loss and minimal cost spikes.  
> **Task:** Build a distributed scheduler that maps each “worker table” (a logical grouping of shards) to EC2 spot instances, retries on failure, and reports SLA compliance.  
> **Action:**  
> * **Requirements** – 1 % MTTR for failed jobs, < 5 min latency from job submission to start, cost‑efficiency via spot usage.  
> * **Design** – A stateless scheduler microservice in ECS Fargate that pulls a queue of pending jobs (Amazon SQS) and places them into a DynamoDB “WorkerTable” with attributes `workerId`, `shardRange`, `status`.  
>   - Workers are EC2 spot instances launched by an Auto Scaling Group (ASG) with **capacity‑provisioned** scaling policies that read the queue length.  
>   - Each worker polls its assigned shards via DynamoDB Streams, processes them, and writes results to S3.  
> * **AWS Services** – SQS for decoupling, DynamoDB for fast lookup and durable state, CloudWatch Alarms for MTTR monitoring, Spot Fleet for cost control, IAM roles for least‑privilege access.  
> * **Scalability & Availability** – Global tables keep the WorkerTable highly available; Spot Fleet + ASG ensures rapid scaling up to 10k workers.  
> * **Cost Trade‑off** – Spot instances reduce compute cost by ~70 % but require graceful handling of interruptions, which we address with checkpointing in S3.  
> * **Result:** Deployed within 4 weeks; job success rate rose from 92 % to 99.8 %, MTTR dropped from 45 min to 2 min, and compute cost fell by 68 %.  

**Learning from Failure** – Initial trials with a single‑region ASG caused bottlenecks; expanding to multi‑AZ Spot Fleet resolved the latency spike, teaching me the value of distributed state and failure isolation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
