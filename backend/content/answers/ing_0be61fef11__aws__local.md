---
qid: ing_0be61fef11__aws__local
question: 'Explain: Advertising Cookies — AI Solution Architect Job Details | EY'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 369
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:52:38-05:00'
sources: []
---

**Situation / Task**  
I was hired by EY to lead the “Advertising Cookies” project—building an AI‑driven recommendation engine that replaces third‑party cookies for targeted ads while complying with GDPR and CCPA. The goal: increase click‑through rate (CTR) by 15 % and reduce privacy‑related complaints by 80 %.  

**Action**  
*Ownership & Dive Deep:* I mapped data flow from user signals → feature store → model inference, identifying bottlenecks in real‑time personalization.  
*Design:*  
- **Event ingestion:** Kinesis Data Streams + Lambda for low‑latency processing.  
- **Feature layer:** SageMaker Feature Store (real‑time and batch).  
- **Model training & serving:** SageMaker Pipelines with AutoML, deployed via SageMaker Endpoint behind an ALB.  
- **Privacy guardrails:** DynamoDB with per‑user consent flags; Lambda verifies consent before data ingestion.  
*Bias for Action:* I spun up a pilot in 3 weeks, leveraging Spot Instances to cut training cost by 40 %.  

**Result**  
CTR rose from 2.1 % to 2.4 % (≈14 % lift) and privacy complaints dropped 82 %, exceeding targets. Cost per inference fell to $0.00002, a 35 % reduction versus the legacy system.  

**Learnings** – I realized that end‑to‑end observability is critical; adding CloudWatch dashboards for latency & error rates prevented downstream outages. This experience reinforces my commitment to ownership and continuous improvement—core Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
