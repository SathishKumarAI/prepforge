---
qid: ing_990c526b1e__aws__local
question: 'Explain: Rules files — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 435
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:11:41-05:00'
sources: []
---

**Situation & Task**  
In my last role at a fintech startup we were building an *Agentic AI* that could autonomously approve micro‑loans. The risk team insisted on hard “rules files” to govern every decision, so I had to design a system that balanced automation with compliance while keeping latency under 200 ms.

**Action – Technical Design**  
I split the logic into two layers:  

1. **Rule Engine (Amazon DynamoDB + AWS Lambda)** – Rules are stored as JSON in DynamoDB and fetched by a stateless Lambda invoked by Amazon SageMaker’s inference endpoint.  
2. **Decision Layer (SageMaker Pipelines + Step Functions)** – The model outputs a probability; Step Functions routes the request to the rule engine or a human review queue based on thresholds.

This architecture scales horizontally: each Lambda handles 1 000 concurrent requests, DynamoDB auto‑scales, and Step Functions orchestrates fallback paths. We used **AWS CloudWatch** for metrics (approval latency 180 ms avg, error rate <0.02%) and **AWS Cost Explorer** to keep the monthly bill <$3K.

**Result**  
Within two months we reduced manual approvals by 85%, cut operational cost by 30%, and maintained a compliance audit score of 100%.  

**Leadership Principles Highlighted**  
- *Customer Obsession* – Delivered instant, trustworthy loan decisions for our users.  
- *Ownership & Dive Deep* – Own the end‑to‑end flow, debugged latency spikes using CloudWatch traces, and iterated on rule granularity.

**Bar‑raiser Takeaway**  
They’ll look for evidence that I owned a cross‑functional problem, dove deep into AWS services to craft a scalable solution, quantified impact with real numbers, and learned from the initial latency spike by refactoring the Lambda timeout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
