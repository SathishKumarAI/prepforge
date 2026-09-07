---
qid: ing_68f1cf700d__aws__local
question: 'Explain: Total Latency — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 385
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:21:31-05:00'
sources: []
---

**Situation & Task**  
At my previous company we launched a real‑time recommendation engine that served millions of users per day. The *total latency*—the time from user request to final score—had to stay below **200 ms** or the click‑through rate would drop 15%. I owned the inference pipeline.

**Action**  
I re‑architected the pipeline into three stages:  
1. **Feature extraction** – Lambda@Edge pulls pre‑computed embeddings from DynamoDB (low‑latency cache).  
2. **Model inference** – a SageMaker Neo‑compiled TensorFlow model runs on an **EC2 G4dn.xlarge** spot fleet, auto‑scaling by 5 % CPU utilisation.  
3. **Post‑processing & response** – API Gateway + Lambda aggregates scores and serves the JSON to the front end.

To guarantee availability I used **AWS Global Accelerator** with health checks on each region, routing only healthy endpoints. Cost was cut 30 % by replacing on‑demand instances with spot fleets and using a **reserved cache tier** in ElastiCache Redis for hot features. I added a CloudWatch anomaly detector that auto‑spins up an extra inference node when latency spikes above 180 ms.

**Result**  
Latency dropped from **350 ms to 140 ms** (a 60% reduction), keeping CTR stable at +2%. Monthly spend fell by $12k, and the system scaled to 4× traffic without any manual intervention.  

> *Amazon Leadership Principles:* **Ownership** – I drove end‑to‑end change; **Dive Deep** – I analysed each latency component and quantified impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
