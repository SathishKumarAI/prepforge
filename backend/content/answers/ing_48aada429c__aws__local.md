---
qid: ing_48aada429c__aws__local
question: 'Explain: Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 449
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:42-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Ownership*, *Dive Deep*  
> **Scenario (S):** I was tasked to redesign our real‑time analytics pipeline for the ad‑tech team, which shipped millions of events per day from mobile apps into downstream dashboards. The existing Spark batch jobs lagged behind by 10–15 min and occasionally lost records when brokers restarted.  
> **Task (T):** I needed to guarantee at least once delivery while keeping latency under 200 ms.  
> **Action (A):**  
> * Investigated Kafka’s `acks` semantics (`0`, `1`, `all`).  
> * Chose `acks=all` for the critical “click” topic, ensuring the leader waits for all in‑sync replicas before acknowledging producers—eliminating data loss at the cost of a ~5 ms latency hit.  
> * Implemented a secondary “audit” topic with `acks=1` to capture every event without blocking the main pipeline.  
> * Configured broker replicas (3 per partition) and set `min.insync.replicas=2` for safety.  
> * Deployed an autoscaling consumer group on EC2 Spot instances, using Kinesis Data Streams as a fallback during broker outages.  
> **Result (R):** Delivery accuracy improved from 92 % to 99.9 %, latency dropped from 250 ms to 180 ms, and cost savings of ~15 % were achieved by eliminating unnecessary retries. The team now has a transparent SLA for data freshness.  

**Bar‑raiser cues:**  
- Demonstrated *ownership* by redesigning the entire flow.  
- Showed *deep dive* into Kafka internals (acks, replicas).  
- Quantified impact with real metrics (latency, accuracy, cost).  
- Learned from failure: earlier attempts used `acks=1`, causing 8 % data loss during broker restarts—prompting the final design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
