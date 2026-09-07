---
qid: ing_ee0b6bab1f__aws__local
question: 'Explain: Decision Framework: Engine per Workload — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 332
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:16:26-05:00'
sources: []
---

**Decision Framework: Engine‑Per‑Workload – Serving Infrastructure**

*Leadership Principles:* **Customer Obsession & Ownership**

> **Situation:** Our recommendation engine served three distinct workloads (real‑time product ranking, batch personalization, and A/B testing). A single monolithic inference service caused latency spikes during high‑traffic experiments.  
> **Task:** Redesign the serving layer so each workload had its own optimized inference “engine.”  
> **Action:** I split the monolith into three containerized services on ECS Fargate, each using a tailored GPU instance type and model size. We added an API gateway with weighted routing and implemented SQS‑based retry logic for fault tolerance. Monitoring via CloudWatch & X-Ray traced SLA breaches to specific engines.  
> **Result:** Latency dropped from 350 ms (overall) to <80 ms per engine; the A/B testing workload saw a 45% reduction in error rate, while cost stayed flat due to spot‑instance auto‑scaling. This architecture also reduced deployment risk—engine updates now affect only one workload, cutting rollback time by 70%.  
> **Reflection:** The key learning was that *“one size does not fit all”*; diving deep into each workload’s access patterns revealed distinct optimization paths. Future iterations will integrate SageMaker Pipelines for continuous model retraining per engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
