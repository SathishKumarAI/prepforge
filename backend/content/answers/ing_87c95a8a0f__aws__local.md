---
qid: ing_87c95a8a0f__aws__local
question: 'Explain: Job Submission Service — Design a Distributed Job Scheduler -
  System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 473
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:31:12-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team to build a **Distributed Job Scheduler (DJS)** that powers 4 M+ daily ML training jobs across 12 regions. The goal was to cut job‑queuing time from 18 h to <5 min while keeping cost <15 % of the legacy on‑prem system.

**Action**  
*Customer Obsession & Ownership* – I mapped end‑user pain points (latency, SLA drift) and set a target SLAs.  
*Dive Deep* – I broke jobs into **micro‑tasks** stored in DynamoDB (partition key: `jobId`, sort key: `taskSeq`).  
*AWS services*:  
- **SQS FIFO** for task ordering and deduplication.  
- **Lambda** + **ECS Fargate** to spin containers on demand, auto‑scaling via CloudWatch metrics.  
- **Step Functions** orchestrates retries and failure paths.  
- **CloudTrail / CloudWatch Logs** feed a monitoring dashboard (Grafana).  

I added *priority tags* and used **AWS Batch**’s Job Queue for high‑CPU jobs, ensuring at‑least‑once delivery with visibility timeouts tuned per task type.

**Result**  
- Reduced average queue latency from 18 h to **4.3 min** (≈99% improvement).  
- Cut operational cost by **23 %** vs legacy system.  
- Achieved 99.9 % job‑completion rate across regions.  

**Bar‑raiser insights** – I documented failure modes (e.g., SQS dead‑letter queues) and iterated on retry back‑offs, learning that *exponential back‑off* saved us $12k/month in wasted compute. Ownership was demonstrated by owning the post‑mortem process and driving continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
