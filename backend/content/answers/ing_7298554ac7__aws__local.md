---
qid: ing_7298554ac7__aws__local
question: 'Explain: Semantic Routing — The Complete Guide to Tool Selection in AI
  Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 452
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:44:31-05:00'
sources: []
---

**Situation & Task (S)**  
At my last role I led a cross‑functional team to build an AI‑driven customer support agent that could route user queries to the most relevant internal knowledge base or live agent in real time. The requirement was to reduce average handling time by 30 % while keeping latency under 200 ms.

**Action (A)**  
I designed a **semantic routing microservice** on AWS:

| Component | Service | Rationale |
|-----------|---------|-----------|
| Query ingestion | API Gateway + Lambda | Serverless, auto‑scale, low cost |
| Embedding & similarity search | Bedrock (Claude) + OpenSearch | Fast semantic vector lookup, built‑in scaling |
| Routing logic | Step Functions + DynamoDB | State machine for retry/fallback; durable metadata |
| Monitoring | CloudWatch + X-Ray | Dive deep into latency & error rates |

The Lambda invoked a Bedrock model to generate an embedding, which was pushed to OpenSearch. The nearest vector matched a “routing rule” stored in DynamoDB, returning the target knowledge article or escalation queue. If confidence < 0.75 we fell back to a human queue.

**Result (R)**  
- **30 %** reduction in average handling time (from 45 s to 31 s).  
- **99.8 %** routing accuracy on A/B test, measured by post‑resolution surveys.  
- Cost savings of **$12k/month** versus a monolithic inference endpoint.

**Learning & Ownership**  
I iterated the embedding model after observing that older product updates caused drift; I introduced an automated retraining pipeline (Step Functions → SageMaker) to keep performance stable—demonstrating ownership and continuous improvement.

> *Bar‑raiser signals:* clear ownership, deep dive into AWS services, quantified impact, proactive learning from drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
