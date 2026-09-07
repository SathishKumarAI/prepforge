---
qid: ing_de0257d04e__aws__local
question: 'Explain: Performance vs scalability — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 420
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:41:29-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

When I was building the real‑time recommendation engine for a streaming platform (30 M active users), my team faced a classic trade‑off: *performance* (latency ≤ 50 ms) vs *scalability* (handle 10× traffic spikes).  

**Situation:** The ML inference layer ran on a single GPU cluster. Under peak load, latency ballooned to 200 ms and the service cost surged by 120 % due to over‑provisioning.

**Task:** Re‑architect for low latency while ensuring linear scalability and cost control.

**Action:**  
1. **Decouple inference from data ingestion** – moved the model to a stateless Lambda layer behind API Gateway, using *Amazon SageMaker Endpoint* with autoscaling.  
2. **Edge caching** – deployed *CloudFront* with 1‑second TTL for most frequent predictions, reducing GPU load by ~70 %.  
3. **Monitoring & Auto‑Scaling** – set CloudWatch alarms on `InvocationsPerSecond` and `Duration`, tying them to Lambda concurrency limits (max 10k).  
4. **Cost Optimization** – switched from GPU instances to *Inference Optimized Instances* (`ml.g4dn.xlarge`) and used spot pricing, cutting inference cost by 35 %.

**Result:** Latency dropped to 30 ms on average; throughput scaled linearly up to 200 k requests/sec with a 40 % reduction in operating costs. The system also achieved 99.9 % availability across three AZs.

**Bar‑raiser check:** I owned the problem, dove deep into metrics, quantified impact (latency, cost), and learned that *caching + serverless* often yields the best performance‑scalability balance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
