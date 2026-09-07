---
qid: ing_3dae983982__aws__local
question: 'Explain: Consumer — Can Kafka Lose Messages?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 357
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:07-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession*, *Dive Deep*.  
> **Situation & Task:** I was tasked to guarantee that our real‑time analytics pipeline never lost user events sent from millions of devices. The core component was an Amazon MSK (Kafka) cluster feeding downstream Lambda processors.  
> **Action:**  
> 1. **Configure Kafka durability** – set `min.insync.replicas=2` and use a *compact* topic with a retention of 7 days, ensuring at least two replicas per partition.  
> 2. **Enable broker-level logging & monitoring** – CloudWatch Alarms on `UncleanLeaderElections` and `ReplicaLagMs`, auto‑scaling the cluster based on throughput.  
> 3. **Implement idempotent producers** (Kafka producer `enable.idempotence=true`) to prevent duplicate records during retries.  
> 4. **Add a dead‑letter queue** in SQS for messages that fail after three consumer attempts, guaranteeing visibility.  
> **Result:** After deployment we observed *0 %* message loss across 1.2 billion events/month (pre‑deployment loss rate was ~0.02 %). Cost increased by only 12 % due to extra replicas, but availability hit a 99.9999 % SLA, surpassing the customer‑facing requirement.  
> **Learning:** Even with highly durable settings, monitoring lag and auto‑scaling are essential; otherwise, broker overload can still drop messages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
