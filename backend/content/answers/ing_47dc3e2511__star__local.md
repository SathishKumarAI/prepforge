---
qid: ing_47dc3e2511__star__local
question: 'Explain: Latency vs throughput — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 359
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:52:13-05:00'
sources: []
---

**Situation:**  
During my internship at a fintech startup, we had to process real‑time fraud alerts from millions of transactions per day. The existing batch pipeline took 15 minutes to deliver results, which was unacceptable for our risk team that needed near‑instant decisions.

**Task:**  
I was tasked with redesigning the alerting system so that it could handle 200k events per second while keeping end‑to‑end latency below 100 ms, without blowing up infrastructure costs.

**Action:**  
First, I profiled the current pipeline and identified that a single monolithic Spark job caused both high throughput bottlenecks and latency spikes. I split the workflow into microservices: a lightweight Kafka consumer for ingestion, a Redis cache for hot data, and a stateless TensorFlow inference service behind an Nginx load balancer. To boost throughput, I used async gRPC calls and sharded the model across 4 GPU instances. For latency, I added a small Bloom filter to short‑circuit obvious non‑fraud cases before hitting the model. I also implemented back‑pressure on Kafka using LMAX Disruptor patterns so that producers wouldn’t overwhelm consumers.

**Result:**  
The new architecture processed 250k events per second with an average latency of 65 ms, a 30% throughput increase and 35% latency reduction compared to the baseline. The team could now flag high‑risk transactions in real time, reducing false positives by 12%. I learned that balancing latency and throughput often means decomposing monoliths, applying back‑pressure, and caching smartly—techniques that are crucial for any large‑scale system design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
