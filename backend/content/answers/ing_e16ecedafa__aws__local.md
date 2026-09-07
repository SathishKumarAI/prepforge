---
qid: ing_e16ecedafa__aws__local
question: 'Explain: Network APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 454
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:49:16-05:00'
sources: []
---

**What’s a network API?**  
*Customer Obsession & Ownership*

> **S – Situation:** I was tasked to expose our recommendation engine (a heavy‑weight ML model) so that mobile apps could fetch personalized suggestions in real time.  
> **T – Task:** Design an API that is scalable, secure, and easy for front‑end teams to consume.  
> **A – Action:**  
> 1. **Define contract** – RESTful endpoints (`GET /recommendations?userId=…`) with JSON payloads; versioned via path (`/v1`).  
> 2. **Architecture:**  
>    * **API Gateway** (regional) for throttling, caching, and SSL termination.  
>    * **Lambda@Edge** + **AWS Lambda** to run inference in a container (ECR image).  
>    * **Amazon SageMaker Endpoint** for the model; invoked via SDK inside Lambda.  
>    * **DynamoDB** cache (TTL) for recent results, reducing cold‑start latency.  
> 3. **Security:** IAM roles for Lambda → SageMaker, Cognito JWT validation in API Gateway.  
> 4. **Observability:** CloudWatch metrics (`Latency`, `ErrorRate`), X-Ray traces, and a Grafana dashboard.  
> **R – Result:** Latency dropped from 1.2 s (direct SageMaker calls) to <300 ms average; request cost fell by 60% ($0.02 → $0.008 per 10k requests). The system handled 50k RPS with 99.9% availability during a traffic spike, and the API was adopted by all mobile clients within two weeks.  

*Dive Deep*: I logged every Lambda cold‑start and iterated on container size; learned that 512 MiB memory reduced start time by 25%.  
Bar‑raiser focus: clear ownership of each component, measurable impact, and continuous learning from performance data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
