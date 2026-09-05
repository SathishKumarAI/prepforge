---
qid: ing_66599df943__star__local
question: 'Explain: and those points were sent to Kafka — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 374
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:52:38-05:00'
sources: []
---

**Situation:**  
In my last role as a data engineer at a ride‑hailing startup, we had just launched a new surge‑pricing model. The real‑time demand signal was calculated every second by our ML pipeline and needed to be fed into the dispatch system without lag.

**Task:**  
I had to design a low‑latency ingestion layer that could handle thousands of events per second, guarantee ordering per city, and provide back‑pressure handling for peak traffic spikes.

**Action:**  
I chose Apache Kafka as the backbone. First, I defined compacted topics per region and set `acks=all` with a small replication factor to balance durability and speed. To keep ordering, each event carried a monotonically increasing timestamp and a city key; we used a single partition per city so consumer groups could read in order. For back‑pressure, I enabled Kafka’s producer retry strategy with exponential backoff and configured the broker `max.request.size` to match our payload size (~2 KB). On the consumer side, I implemented a microservice that pulled batches of 500 events, processed them through the ML model, and pushed predictions into another topic for downstream services. We also added Prometheus metrics on producer latency and queue depth.

**Result:**  
Latency from event generation to dispatch dropped from ~350 ms to <80 ms during peak hours, a 75% improvement. The system sustained 10k events/s without data loss, and the new surge algorithm increased revenue by 12% in the first month. I learned that careful topic design, keying strategy, and robust retry policies are critical when marrying ML inference with real‑time messaging.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
