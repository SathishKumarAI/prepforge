---
qid: ing_0d488446f1__aws__local
question: 'Explain: Execution model — Agentic Engineering - by Neo Kim and Paul Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 422
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:55:59-05:00'
sources: []
---

**Situation / Task**  
When I joined the ML Ops team at a fintech startup, we had to migrate our monolithic training pipeline (≈ 200 kB of code) into a cloud‑native, production‑grade system that could scale from 10 to 5,000 concurrent jobs without manual intervention. The goal was to reduce job turnaround time by 40 % and cut infra costs by 30 %.  

**Action**  
I championed the **Agentic Engineering** execution model (Neo Kim & Paul Hoekstra) and built a “self‑directing” pipeline that decomposes workloads into autonomous agents: *Data‑Ingest*, *Feature‑Store*, *Model‑Train*, *Eval*, *Deploy*. Each agent runs in an AWS Fargate task, communicates via SQS, and is orchestrated by Step Functions.  
- **AWS services**: S3 for raw data, DynamoDB for feature cache, SageMaker Pipelines for training, EventBridge for triggers, CloudWatch for observability.  
- **Scalability & Availability**: Fargate’s on‑demand scaling handles bursty workloads; Step Functions guarantees at‑least‑once execution with retries.  
- **Cost**: By using Spot Instances for training agents and autoscaling SQS queues, we reduced compute spend by 32 %.  

**Result**  
Within three months, job latency dropped from 2 h to 30 min (−85 %), and monthly infra costs fell from $12k to $8.4k. The system now auto‑scales with zero manual oversight—true Agentic Engineering in action.

*Leadership Principles*: **Ownership** – I took end‑to‑end responsibility; **Dive Deep** – dissected every bottleneck; **Deliver Results** – measurable, business‑impactful gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
