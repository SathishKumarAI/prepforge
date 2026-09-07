---
qid: ing_02c51a2b69__aws__local
question: 'Explain: Multi-Service Deployment — Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 537
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:30:36-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of a legacy recommendation engine from a single‑node Spark job to a multi‑service micro‑architecture that served real‑time predictions for 12 M daily users. The goal was to cut latency by 70 % and enable A/B testing of new models without downtime.

**Action (Design & AWS)**  
*Decomposed the monolith into four services:*  
1. **Model Registry Service** – built on **Amazon DynamoDB** + **S3** for model artifacts, with **AWS Lambda** triggers to validate schema changes.  
2. **Inference API Gateway** – fronted by **API Gateway** (REST) and **Lambda@Edge** for edge‑caching, routing to the appropriate model based on user segment.  
3. **Batch Scoring Service** – an **EMR cluster** that pulls data from **Kinesis Data Streams**, runs Spark jobs, writes results back to S3, then updates a read‑optimized **DynamoDB Global Table**.  
4. **Model Training Pipeline** – orchestrated by **AWS Step Functions** with **SageMaker** training jobs; checkpoints stored in EFS for reproducibility.

*Scalability & Availability:* Each Lambda scales automatically; EMR autoscaling groups keep the batch job within a 5‑minute SLA. Global Tables provide multi‑region read replication, ensuring <10 ms latency worldwide.  

*Cost & Trade‑offs:* Using serverless components keeps idle costs near zero, while EMR is spun down after each training cycle. The trade‑off was higher operational complexity, which I mitigated with CI/CD via **AWS CodePipeline** and IaC in Terraform.

**Result**  
- Latency dropped from 1.2 s to 350 ms (70 % reduction).  
- Throughput increased to 200k predictions/second, supporting peak traffic during Black Friday (+120 % load).  
- A/B test success rate improved: new model variants were rolled out in <30 min with zero user impact.

**Learning & Ownership**  
I owned the entire migration roadmap, conducted a post‑mortem after an initial staging failure (a mis‑configured IAM role caused a 15 min outage), and updated our playbook to include automated IAM drift detection. This experience reinforced my focus on *Ownership* and *Dive Deep*, ensuring that every service design decision was data‑driven and resilient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
