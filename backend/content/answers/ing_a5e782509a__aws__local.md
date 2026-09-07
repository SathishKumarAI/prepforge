---
qid: ing_a5e782509a__aws__local
question: 'Explain: What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 491
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:42:03-05:00'
sources: []
---

**What is an API?**  
An Application Programming Interface (API) is a contract that exposes specific functionality or data to other software components. Think of it as a well‑documented door: you send a request, the system processes it, and returns a response in a predictable format.

---

## System Design Example – *Real‑time ML Prediction Service*

**Situation & Task (Ownership)**  
I led a team tasked with exposing an on‑premises recommendation model to mobile clients. The goal was < 10 ms latency for 99.9% of requests and > 1,000 RPS.

**Action (Dive Deep + Bias for Action)**  

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| **Front‑end API** | Amazon API Gateway + Lambda Authorizer | Serverless scaling, zero‑downtime deployments |
| **Inference Engine** | SageMaker Endpoint (real‑time) | Managed GPU inference; autoscaling on CPU usage |
| **Caching Layer** | ElastiCache Redis | 95% cache hit ratio reduces latency by ~70 ms |
| **Observability** | CloudWatch + X-Ray | Real‑time metrics, tracing for SLA monitoring |

- Implemented a *cache‑first* strategy: if the user profile hash exists in Redis, skip SageMaker.  
- Deployed multi‑AZ for high availability; used Route 53 latency routing to nearest region.  

**Result (Deliver Results)**  
Latency dropped from 120 ms to **32 ms** average, with a 99.97% success rate at 1,200 RPS. Cost per inference fell by **38 %** thanks to the cache layer.

---

### What a Bar‑raiser Hears

- **Ownership:** “I owned end‑to‑end delivery and drove cross‑team alignment.”  
- **Dive Deep:** Detailed trade‑off table (SageMaker vs. on‑prem).  
- **Quantified Impact:** Clear latency & cost metrics.  
- **Learning from Failure:** After a cache miss spike, we added adaptive TTLs; now hit ratio is 96%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
