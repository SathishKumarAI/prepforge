---
qid: ing_cb67fbca33__aws__local
question: 'Explain: Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 354
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:00:44-05:00'
sources: []
---

**Situation / Task** – I led the redesign of a recommendation engine for a global e‑commerce platform that served ~200 M users daily. The legacy batch model produced stale suggestions, hurting click‑through rates (CTR) by 12 % and revenue per visitor by 8 %.  

**Action** –  
- **Ownership & Bias for Action:** Built an end‑to‑end streaming pipeline using Kinesis Data Streams → Lambda → SageMaker Endpoint.  
- **Dive Deep & Invent & Simplify:** Chose a matrix factorization model trained nightly on DynamoDB snapshots, but deployed a real‑time inference layer in SageMaker Neo for edge devices, reducing latency from 4 s to <200 ms.  
- **Scalability/Availability:** Auto‑scaling Lambda (1–10k invocations/sec), Multi‑AZ SageMaker hosting, and global CloudFront distribution ensured 99.99 % uptime.  
- **Cost Control:** Leveraged Spot Instances for training (×4 cost reduction) and reserved capacity for inference, saving ~30 % YoY.

**Result** – Within three months: CTR rose 18 %, revenue per visitor up 12 %, and model latency dropped 80 %. A/B tests showed a lift of $3.2 M/month in incremental sales.  

**Bar‑raiser Takeaway:** I owned the problem, dove into data & architecture, quantified impact, and iterated quickly while learning that streaming pipelines + edge inference were the sweet spot for high‑velocity recommendations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
