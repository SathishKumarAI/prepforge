---
qid: ing_e7b8d991c0__aws__local
question: 'Explain: Top 6 Load Balancing Algorithms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 493
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:02:37-05:00'
sources: []
---

**Situation & Task**  
I was leading a data‑science platform at my previous company where we had to expose model inference endpoints to millions of users worldwide. The load‑balancing layer needed to be *predictable*, *cost‑efficient* and *highly available*. I scoped the problem: “Which six algorithms should we evaluate, why, and how would they perform under real traffic?”  

**Action – Technical & AWS Design**  
1. **Round Robin** – simple, no state; great for stateless inference.  
2. **Least Connections** – keeps hot nodes from getting overloaded (useful for bursty traffic).  
3. **Weighted Round Robin** – maps to instance size (EC2 Auto‑Scaling Groups) for cost optimization.  
4. **IP Hash** – preserves session affinity, essential when models maintain per‑user cache.  
5. **Random with Retry** – reduces contention during failovers; implemented via AWS Global Accelerator + Lambda@Edge.  
6. **Predictive (ML‑Based)** – uses Amazon SageMaker Model Monitor to forecast load and shift traffic proactively.

I built a *simulation* in Python, feeding it real click‑stream logs (≈ 10 M requests/day). Metrics: latency 99th percentile, error rate < 0.1%, cost per request. Results: Predictive reduced average latency by **23%** vs Round Robin and cut EC2 spend by **15%** during peak hours.

**Result**  
The platform handled a 4× traffic spike with no SLA violations, earning the “Customer Obsession” award for keeping inference latency low. I documented the trade‑offs: predictive needs training data; IP Hash can overload single nodes; Weighted RR requires careful sizing.  

**Bar‑raiser Notes**  
- **Ownership**: I owned the end‑to‑end design and post‑deployment monitoring.  
- **Dive Deep**: Built a reproducible simulator, analyzed per‑algorithm statistics.  
- **Quantified Impact**: 23% latency lift & 15% cost savings.  
- **Learning from Failure**: Initial IP Hash caused “hot‑spot” errors; I pivoted to Weighted RR after profiling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
