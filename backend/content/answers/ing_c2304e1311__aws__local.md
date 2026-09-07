---
qid: ing_c2304e1311__aws__local
question: 'Explain: 🏗️ AI System Design — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 455
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:42:11-05:00'
sources: []
---

**Situation & Task**  
I was tasked to build a real‑time recommendation engine for an e‑commerce platform that had to scale from 50k to 5M daily users while keeping latency < 200 ms.

**Action – Design & Architecture**  
1. **Data Layer** – Ingest clickstream via Kinesis Data Streams → process with Lambda (Python) → write to DynamoDB for low‑latency lookups and to S3 for batch training.  
2. **Model Training** – Use SageMaker Pipelines to train a matrix factorization model nightly; deploy the best model as an endpoint on SageMaker Runtime.  
3. **Inference** – Route user requests through API Gateway → Lambda that fetches user profile from DynamoDB, calls SageMaker endpoint, and streams back top‑10 product IDs.  
4. **Observability & Scaling** – Enable CloudWatch metrics for latency & error rates; autoscale Lambda based on queue depth (Kinesis) and use provisioned concurrency for the inference endpoint to guarantee 200 ms SLA.

**Result**  
- Reduced recommendation latency from 1.2 s to 180 ms (≈85% improvement).  
- Click‑through rate rose by **12%**, translating to $3M additional revenue quarterly.  
- Operational cost dropped 30% by using serverless components and spot instances for training.

**Reflection & Bar‑Raiser Signals**  
*Ownership*: I led cross‑functional rollout, handled incidents, and owned post‑mortem analysis.  
*Dive Deep*: Tuned Lambda memory/timeout and SageMaker batch size after profiling CPU/GPU usage.  
*Learned from Failure*: Early version had a 5 % cold‑start spike; resolved by adding provisioned concurrency—highlighting the need for proactive capacity planning.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivering instant recommendations directly improved user experience.  
- **Ownership & Deliver Results** – From concept to production, I drove measurable revenue gains while keeping costs in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
