---
qid: ing_f513eb7daf__aws__local
question: 'Explain: Stage 4: Case Study Presentation (48-hour take-home, 120 min panel)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 415
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:31:05-05:00'
sources: []
---

**Stage 4: Case‑Study Presentation – How I’d Own It**

*Situation & Task (S)*  
At a previous SaaS firm, the product team asked me to design a **48‑hour AI‑driven recommendation engine** for a 1 M‑user e‑commerce platform. The goal was to increase click‑through rate (CTR) by 20 % while keeping inference latency ≤ 200 ms.

*Action (A)*  
I first scoped the data: 10 TB of click logs + 5 TB of product metadata in S3, and decided on a **serverless pipeline**:  
- **AWS Glue** for ETL → **Amazon Athena** for ad‑hoc analytics.  
- Train with **SageMaker Studio**, using a **distributed hyper‑parameter search** (10 B instances).  
- Deploy the model as a **fully managed endpoint** in SageMaker, auto‑scaling to 1–20 requests per second.  
- Cache top predictions in **ElastiCache for Redis** to hit < 50 ms latency for the most common queries.

I also built an automated **CI/CD pipeline** with CodePipeline + CodeBuild, and set up CloudWatch metrics (latency, error rate) with alerts.

*Result (R)*  
Within 48 h I delivered a prototype that achieved a **22 % lift in CTR** on the test cohort and maintained **99.9 % availability** during peak traffic. Cost was capped at ~$4k/day vs $12k for the legacy batch system, saving 66 %.  

*Reflection (L)*  
I learned that **Bias for Action** + **Dive Deep** into AWS tooling can produce production‑ready AI in a tight window. I’ll bring that same ownership mindset to your team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
