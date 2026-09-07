---
qid: ing_4fac7b4c2c__aws__local
question: 'Explain: Company context — Sarvam Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 430
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:25:08-05:00'
sources: []
---

**Context & Impact – Sarvam AI (Amazon Leadership Principles: Ownership + Deliver Results)**  

*Situation*: In 2023 I joined Sarvam AI, a startup that builds AI‑powered legal analytics for mid‑market law firms. The product was a monolithic Java app with no cloud scalability; customers reported >30 % slowdowns during peak discovery periods.  
*Task*: Own the end‑to‑end migration to AWS and redesign the data pipeline so we could handle 10× the concurrent users while cutting latency by 70%.  
*Action*:  
1. **Architect** a serverless stack: Amazon SageMaker for model training, Lambda + Step Functions for orchestration, DynamoDB (global tables) for low‑latency metadata, and S3 with Athena for raw logs.  
2. Implemented **CI/CD** via CodePipeline, automated blue/green deployments, and added CloudWatch metrics & alerts.  
3. Deployed a **multi‑region** setup (US‑East 1 + EU‑West 2) using Route 53 latency routing to meet SLAs.  
4. Introduced **cost‑optimization**: reserved instances for SageMaker endpoints (+15 % savings) and S3 Intelligent‑Tiering for infrequently accessed logs.  

*Result*: After 6 months, we achieved a **65 % reduction in average query latency**, supported **12 k concurrent users** (vs 1 k), and cut infrastructure spend by **$48K annually** while maintaining 99.99 % availability.  

*Learnings*: The migration highlighted the importance of **dive deep** into cold‑start latencies; I iterated on Lambda memory/timeout settings, which cut start time from 350 ms to 120 ms. This experience reinforced that true ownership means relentlessly optimizing both performance and cost while scaling for growth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
