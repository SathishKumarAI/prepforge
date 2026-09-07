---
qid: ing_8bdd2f9a1e__aws__local
question: 'Explain: Q59: Your LLM costs are 10x higher than expected. Walk through
  your investigation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 455
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:42:17-05:00'
sources: []
---

**Situation & Task**  
In early 2024 I was leading the rollout of a customer‑facing recommendation engine that leveraged an on‑prem LLM hosted in SageMaker. Two weeks after launch, the bill for GPU usage hit $120 k/month—10× our forecasted $12 k—and the business line flagged a risk to the quarterly margin.

**Action – Dive Deep & Ownership**  
1. **Data audit** – I pulled CloudWatch logs and S3 access patterns; discovered that 68 % of inference traffic was coming from a single micro‑service that had recently been refactored to use the LLM for “dynamic pricing.”  
2. **Model profiling** – Using SageMaker Debugger, I measured batch size, sequence length, and GPU utilization. The model was running with 4 GB context windows, yet most queries were under 256 tokens—an inefficiency that inflated inference time by ~35 %.  
3. **Cost‑opt design** – Migrated the micro‑service to an **SageMaker endpoint on a spot fleet** (p2.xlarge) and added a **Cache layer in ElastiCache Redis** for frequently requested price points, cutting per‑inference GPU time from 0.8 s to 0.3 s.  
4. **Automation** – Implemented a CloudWatch alarm that triggers an auto‑scaling policy based on request latency, preventing future overprovisioning.

**Result**  
Monthly GPU spend dropped to $14 k (≈13 % of budget), and inference latency improved from 0.8 s to 0.3 s, boosting conversion rates by 4 %. I documented the findings in a post‑mortem that became part of our “Cost‑Optimized ML Playbook” shared across the org.

**Reflection (Bar‑Raiser)**  
I took full ownership, dug into telemetry until root cause was clear, quantified the impact with real numbers, and turned a costly failure into a scalable best practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
