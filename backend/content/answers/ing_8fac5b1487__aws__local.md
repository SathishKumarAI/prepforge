---
qid: ing_8fac5b1487__aws__local
question: 'Explain: Data & context strategy — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 397
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:50:52-05:00'
sources: []
---

**Situation / Task** – At my last role I led the migration of a monolithic chatbot into an **LLM Gateway & Serving Platform** that could handle 200k concurrent users while keeping latency under 100 ms and cost < $0.05 per inference.

**Action** –  
1. **Customer Obsession + Ownership:** Built a data‑pipeline that ingests logs, user intents, and contextual metadata (location, device, prior interactions) into an Amazon S3 lake. A Glue crawler tags it with semantic vectors; we store them in DynamoDB for ultra‑fast lookup.  
2. **Dive Deep & Bias for Action:** Deployed a containerized inference service on ECS Fargate, autoscaling based on CloudWatch metrics (CPU + latency). The gateway exposes a REST API via Amazon API Gateway + Lambda edge to cache frequent prompts in CloudFront.  
3. **Invent & Simplify:** Introduced an “LLM‑Router” microservice that selects the most appropriate model (e.g., GPT‑4, Claude) based on context score using SageMaker endpoint. This eliminates redundant calls and reduces token usage by 35 %.  
4. **Deliver Results:** After launch, we cut average response time from 250 ms to 78 ms, increased throughput by 4×, and lowered inference cost from $0.12 → $0.06 per request.

**Result** – The platform handled peak traffic with 99.99 % uptime, and the engineering team reported a 50 % reduction in mean time to resolution for model‑related incidents. I documented lessons learned: cache warm‑up strategies and continuous profiling of token usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
