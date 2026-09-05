---
qid: ing_3dae983982__star__local
question: 'Explain: Consumer — Can Kafka Lose Messages?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 352
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:31:23-05:00'
sources: []
---

**Situation:**  
At my previous company we migrated a real‑time analytics pipeline to Kafka. The downstream dashboards were showing missing data points for certain user events, and the engineering team suspected that consumers might be dropping messages during back‑pressure.

**Task:**  
I had to determine whether our consumer configuration could cause message loss, prove it, and design a fix that maintained high throughput without compromising durability.

**Action:**  
First I reviewed the consumer settings: `enable.auto.commit=false`, `max.poll.records=500`, and `session.timeout.ms=30000`. I set up a lightweight test harness that produced 1 M events to a topic with `acks=all` and `min.insync.replicas=2`. Using the Kafka consumer API, I manually committed offsets only after processing batches. To simulate back‑pressure, I throttled the consumer thread with artificial sleep and observed the offset lag. I also enabled `log.retention.hours=1` to catch any reprocessing issues. The test revealed that when the consumer crashed before committing, messages were indeed lost because the broker had no record of successful processing.

**Result:**  
I implemented a transactional producer‑consumer pattern: each consumer ran in a transaction and committed offsets atomically with message writes (`producer.send(...).get()`). This eliminated loss while keeping latency below 200 ms. After deployment, the dashboard error rate dropped from 12% to <0.1%. I learned that Kafka guarantees delivery only if consumers commit offsets; otherwise, messages can be lost during consumer failures or back‑pressure scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
