---
qid: ing_77aa56964d__aws__local
question: 'Explain: Layer 1: Physical — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 428
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:55:50-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When I led the redesign of our recommendation engine for a global e‑commerce platform, the first hurdle was to guarantee that every data packet from edge devices reached our GPU clusters with <5 ms latency. The team’s original architecture used on‑prem NICs and a legacy 1Gbps switch, causing jitter during peak traffic.

**Action (Dive Deep + Bias for Action)**  
I mapped the problem onto the OSI Layer‑1 model: *Physical*—the raw electrical signals. I proposed migrating to **AWS Global Accelerator** with **Elastic Network Interfaces (ENIs)** on **Amazon EC2 G5 instances**. This gave us:

- 10 Gbps dedicated uplink via AWS Direct Connect, reducing MTU fragmentation and packet loss.
- Near‑zero queuing delay by leveraging **TCP BBR** at the OS level, tuned through CloudWatch metrics.
- Automatic failover across AZs for 99.999% availability.

I also introduced **Amazon S3 Transfer Acceleration** for bulk model artefacts, cutting upload times from 12 min to <1 min for 50 GB datasets—boosting our training pipeline throughput by 7×.

**Result (Deliver Results)**  
Post‑migration, end‑to‑end latency dropped from 45 ms to 3.2 ms during the Black Friday surge, increasing conversion rate by **12%**. The new architecture cut operational costs by $150k annually while enabling real‑time inference at scale.

*Bar‑raiser focus*: I owned every layer of the stack, validated assumptions with packet‑level telemetry, quantified impact on revenue, and iterated quickly after a small 4 h outage that taught me to add health checks on the ENI level.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
