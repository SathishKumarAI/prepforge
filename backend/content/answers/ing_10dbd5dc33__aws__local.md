---
qid: ing_10dbd5dc33__aws__local
question: 'Explain: you could run into Network latency and — Mastering Chaos - A Netflix
  Guide to Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 431
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:03:39-05:00'
sources: []
---

**Situation & Task**  
I was leading the migration of a recommendation engine from an on‑prem cluster to AWS so that it could scale with seasonal traffic spikes. The model served 10 M requests per day and we needed sub‑50 ms latency for each inference.  

**Action – Technical Design**  
1. **Service Architecture** – Decomposed the monolith into three stateless Lambda functions (pre‑process, inference, post‑process) behind an Application Load Balancer. Each function hit a **Amazon SageMaker endpoint** that hosts the model in a **multi‑AZ EFS** container for high I/O and low network hops.  
2. **Network & Latency Mitigation** – Deployed all resources inside the same VPC with **AWS PrivateLink** to eliminate public Internet traffic, used **Elastic Network Interfaces (ENIs)** attached to each Lambda to reduce cold‑start latency, and leveraged **Amazon CloudFront** edge caching for frequently requested user profiles.  
3. **Chaos Engineering** – Adopted Netflix’s “Mastering Chaos” principles: wrote a custom script that injects random network delays (up to 200 ms) into the EFS mount points and used **AWS Fault Injection Simulator** to run controlled chaos experiments during nightly builds.

**Result**  
- Reduced average inference latency from **120 ms → 32 ms** (a 73% drop).  
- Increased request throughput by **150%** without adding new hardware.  
- After 12 months of continuous operation, the system sustained a **99.998% SLA**, meeting our business goal of “no customer‑visible lag.”  

**Learning & Ownership**  
I owned the end‑to‑end migration, drove cross‑functional collaboration (DevOps, data science), and documented failure modes discovered during chaos tests—enabling faster rollbacks in production. The experience reinforced that *Customer Obsession* drives us to obsess over latency, while *Dive Deep* forces us to understand every network hop and its impact on user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
