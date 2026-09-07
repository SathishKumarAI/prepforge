---
qid: ing_3289d78baf__aws__local
question: 'Explain: um acid is not a property of — \"Testing Distributed Systems w/
  Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 435
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:19:18-05:00'
sources: []
---

**Answer (Amazon / AWS Interview Style)**  

*Situation:* While designing a new ML‑pipeline for real‑time fraud detection, I discovered that our *“ACID”* guarantees were misleading. The team was treating “Atomicity, Consistency, Isolation, Durability” as if they applied to every microservice, but in a distributed ML system the only guarantee we could realistically provide was **Durability**—the others depended on deterministic scheduling and fault‑tolerance mechanisms.

*Task:* I had to explain this nuance to both engineers and product managers, ensuring that our acceptance criteria reflected realistic expectations and that we didn’t overcommit on consistency guarantees.

*Action:*  
1. **Dive Deep:** Reviewed Will Wilson’s “Testing Distributed Systems with Deterministic Simulation” paper, which shows how deterministic replay isolates nondeterminism in state machines—exactly what we need for ML inference services.  
2. **Design:** Built a deterministic simulation layer using **AWS Step Functions** and **SQS DLQs** to model retries, plus an **EventBridge** rule that captures all state transitions. This allowed us to replay failures deterministically and prove that our pipeline always reaches a consistent final state after retries.  
3. **Metrics:** Implemented end‑to‑end latency dashboards in CloudWatch; after the simulation layer, 99.9 % of inference requests met the 200 ms SLA, with retry overhead <5 %.  

*Result:* The team stopped claiming full ACID guarantees, reducing engineering friction by 30 % and cutting over‑engineering costs (SQS DLQs vs. complex consensus protocols) by ~$12k/month.  
*Learned:* Never assume classic DB properties hold in distributed ML; deterministic simulation is the key to realistic testing.  

**Leadership Principles:** *Customer Obsession* (accurate SLAs), *Dive Deep*, and *Ownership*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
