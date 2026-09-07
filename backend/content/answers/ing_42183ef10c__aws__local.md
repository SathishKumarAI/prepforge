---
qid: ing_42183ef10c__aws__local
question: 'Explain: Perplexity AI System Design — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 483
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:55:21-05:00'
sources: []
---

**Perplexity‑AI System Design – Amazon Style**

**Situation & Task (Ownership)**  
At a startup I was asked to build a real‑time language model inference engine that could serve 10 M queries/day with <200 ms latency while keeping cost under $5k/month. The goal: deliver a scalable, low‑cost product for the customer.

**Action (Dive Deep & Deliver Results)**  
1. **Requirements** – Stateless microservice, autoscale on request volume, high availability, multi‑region deployment.  
2. **Design** –  
   * **Model hosting**: Amazon SageMaker Edge Containers on Graviton 3 instances for low inference cost; use ONNX runtime to shave GPU usage.  
   * **Request routing**: API Gateway + Lambda (Python) to validate & batch requests, then push to SQS FIFO → Fargate tasks that pull batches and call the model.  
   * **Caching**: ElastiCache Redis for hot n‑gram lookups; 99.9 % hit rate reduces inference calls by 60%.  
   * **Observability**: CloudWatch metrics + X-Ray traces, automated scaling policies based on latency percentiles.  

3. **Scalability & Cost** – Auto‑scaling to 0–200 Fargate tasks keeps idle cost < $2k/month; caching cuts SageMaker usage from 10 M→4 M invocations → ~$1.5k saved.  
4. **Trade‑offs** – Chose stateless design over stateful GPU clusters for rapid deployment and pay‑as‑you‑go pricing.

**Result (Customer Obsession & Bias for Action)**  
Achieved <180 ms average latency, 99.7 % SLA, cost $3.8k/month. Customer satisfaction score rose from 4.1 to 4.9/5. Learned that aggressive caching + edge inference can drastically cut spend without compromising quality.

**Bar‑raiser check** – Ownership of all layers, deep dive into latency bottlenecks, quantified impact on cost & performance, and clear post‑mortem lessons for future iterations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
