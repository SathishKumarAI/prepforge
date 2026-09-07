---
qid: ing_9eab1e81f0__aws__local
question: 'Explain: The patterns — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 422
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:23:23-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with redesigning a legacy monolith that served both web and mobile clients. The goal was to improve latency for the mobile app by reducing round‑trips while keeping the codebase maintainable.

**Action**  
I championed an **API Gateway → Backend‑for‑Frontend (BFF)** pattern.  
- *Architecture*: A single AWS API Gateway endpoint routed requests to dedicated Lambda BFF services per client type. Each BFF aggregated data from DynamoDB, Aurora Serverless, and a SageMaker inference endpoint.  
- *Security*: Cognito handled auth; IAM roles scoped each BFF to only the resources it needed.  
- *Scalability*: API Gateway automatically throttles to 10 k RPS per stage; Lambda concurrency was set with reserved capacity (200) and on‑demand burst.  
- *Cost & Trade‑offs*: Using Lambda + API Gateway cut server costs by ~70% versus a dedicated EC2 fleet, but introduced a cold‑start penalty (~300 ms). I mitigated this with Provisioned Concurrency for the mobile BFF.

**Result**  
Latency dropped from 1.4 s (monolith) to **350 ms** on average for mobile, while the API hit rate rose to 12 k RPS. Monthly spend fell from $3.2K to $0.9K.  

**Reflection (Bar‑raiser focus)**  
I took ownership of end‑to‑end performance, dove deep into cold‑start profiling, and quantified impact with real A/B test data. The failure point—cold starts—became a learning loop that informed our concurrency strategy for future services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
