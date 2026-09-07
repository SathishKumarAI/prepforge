---
qid: ing_1857a8bd3f__aws__local
question: 'Explain: HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 508
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:20:36-05:00'
sources: []
---

**Situation (Customer Obsession & Ownership)**  
When I was building a recommendation engine for an e‑commerce platform, the product team insisted on exposing model predictions via a public API so that third‑party sellers could embed them in their storefronts. The API had to be highly available, secure, and able to serve millions of requests per day while keeping latency below 150 ms.

**Task (Dive Deep & Bias for Action)**  
I needed to design the HTTP/HTTPS layer and underlying system so that it met these constraints without sacrificing cost or developer productivity.

**Action (Invent & Simplify)**  

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Load‑balancing & TLS termination | **Amazon CloudFront + ALB** | Edge caching reduces origin load; native HTTPS with ACM certificates. |
| API gateway & throttling | **API Gateway REST/HTTP** | Built‑in request validation, rate limiting, and integration with Lambda. |
| Compute & scaling | **AWS Lambda (Python)** + **SQS FIFO** | Serverless scales automatically to 10k RPS; SQS decouples burst traffic. |
| Model inference | **Amazon SageMaker Endpoint (Batch Transform)** | Managed endpoint guarantees 99.9% availability and auto‑scaling. |
| Observability | **X-Ray, CloudWatch Logs & Metrics** | End‑to‑end tracing for latency diagnostics. |

I added a *caching layer* using **Elasticache Redis** with a TTL of 5 min to serve the most frequent predictions, cutting SageMaker invocations by 60%.  

**Result (Deliver Results)**  
Latency dropped from 280 ms to 95 ms; cost decreased by 38 % compared to a monolithic EC2 deployment. The API achieved 99.99 % uptime during a peak holiday surge of 12 k RPS, and we onboarded 15 new sellers in two weeks.

**Bar‑raiser checkpoints**  
- Demonstrated ownership: I led the entire stack from design to production.  
- Dive deep: I quantified cache hit rates, latency budgets, and cost savings.  
- Learned from failure: After an initial Lambda cold‑start spike, I switched to provisioned concurrency, reducing variance by 70%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
