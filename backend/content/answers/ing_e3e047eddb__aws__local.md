---
qid: ing_e3e047eddb__aws__local
question: 'Explain: CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 455
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:54:14-05:00'
sources: []
---

**CAP & ML‑System Design – My Story**

**Situation:**  
At my last role I led a team that built a real‑time fraud detection engine for a payment platform (10M users). We needed *low latency* inference while staying within the $500k/quarter budget.

**Task:**  
Design an architecture that satisfies **CAP**: choose which of Consistency, Availability, Partition‑Tolerance to prioritize under high traffic and frequent schema changes.

**Action:**  
I applied the *Customer Obsession* principle first—our customers needed instant decisions (≤50 ms) or risk losing a transaction. Thus I chose **AP** (Availability + Partition‑Tolerance) with *eventual consistency*.  

1. **Data Layer** – Amazon DynamoDB (partition‑tolerant, key‑value store) for user profiles; EventBridge streams changes to an SQS queue.  
2. **Feature Store** – SageMaker Feature Store for real‑time features, backed by Redis cache (Elasticache) for sub‑10 ms lookups.  
3. **Inference Layer** – Lambda + SageMaker Runtime for inference; a *fallback* deterministic rule engine in case of latency spikes.  
4. **Monitoring** – CloudWatch Alarms trigger auto‑scaling of Lambdas; S3/Glue log all events for audit.

I performed load testing: 95 % of requests hit <30 ms, 99.9 % availability during simulated network partitions. Cost stayed at $420k/q due to serverless scaling and spot instances for training.

**Result:**  
Reduced false‑positive fraud flags by **27 %**, saving ~$3M/yr in revenue loss. The system’s AP design proved the right trade‑off: we met SLA, kept costs low, and maintained a customer‑centric experience.  

**Bar‑raiser focus:** Ownership of trade‑offs, deep dive into CAP implications, measurable impact (latency, cost), learning from partition simulation failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
