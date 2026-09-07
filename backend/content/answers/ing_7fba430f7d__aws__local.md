---
qid: ing_7fba430f7d__aws__local
question: 'Explain: Final rounds — Get a Job at NVIDIA: Interview Process and Top
  Questions - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 396
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:14:04-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When I was preparing for a senior ML role at NVIDIA, the hiring team asked me to design an end‑to‑end recommendation pipeline that could serve 5 M concurrent users with <100 ms latency. My goal: prove we could scale while keeping costs under $2 M/month.

**Action (Dive Deep + Bias for Action)**  
I broke the problem into three micro‑services:  
1. **Feature Store** – Amazon SageMaker Feature Store, persisting 200 GB of user embeddings in DynamoDB with TTL to keep data fresh.  
2. **Inference Service** – A TensorFlow model exported as a ONNX graph, deployed on AWS Lambda@Edge (≤10 ms cold start) behind CloudFront for edge‑caching.  
3. **Recommendation Engine** – Amazon Personalize for real‑time ranking; we tuned the batch size to 1k requests/second, yielding 99th percentile latency <95 ms.

I wrote automated CI/CD pipelines in CodePipeline and used CloudWatch metrics to trigger auto‑scaling of Lambda concurrency by 50% during traffic spikes. I also set up a nightly cost‑optimization script that reduced Lambda spend by 18 % without affecting SLA.

**Result (Deliver Results + Invent & Simplify)**  
The prototype handled 5.2 M concurrent users, hit the latency target with a 0.99 RPS success rate, and stayed within the $1.8 M/month budget—an 11 % cost saving over baseline estimates.  

**Bar‑raiser takeaway** – Show deep ownership of each layer, quantify impact (latency & cost), and iterate quickly on failures (cold start tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
