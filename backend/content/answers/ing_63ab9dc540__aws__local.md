---
qid: ing_63ab9dc540__aws__local
question: 'Q77: How would you design a multi-provider LLM architecture for 99.9% availability?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 446
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:10:33-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the rollout of a cross‑cloud LLM service that had to stay online 99.9 % for our enterprise customers (≈ 100 TB/day). The goal was to architect a multi‑provider system that could switch providers on demand while keeping latency <50 ms.

**Action**  
I built a *proxy layer* in **AWS API Gateway + Lambda@Edge** that routes requests to the provider with the lowest current latency, using real‑time metrics from **CloudWatch** and **Prometheus**. Each LLM endpoint is wrapped in an **Elastic Container Service (ECS) Fargate** task that pulls a fresh Docker image containing the provider SDK.  

For failover I added a *canary* queue on **Amazon SQS**; when a request fails, Lambda retries against another provider’s endpoint. The system uses **AWS Step Functions** to orchestrate retries and back‑off, ensuring 99.9 % availability. Costs stay low because only the active provider is billed for compute; idle providers run in *spot* mode or are paused.

**Result**  
After deployment we hit **99.97 % uptime** over six months (down from 94 %) and reduced average latency to **38 ms**. Monthly spend dropped by **18 %** because we avoided over‑provisioning on a single vendor.

**Leadership Principles & Bar‑raiser cues**  
- *Customer Obsession*: We measured SLA impact on real user sessions.  
- *Ownership/Dive Deep*: I wrote the retry logic, tuned back‑off curves, and logged provider health metrics for continuous improvement.  
Bar‑raisers look for evidence that you own the end‑to‑end system, dive into telemetry to surface bottlenecks, quantify the business impact, and iterate from failures (e.g., the 3 % latency spike after a provider update).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
