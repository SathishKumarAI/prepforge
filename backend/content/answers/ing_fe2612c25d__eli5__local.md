---
qid: ing_fe2612c25d__eli5__local
question: 'Explain: Risk assessment — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 185
total_tokens: 346
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:17:37-05:00'
sources: []
---

Imagine you’re building a huge, intricate LEGO castle (your machine‑learning model) on a table that sometimes gets knocked over by the wind (system failures, cyberattacks, or natural disasters). Disaster Recovery is like having a spare set of LEGO pieces and a quick‑start guide so that if the original castle falls, you can rebuild it almost instantly without losing all your progress.

In Google Cloud, disaster recovery means keeping copies of your data, training jobs, and model checkpoints in another location. If one region goes down—say a power outage or an earthquake—you switch to the backup region, restore the latest checkpoint, and resume training or inference with minimal downtime. This protects you from losing valuable work and keeps your ML services running smoothly, even when something unexpected happens.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
