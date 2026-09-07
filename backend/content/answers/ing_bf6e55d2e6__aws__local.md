---
qid: ing_bf6e55d2e6__aws__local
question: 'Explain: Advantages and disadvantages of lazy loading'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 424
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:36:58-05:00'
sources: []
---

**Situation & Task**  
While building a recommendation pipeline for an e‑commerce platform, the team needed to decide whether to pre‑load all user embeddings or load them lazily at inference time. The goal was to keep latency below **50 ms** while minimizing cost on SageMaker endpoints.

**Action (Design)**  
1. **Lazy loading with S3 + Lambda@Edge** – Store embeddings in compressed Parquet on Amazon S3; trigger a Lambda that fetches only the requested slice into an in‑memory cache (Redis).  
2. **Hybrid caching** – Keep the most frequent 20 % of users in Redis for instant access; less frequent users hit S3 via the Lambda, ensuring 99.9 % availability.  
3. **Cost control** – Use Lambda provisioned concurrency to avoid cold starts and enable auto‑scaling with Step Functions orchestrating cache warm‑ups.

**Result**  
- Latency dropped from **120 ms (pre‑load)** to **48 ms (lazy)** for 80 % of requests, meeting SLA.  
- Daily storage cost fell by **$3,200**, a 35 % reduction versus pre‑loading all embeddings.  
- Cache hit ratio improved after two iterations of A/B testing, validating the “Bias for Action” and “Dive Deep” principles.

**Leadership Principles Highlighted**  
*Customer Obsession*: Delivered faster recommendations at lower cost.  
*Ownership & Dive Deep*: Architected a fault‑tolerant, scalable solution; iterated on metrics to refine cache strategy.  

**Bar‑raiser takeaways** – Clear ownership of trade‑offs, data‑driven impact (latency & cost), and lessons learned from initial pre‑load failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
