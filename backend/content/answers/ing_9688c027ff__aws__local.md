---
qid: ing_9688c027ff__aws__local
question: 'Explain: Real-time cost tracking — Pydantic Logfire: AI Observability for
  LLMs, Apps & RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 475
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:06:24-05:00'
sources: []
---

**Situation**  
I was tasked to build a real‑time cost tracking system for an LLM‑driven recommendation app that consumed multiple paid APIs (OpenAI, Cohere, Azure). The engineering team needed instant visibility into spend per request so we could hit the $5k/month budget.

**Task**  
Design a lightweight, low‑latency observability layer that aggregates token usage and API costs in real time while being fully integrated with our existing Pydantic data models and Logfire logging pipeline.

**Action**  
- **Architecture**: Each request passes through an *AWS Lambda* wrapper that enriches the incoming `Pydantic` payload with a `cost` field.  
- **Observability**: The wrapper publishes to **Amazon Kinesis Data Streams**, which feeds into a **Kinesis Data Analytics** job that aggregates token counts and cost per minute, emitting results to **Amazon CloudWatch Metrics**.  
- **Cost Engine**: A small **DynamoDB** table stores the latest price for each model; Lambda pulls this via TTL caching in **ElastiCache‑Redis** to avoid API calls.  
- **Alerting**: CloudWatch alarms trigger SNS notifications when spend exceeds 70% of the monthly quota, giving us a *real‑time* safety net.

**Result**  
Within two weeks we reduced untracked spend by **92%**, catching an $1.2k overrun early and preventing a budget breach. Monthly cost predictions improved from ±30% to ±5%, enabling quarterly roadmap planning.  

**Learning & Ownership**  
I own the end‑to‑end pipeline, continuously iterating on data freshness vs. cost trade‑offs (e.g., shifting from Lambda to Fargate for burst traffic). The bar‑raiser will see my deep dive into latency budgets, quantified ROI, and proactive learning from a near‑miss budget event.  

**Leadership Principles**  
- **Customer Obsession**: Delivering instant cost insights keeps the product financially healthy for users.  
- **Ownership**: I took full responsibility from data ingestion to alerting, ensuring reliability at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
