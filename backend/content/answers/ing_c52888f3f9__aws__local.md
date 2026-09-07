---
qid: ing_c52888f3f9__aws__local
question: 'Explain: Software architecture is to applications what foundations'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 449
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:48:34-05:00'
sources: []
---

**Answer (≈190 words)**  

During my tenure as a ML platform lead at XYZ Corp, I was asked to explain how *software architecture* is the “foundation” for data‑science applications. I framed it in the **Customer Obsession** and **Ownership** lenses: the architecture must serve users’ needs while empowering us to own the entire ML lifecycle.

> **Situation:** A new product line required real‑time recommendation models at scale, but the existing monolithic codebase caused 3 × latency spikes during peak traffic.  
> **Task:** Redesign the platform so that data ingestion, feature engineering, model training, and inference could evolve independently.  
> **Action:** I introduced a modular micro‑service pattern using **Amazon SageMaker Pipelines** for reproducible training, **AWS Glue** for ETL, **Amazon Kinesis Data Streams** for real‑time feature delivery, and **Amazon ECS Fargate** for stateless inference endpoints behind an Application Load Balancer. Each service was containerized with Docker, enabling CI/CD via **CodePipeline**. I also added a central metadata catalog in **AWS Glue Data Catalog** to enforce schema governance.  
> **Result:** Latency dropped from 1.2 s to 350 ms (≈70% faster), throughput increased by 4×, and cost per inference fell from $0.03 to $0.015 due to autoscaling on Fargate. User satisfaction scores rose from 78 /100 to 92 /100 in our post‑deployment survey.

**Bar‑raiser cues I listen for:**  
- Clear ownership of the end‑to‑end pipeline (not just a service).  
- Depth: justification of each AWS choice, trade‑offs between RDS vs. DynamoDB, container vs. serverless.  
- Quantified impact (latency, cost, CSAT).  
- Reflection on what went wrong initially and how we iterated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
