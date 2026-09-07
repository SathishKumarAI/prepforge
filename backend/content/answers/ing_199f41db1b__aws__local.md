---
qid: ing_199f41db1b__aws__local
question: 'Explain: Pipeline Parallelism (PP) — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 401
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:12-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I led the rollout of a new inference service for our recommendation engine at Amazon. The model was a 12‑B parameter transformer that could not fit on a single GPU, so we had to adopt **Pipeline Parallelism (PP)** to keep latency < 50 ms for millions of daily requests.

**Action (Dive Deep + Bias for Action)**  
1. **Partition the network into 4 stages** and mapped each stage to an EC2 G5g‑based container on ECS Fargate, using *AWS Elastic Inference* to offload linear layers.  
2. Added a lightweight **Rust service** as a traffic router that stitches the stage outputs in order, ensuring zero re‑ordering latency.  
3. Implemented *AWS CloudWatch* metrics per stage and an Auto Scaling policy that spawns additional stages when the inter‑stage queue depth exceeds 200ms.  
4. Leveraged **Amazon EFS** for shared model weights to avoid redundant downloads across containers.

**Result (Deliver Results + Invent & Simplify)**  
- Latency dropped from 120 ms to 42 ms, a 65% improvement, meeting the SLA for 99.9% of traffic.  
- Cost per inference fell by **$0.0003** due to efficient GPU utilization and reduced idle time.  
- The system handled a 5× traffic spike during Prime Day without any service disruption.

**Reflection (Bar‑raiser expectations)**  
I documented the failure mode where stage‑2 lagged, introduced a circuit breaker, and trained junior engineers on PP tuning. This deep dive and ownership mindset directly translated to measurable customer impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
