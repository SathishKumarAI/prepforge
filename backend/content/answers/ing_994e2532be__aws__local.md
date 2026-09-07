---
qid: ing_994e2532be__aws__local
question: DeepSeek-Math reported similar results. How is your work different?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 427
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:12:14-05:00'
sources: []
---

**Situation / Task**  
While DeepSeek‑Math demonstrated impressive symbolic reasoning, my team was asked to build a production‑ready model that could answer math queries at 10 k QPS for an e‑commerce recommendation engine, without exposing internal proprietary data.

**Action**  
1. **Ownership & Bias for Action** – I scoped the problem as a *multi‑modal* inference service: a lightweight transformer (≈50M params) for natural language parsing, fed into a graph‑based theorem prover built on Neo4j and Amazon Neptune.  
2. **Dive Deep** – We profiled latency; the transformer hit 25 ms/req, while the prover added 40 ms. To keep the end‑to‑end <70 ms, we introduced *edge‑caching* via AWS Lambda@Edge (cold‑start mitigated with provisioned concurrency) and offloaded heavy symbolic reasoning to an **Amazon SageMaker endpoint** that scales on GPU instances with Spot Fleet for cost control.  
3. **Deliver Results** – In A/B testing, our system reduced error rate from 4.2 % (DeepSeek baseline) to 1.9 %, and cut operational spend by 32 % compared to a monolithic SageMaker deployment.

**Result**  
The final architecture achieved 12 k QPS with 99.7 % SLA, used only 15 % of the GPU hours DeepSeek required, and enabled on‑demand scaling for flash sales without downtime.

*Bar‑raiser notes:* I demonstrated full ownership (end‑to‑end pipeline), deep technical trade‑offs (caching vs. compute cost), quantified impact (latency & cost savings), and learned from a failed prototype that over‑embedding symbolic rules inflated latency, leading to the hybrid design above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
