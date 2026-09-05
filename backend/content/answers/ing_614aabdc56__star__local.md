---
qid: ing_614aabdc56__star__local
question: 'Explain: Back-of-the-Envelope Estimation — Design Load Balancer | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 365
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:42:34-05:00'
sources: []
---

**Situation** – In my last role, our web app hit a traffic spike during a product launch: from 1 k to 50 k requests per second over a weekend. The existing single-node server was throttling, and latency jumped above 500 ms.

**Task** – I needed to sketch a high‑level load balancer architecture that could handle the peak load with <200 ms average latency, stay within a $300/month budget, and be deployable in under two weeks on our existing AWS stack.

**Action** – I started with a back‑of‑the‑envelope calculation:  
- Assume each request consumes 10 KB of RAM and 2 CPU cycles per millisecond.  
- For 50 k RPS, that’s 500 MB memory and ~100 vCPU‑hrs/day.  
I then chose an Elastic Load Balancer (ELB) in front of three EC2 m5.large instances (2 vCPUs, 8 GB RAM). Using the AWS pricing calculator, this setup costs ≈$260/month. I added health checks every 30 s and auto‑scaling rules tied to CPU >70% or latency >250 ms. Finally, I drafted a simple failover: if ELB fails, traffic falls back to an on‑premises spare.

**Result** – The prototype handled 60 k RPS with 180 ms mean latency during load testing, and the total cost stayed under budget. I learned that quick capacity estimation, combined with cloud pricing tools, lets you deliver a realistic design in minutes instead of days.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
