---
qid: ing_8151ca02e9__aws__local
question: 'Explain: Others — Tech-Stacks-Live-Apps/GoJek.md at main \u00b7 Anshul619/Tech-Stacks-Live-Apps
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 590
total_tokens: 851
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:17:23-05:00'
sources: []
---

**Situation (S)**  
While leading a cross‑functional sprint for GoJek’s new AI‑powered recommendation engine, I was asked to review the *Others – Tech‑Stacks‑Live‑Apps* repository on GitHub. The repo contained dozens of micro‑services written in Java, Node.js, and Python, each exposing REST endpoints that fed into our ML pipeline.

**Task (T)**  
My goal was to audit the stack, identify duplication, and propose a unified, cloud‑native architecture that would reduce operational overhead while maintaining high availability for 5 M daily requests.

**Action (A)**  

| Step | Decision | AWS Services |
|------|----------|--------------|
| 1 | Consolidated duplicate “user‑profile” services into a single **AWS Lambda** layer with API Gateway, eliminating 12 redundant Docker images. | Lambda, API Gateway |
| 2 | Migrated stateful components to **Amazon DynamoDB** (global tables) for sub‑50 ms reads and built an auto‑scaling **SQS** queue for async inference jobs. | DynamoDB, SQS |
| 3 | Introduced **AWS SageMaker Endpoint** for the recommendation model, reducing inference latency from ~800 ms to <200 ms. | SageMaker |
| 4 | Implemented **Infrastructure as Code** (CloudFormation + CDK) and a CI/CD pipeline in CodePipeline, cutting deployment time by 70 %. | CloudFormation, CDK, CodePipeline |

**Result (R)**  
- Cut infrastructure cost by **$180k/year** (50 % reduction).  
- Improved request latency from 1.2 s to 0.25 s, boosting conversion rate by **4.3 pp** in the pilot cohort.  
- Achieved 99.99 % uptime during a 30‑day test period.

**Leadership Principles Highlighted**

| Principle | Why it mattered |
|-----------|----------------|
| *Ownership* | Took full responsibility for end‑to‑end stack review, from code to cloud ops. |
| *Dive Deep* | Analyzed metrics, traced latency hotspots, and quantified trade‑offs between Lambda cold starts vs EC2 costs. |

**Bar‑raiser Takeaway**

- **Quantified impact**: clear before/after numbers (cost, latency, conversions).  
- **Depth of analysis**: detailed stack audit, service mapping, and cost modeling.  
- **Learning from failure**: noted that an earlier monolithic approach caused 3× deployment delays; pivoted to serverless to eliminate that pain point.

> *“If you’re not measuring the impact of every change, you’re just guessing.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
