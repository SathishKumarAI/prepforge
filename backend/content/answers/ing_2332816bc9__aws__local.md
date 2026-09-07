---
qid: ing_2332816bc9__aws__local
question: 'Explain: System Design BASICS: Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 441
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:46:09-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to redesign the inference layer for a real‑time recommendation engine that served 2 million users per day. The existing single‑node deployment (vertical scaling) could’t keep up with peak traffic, causing >30 ms latency spikes and a 12 % drop in click‑through rate.

**Action – Design & Trade‑offs**  
I proposed a **horizontal scaling strategy** using Amazon SageMaker endpoints behind an Application Load Balancer.  
* **Horizontal (scale‑out)**: Each inference node runs the same containerized model on GPU instances (p3.2xlarge). Auto Scaling Groups adjust instance count based on CPU/Memory metrics, ensuring 99.9 % availability and keeping latency <20 ms during traffic surges.  
* **Vertical (scale‑up)**: For cost control I kept a baseline of one p3.8xlarge to serve normal loads; this reduces the number of spinning instances during off‑peak hours.  
* **Hybrid**: I introduced an AWS Lambda “warm‑up” layer that pre‑loads the model into memory, reducing cold start latency for new nodes.

I also added a Redis cache (Amazon ElastiCache) for frequent feature lookups, cutting GPU inference calls by 35 %. The cost increased by only 18 % while SLA improved from 92 % to 99.7 %.

**Result**  
After deployment:  
* Latency dropped from 45 ms avg to 18 ms.  
* Click‑through rate rose 15 % (≈ 120,000 additional purchases/month).  
* Operational cost grew 18 %, but revenue impact far exceeded the expense.

**Reflection**  
I learned that horizontal scaling is essential for bursty workloads, but a small vertical “baseline” can keep costs predictable. The design balances **Ownership**, **Dive Deep**, and **Bias for Action**—I owned the entire pipeline, dug into metrics to justify trade‑offs, and acted quickly with an automated solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
