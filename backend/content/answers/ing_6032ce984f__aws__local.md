---
qid: ing_6032ce984f__aws__local
question: 'Explain: Summary — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 413
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:03:21-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a team to build an on‑premises recommendation engine for a retail client that had to process ~200 k user sessions per day while keeping latency under 120 ms. The requirement was a **client–server architecture** that could scale horizontally, provide real‑time inference, and allow the data science team to iterate quickly.

**Action**  
*Anchored on **Ownership** and **Dive Deep*** – I mapped the data flow: client apps → API Gateway → Lambda (feature extraction) → SageMaker Endpoint (model inference) → DynamoDB cache.  
I introduced a **stateless micro‑service** in ECS Fargate for batch model training, using **S3** for raw logs and **Glue** for ETL. Model artifacts were stored in **ECR** and served by **SageMaker Neo** to reduce inference cost by 35 %.  
For availability I deployed across two AZs with an ALB and used **Auto Scaling** on Lambda (provisioned concurrency) to handle traffic spikes, guaranteeing <0.5 % outage.  

**Result**  
- Latency dropped from 250 ms to 95 ms (38 % improvement).  
- Daily inference cost fell from $1,200 to $720 (40 % savings).  
- The system processed 300 k sessions/day with 99.9 % uptime.  

**Learning & Bar‑raiser signals**  
I documented failure modes: cold starts and cache staleness; we added a CloudWatch anomaly detector that auto‑scales concurrency, preventing >5 % performance regressions. This demonstrates ownership, depth of technical design, measurable impact, and continuous learning—all key Amazon bar‑raiser criteria.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
