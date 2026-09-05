---
qid: ing_199f8d710e__eli5__local
question: 'Explain: In-Sync Replicas (ISR) — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 227
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:16:46-05:00'
sources: []
---

Think of a Kafka topic as a **train line** where each partition is a train car carrying messages.  
The **leader car** runs the schedule, while several other cars are **followers** that copy every message the leader writes.

An **In‑Sync Replica (ISR)** is a follower that has successfully caught up with the leader’s latest batch of messages and can respond if the leader fails. Imagine the train line has a safety system: as soon as a follower lags behind—say it misses a car or gets stuck—the line removes that car from the “in‑sync” list so it won’t be counted when the train is rerouted.

When you write data, Kafka guarantees it will be stored on all ISR cars before acknowledging success. If a follower drops out of the ISR list, new writes are still accepted but the system knows one copy has fallen behind and will try to bring it back up later. Thus, ISR keeps the cluster reliable by tracking which replicas are fully current with the leader.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
