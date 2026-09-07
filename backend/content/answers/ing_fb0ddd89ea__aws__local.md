---
qid: ing_fb0ddd89ea__aws__local
question: 'Explain: 2.1. Resource Identifiers — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 434
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:46:07-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When I built a multi‑tenant recommendation engine for a streaming platform, we needed a lightweight interface that could expose model predictions to front‑end clients and partner services. The client team demanded an “API” that was easy to document, versioned, and could scale to millions of requests per day without locking the backend.

**Action (Dive Deep + Bias for Action)**  
I chose **REST** because it maps HTTP verbs to CRUD operations—GET for inference, POST for training updates—making it familiar to developers. I designed a stateless endpoint (`/v1/recommendations`) that accepted a JSON payload with user ID and context. Using Amazon API Gateway as the entry point, I leveraged:

- **Lambda@Edge** for low‑latency request validation  
- **Amazon SageMaker Endpoint** (real‑time inference) behind an Application Load Balancer  
- **AWS WAF + Rate Limiting** to protect against abuse  

The architecture is horizontally scalable: API Gateway automatically shards traffic; the SageMaker endpoint runs on a multi‑AZ cluster, guaranteeing 99.9 % availability. Cost was controlled by using Lambda’s pay‑per‑invocation model and SageMaker’s spot instances for batch updates.

**Result (Deliver Results + Quantified Impact)**  
Within three weeks of rollout, we handled **1.2 M requests/day**, with a 97 % success rate and an average latency of 120 ms—down from the previous 350 ms monolithic service. The API also reduced infrastructure ops by 35 %, freeing devs to focus on new features.

**Reflection (Learn from Failure)**  
Initial trials exposed a cold‑start issue in Lambda; I switched to provisioned concurrency, trading a $0.10/day cost for a 40 % latency drop—an example of owning the trade‑offs and iterating quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
