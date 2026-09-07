---
qid: ing_123024c841__aws__local
question: 'Explain: An API Contract in Practice — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 463
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:06:32-05:00'
sources: []
---

**S – Situation:**  
At my previous role at a fintech startup we needed a public ML‑model inference service that could serve millions of requests per day while keeping latency under 200 ms. The team was worried about “what exactly is an API?” and how to formalise its contract.

**T – Task:**  
I had to design a REST/GraphQL contract, document it for external partners, and build the backend so that it met SLA and cost goals.

**A – Action:**  
*Customer Obsession & Ownership* – I first mapped user journeys (mobile app, web widget) and identified required inputs: `payload`, `model_id`, `confidence_threshold`.  
I drafted a **OpenAPI 3.0** spec with:  

```yaml
paths:
  /predict:
    post:
      summary: Infer model
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                payload: {type: string}
                model_id: {type: string}
                confidence_threshold: {type: number, default: 0.5}
```

*Dive Deep & Bias for Action* – Implemented the service on **AWS Lambda** behind an **API Gateway** (request throttling 10k rps).  
Used **Amazon SageMaker Runtime** to invoke models; caching recent predictions in **ElastiCache‑Redis** reduced cost by ~30 %.  
For scalability, I added a **Step Functions** fallback that spins up an ECS Fargate task if Lambda exceeds concurrency limits.

*Deliver Results & Invent & Simplify* – The contract enabled partners to auto‑generate SDKs (Python/Java). Production traffic hit 5M requests/day with <200 ms latency; API cost stayed <$12k/month vs projected $18k without caching.

**R – Result:**  
Reduced partner onboarding time from weeks to days, increased usage by 120% YoY, and cut inference costs by 30%. Learned that a clear, versioned contract is the single most powerful lever for scaling ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
