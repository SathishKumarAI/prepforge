---
qid: ing_82c9068ae0__aws__local
question: 'Explain: Case Study: Content Moderation at Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 483
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:20:40-05:00'
sources: []
---

**Situation & Task**  
When I joined the Media Services team, we had to scale content moderation for a global streaming platform that served 120 M active users and generated >10 TB of new video per day. The existing rule‑based system stalled at 2 kpps (requests per second) and missed 12% of policy violations.

**Action – Technical Design**  
I proposed a *serverless, event‑driven pipeline*:

1. **S3 + EventBridge** – upload triggers invoke a **Lambda** that extracts frames using **AWS Rekognition**.
2. **Step Functions** orchestrate parallel inference (text, nudity, hate symbols) across multiple regions for low latency.
3. Results are written to **DynamoDB** (partitioned by content ID) and streamed to **Amazon Kinesis Data Streams** for real‑time analytics.
4. A downstream **Lambda** pushes flagged items into an **SQS DLQ** for human review, with an SLA of <2 hrs.

We added a *model‑training* microservice on **ECS Fargate** that pulls from the same DynamoDB stream to continuously retrain custom classifiers in **Amazon SageMaker**, reducing false positives by 27%.

**Result**  
- Throughput rose to 25 kpps, handling peak traffic of 200 M requests/day.  
- Detection accuracy improved from 88% to 95%.  
- Operational cost dropped 35% due to serverless pay‑as‑you‑go and reduced on‑prem infra.

**Reflection & Leadership Principles**  
*Ownership* – I drove the end‑to‑end solution, coordinating with ML, security, and compliance teams. *Dive Deep* – I benchmarked each AWS service, quantified trade‑offs (e.g., Lambda timeout vs. Fargate cost), and iterated on the data model to minimize latency. The bar‑raiser will note my data‑driven impact, the architectural depth, and lessons learned from early false‑positive spikes that led to iterative model refinement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
