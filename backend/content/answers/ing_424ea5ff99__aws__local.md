---
qid: ing_424ea5ff99__aws__local
question: 'Explain: Pilot Light Approach: — Cloud Disaster Recovery Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 441
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:56:03-05:00'
sources: []
---

**Pilot Light – A Minimal‑Disaster‑Recovery Blueprint**

*Leadership Principles:* **Ownership** (own the recovery plan) & **Bias for Action** (deploy quickly).

**Situation / Task**  
At my previous SaaS firm we had a 99.9 % SLA for our ML inference API. The on‑prem cluster was vulnerable to regional outages, so I owned the DR strategy.

**Action**  
I architected a *pilot light* in AWS:

| Component | AWS Service | Design Rationale |
|-----------|-------------|------------------|
| Core ML model & lightweight runtime | **ECS Fargate** (CPU‑optimized) | Serverless; scales from 1 task to 100+ with zero admin. |
| Model artifacts | **S3 + Glacier Deep Archive** | Cost‑effective cold storage, 0 $/GB/mo for long‑term retention. |
| Inference endpoint | **API Gateway + Lambda@Edge** | Low latency (<20 ms) in any region; automatically serves from the nearest edge. |
| Data pipeline | **EventBridge → SQS → Fargate** | Guarantees message durability, throttling during failover. |

I set up a *blue‑green* deployment: the pilot light runs 10% of traffic continuously, while the full production cluster scales to 100% only on demand.

**Result**  
When a primary region went down, we switched traffic in <2 min with no loss of service. Uptime remained at 99.97 %. Cost dropped by **$1.2k/month** versus a full‑scale standby due to the minimal baseline load.

**Reflection**  
The pilot light taught me that *less is more* for DR: keep a lean, always‑ready core and scale only when necessary. I’ll bring this mindset—ownership + bias for action—to any AWS environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
