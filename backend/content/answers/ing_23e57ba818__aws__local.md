---
qid: ing_23e57ba818__aws__local
question: 'Explain: Latency Budget — Recommendation Engine'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 546
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:47:47-05:00'
sources: []
---

**Situation (S)**  
I was tasked to launch a recommendation engine for an e‑commerce platform that had to serve personalized product suggestions in under **120 ms** per user click while handling 1M concurrent sessions.

**Task (T)**  
Define a latency budget, build the pipeline, and prove it met the target without breaking cost or availability constraints.

**Action (A)**  

| Step | AWS Services | Reasoning |
|------|--------------|-----------|
| **Feature extraction** | *Amazon SageMaker Endpoint* (real‑time inference) | Low‑latency GPU instance (g4dn.xlarge), auto‑scaling on CloudWatch |
| **Cache warm‑up** | *ElastiCache for Redis* | 99.9 % hit rate reduces DB hits; 0.5 ms per lookup |
| **Data store** | *Amazon DynamoDB* with provisioned throughput + DAX cache | Sub‑10 ms reads, auto‑scaling to 200K RCU |
| **Orchestration** | *AWS Lambda@Edge* (global edge) | <1 ms network hop; triggers the SageMaker endpoint |
| **Observability** | *Amazon CloudWatch Metrics + X-Ray* | Continuous latency monitoring and root‑cause analysis |

- **Scalability**: Auto‑scaling on request patterns, serverless components for burst traffic.  
- **Availability**: Multi‑AZ DynamoDB, active‑active Redis cluster.  
- **Cost**: Spot instances for training; Lambda cold starts mitigated with provisioned concurrency (10 % of peak).  

**Result (R)**  
Latency averaged **95 ms** (≤120 ms budget) during a 30‑day production run, improving conversion by **3.2 %** and revenue by **$1.4M** monthly. Cost increased only **8 %** versus legacy system.

> *Leadership Principles*: **Customer Obsession** – delivering sub‑200 ms experience; **Ownership** – owning the end‑to‑end pipeline; **Dive Deep** – profiling every microsecond; **Bias for Action** – iterated on live metrics.  

**Bar‑raiser cue**: Look for clear ownership, deep technical justification, quantified impact, and learning from any latency spikes (we rolled back to a simpler model when Redis cache hit‑rate dropped).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
