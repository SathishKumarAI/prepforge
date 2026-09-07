---
qid: ing_2c79056bc9__aws__local
question: 'Explain: The Stats — YouTube\u00a0Architecture - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 491
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:05:30-05:00'
sources: []
---

**Situation & Task**  
I led a redesign of the video‑upload pipeline for an internal “YouTube‑style” platform that served 10 M daily active users (DAU). The goal was to cut end‑to‑end latency from 12 s to under 3 s while keeping cost < $1.2 M/month.

**Action**  
- **Architecture**: Split into *Ingestion*, *Processing*, and *Serving* tiers.  
  - **Ingestion** – API Gateway + Lambda for auth, then stream to an SQS queue.  
  - **Processing** – Step Functions orchestrating EC2 Spot c5.large workers that invoke FFmpeg in Docker containers on EKS (Kubernetes). Each worker processes one video and writes transcoded clips to S3.  
  - **Serving** – CloudFront edge caches + Elastic Cache Redis for metadata, with DynamoDB Global Tables as the primary store.  
- **Scalability**: Autoscaling based on queue depth; Spot instances reduce compute cost by ~70 %.  
- **Availability**: Multi‑AZ S3 and DynamoDB with cross‑region replication; 99.99 % SLA.  
- **Cost**: Shifted from on‑prem servers ($2M) to AWS, now $1.1 M/month.

**Result**  
Latency dropped to 2.8 s (≈ 77 % improvement). Throughput increased 4×, handling 30 M uploads/day during peak. Cost savings of $800K annually. Post‑deployment monitoring revealed a rare “cold start” spike; I added Lambda provisioned concurrency and updated the Step Function retry policy—learning that even small edge cases can ripple into user experience.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Focused on real‑time video delivery for millions of users.  
- **Ownership & Dive Deep**: Built a fault‑tolerant, cost‑efficient pipeline and iterated on operational telemetry.

Bar‑raisers will note the end‑to‑end ownership, data‑driven impact, deep dive into AWS services, and proactive learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
