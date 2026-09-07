---
qid: ing_1d65718570__aws__local
question: 'Explain: About — Distributed System - Network Partition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 498
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:32:54-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** While building a real‑time fraud detection pipeline for a payment gateway, our distributed model served 5 M requests/sec across us-east‑1 and eu-west‑2. A network partition cut off the EU shard from the rest of the cluster, causing a 40 % spike in false negatives.  
> 
> **Task:** I had to design a fault‑tolerant inference layer that guarantees *eventual consistency* and preserves latency (< 200 ms) even under partitions.  
> 
> **Action:**  
> 1. **Ownership & Bias for Action** – I scoped the problem, wrote a rapid prototype in Python/Flask, and deployed it to an Auto Scaling Group behind an Application Load Balancer.  
> 2. **Dive Deep** – I modeled the partition as an *availability zone* failure and introduced **Amazon SQS FIFO queues** per shard for request buffering.  
> 3. **Invent & Simplify** – Each worker polls its queue, pulls a batch of inference requests, runs the TensorFlow model on an **ECS Fargate task**, and writes predictions to a **DynamoDB global table** with conditional writes.  
> 4. **Customer Obsession** – I added a *fallback* rule that flags all unknowns for manual review, keeping fraud‑loss < 0.2% during outages.  
> 
> **Result:** Post‑deployment, the system handled partitions with no loss in throughput; false negatives dropped from 12 % to 1.5 %. Cost increased by only 8 % due to SQS and DynamoDB usage, staying within budget. I documented a run‑book that reduced mean time to recovery from 30 min to < 2 min, earning me the “Bar Raiser” badge in our quarterly review.

**Key AWS services used:** ECS Fargate, Application Load Balancer, SQS FIFO, DynamoDB Global Table.  

*What a bar‑raiser looks for:* clear ownership of the problem, deep dive into failure modes, quantified impact on business metrics, and lessons learned (fallback rule & run‑book).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
