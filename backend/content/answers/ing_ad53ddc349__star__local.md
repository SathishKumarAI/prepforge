---
qid: ing_ad53ddc349__star__local
question: 'Explain: acks=1 - example — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 321
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:18:43-05:00'
sources: []
---

**Situation**  
During a real‑time fraud detection project, we were streaming transaction data from our payment gateway into a Kafka cluster that fed an online learning model. The team was worried that if the broker crashed mid‑batch, we’d lose a chunk of high‑value events.

**Task**  
I had to configure Kafka so that each producer write would be acknowledged quickly enough for low latency, yet still guarantee that every message reached at least one replica before the model consumed it.

**Action**  
I set `acks=1` on the producer. This means the leader broker acknowledges receipt as soon as it writes the record locally, without waiting for followers. I paired this with a replication factor of 3 and enabled `min.insync.replicas=2`. That way, even if one follower failed after the ack, another replica would still hold the data. On the consumer side I used a single‑threaded poll loop to keep the offset commits lightweight. I also added a retry back‑off policy so that transient broker hiccups didn’t drop messages.

**Result**  
Latency dropped from 250 ms to 80 ms per batch, and our fraud model’s throughput increased by 35%. We maintained an error rate below 0.02% even during broker restarts. I learned that `acks=1` is a pragmatic compromise between speed and durability when combined with proper replication settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
