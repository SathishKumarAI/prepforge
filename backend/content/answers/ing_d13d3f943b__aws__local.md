---
qid: ing_d13d3f943b__aws__local
question: 'Explain: 4.5 Graceful Degradation — Single Point of Failure (SPOF) | System
  Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 491
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:14:06-05:00'
sources: []
---

**Situation & Task**  
While architecting a real‑time recommendation engine for an e‑commerce platform, my team discovered that the ML inference microservice was a single point of failure (SPOF). A 2 % outage cost us ~USD 12K/day in lost sales and degraded user trust. I had to design a graceful degradation strategy that preserved core functionality while keeping latency <50 ms.

**Action**  
1. **Redundancy & Load Balancing** – Deployed the inference service behind an Application Load Balancer (ALB) with at least two ECS tasks per region, using *service‑discovery* in AWS Cloud Map for dynamic health checks.  
2. **Fallback Logic** – Implemented a local “cold‑start” cache of the top 10k most‑popular items; if ALB routing fails or latency >40 ms, the API immediately returns cached results (approx. 98% accuracy).  
3. **Observability & Auto‑Scaling** – Instrumented CloudWatch metrics (latency, error rate) and set up an Application Auto Scaling policy that triggers on a 5‑second spike, ensuring rapid spin‑up of additional tasks.  
4. **Cost Control** – Used Spot Instances for non‑critical inference replicas and reserved instances for the primary tier; this cut compute spend by ~30 %.  

**Result**  
After deployment, we observed:  
- *Downtime dropped from 0.2 % to <0.01 % monthly.*  
- *Revenue impact reduced from USD 12K/day to <$200/day during spikes.*  
- *Latency remained below 50 ms for 99.9 % of requests.*

**Learnings & Ownership**  
I owned the end‑to‑end resilience, documented failure scenarios in a runbook, and iterated on the cache strategy after a week‑long A/B test. The bar‑raiser praised my *ownership* (taking responsibility for SLA), *dive deep* (analyzing latency traces to pinpoint bottlenecks), and *quantified impact* (clear metrics). This approach aligns with **Customer Obsession**—ensuring uninterrupted service—and **Ownership**, driving lasting reliability improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
