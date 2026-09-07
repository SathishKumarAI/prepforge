---
qid: ing_5e25923041__aws__local
question: 'Explain: Pattern Selection — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 460
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:58:30-05:00'
sources: []
---

**Pattern Selection – Architecture Patterns**

*Situation*: While leading a data‑science squad at my previous company, we had to expose 15 ML models (image & NLP) to production with < 1 s latency for 10k concurrent requests per day.

*Task*: Design an architecture that balances **Customer Obsession** (low latency, high reliability) and **Ownership** (end‑to‑end visibility).

*Action*: I performed a *dive deep* into each model’s inference characteristics and mapped them to AWS patterns:

| Model Type | Pattern | Key Services |
|------------|---------|--------------|
| Image classification | **Serverless Inference** | Lambda + API Gateway + ECR (container) |
| NLP text‑generation | **Batch & On‑Demand** | SageMaker Endpoint + Step Functions for batch jobs |
| Real‑time recommendation | **Event‑Driven Microservice** | Kinesis → Lambda → DynamoDB |

I chose **Lambda** for lightweight models to avoid overprovisioning, **SageMaker Endpoints** for heavy GPU inference, and **Kinesis** for decoupled event streams. This mix yielded 99.9 % availability, cost savings of 35 % versus a monolithic EC2 fleet, and reduced cold‑start latency from 200 ms to < 50 ms.

*Result*: Post‑deployment, we handled 15k concurrent requests with 0.8 s average latency, earning a 4.7/5 customer satisfaction score on the internal portal. The architecture is now modular, allowing us to swap models in < 30 min without downtime—demonstrating true ownership.

*Bar‑raiser takeaways*: Clear ownership, deep technical trade‑offs (latency vs cost), quantifiable impact, and continuous learning from early cold‑start failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
