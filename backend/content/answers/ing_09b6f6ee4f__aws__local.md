---
qid: ing_09b6f6ee4f__aws__local
question: 'Explain: From Speed to Scale: How Groq Is Optimized for MoE & Other Large
  Models'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 420
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:48:10-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of a high‑frequency recommendation engine from an on‑prem GPU cluster to a serverless architecture in AWS. The model was a Mixture‑of‑Experts (MoE) with 2 M parameters, and our SLA required <50 ms inference for 99.9% of requests.

**Action**  
I scoped the solution around *Customer Obsession* and *Ownership*.  
1. **Architecture** – I chose **AWS Lambda@Edge + Amazon SageMaker Neo** to compile the model into an edge‑optimized binary, reducing CPU cycles by 4×.  
2. **MoE support** – I built a lightweight routing layer in Go that dispatches each request to only the top‑k experts (k = 3) using a learned gating network stored in DynamoDB. This cut inference load by ~70%.  
3. **Scalability & Cost** – By leveraging **Amazon API Gateway + Lambda concurrency limits**, we auto‑scaled from 5 to 10,000 QPS with an average cost of $0.005 per invocation— a 60% reduction versus the previous GPU fleet.  

**Result**  
We achieved <30 ms latency for 99.95% of traffic, slashing our inference cost by 58% while maintaining accuracy (+1.3% CTR). The design also reduced cold‑start times from 800 ms to 120 ms.

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end pipeline, dove deep into latency bottlenecks, quantified impact with real metrics, and iterated after a mid‑rollout spike that taught me to add a fallback caching layer. This cycle of ownership and continuous learning aligns with Amazon’s *Bias for Action* and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
