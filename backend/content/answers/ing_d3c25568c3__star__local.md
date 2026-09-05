---
qid: ing_d3c25568c3__star__local
question: 'Explain: EventDriven vs Request-Response Communication Pattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 358
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:33:03-05:00'
sources: []
---

**Situation**  
In a recent fraud‑detection project at my previous employer we had a real‑time credit card monitoring service that ingested millions of transactions per day. The existing architecture was a classic request‑response microservice: each transaction triggered an immediate ML inference call and waited for the score before returning to the front end.

**Task**  
The team needed to reduce latency, improve throughput, and make the system more resilient so that downstream dashboards could still update even if the inference model was temporarily overloaded or unavailable.

**Action**  
I proposed switching to an event‑driven pattern. Each transaction produced a “transaction.created” event on Kafka, which our inference service subscribed to asynchronously. The inference worker processed events in batches (100 per batch) using a GPU cluster, published a “fraud.score” event back to Kafka, and updated a Redis cache for fast lookups. I added circuit‑breaker logic so that if the inference stream stalled, the front end would fallback to a cached score instead of timing out.

**Result**  
Latency dropped from an average of 350 ms per request to under 50 ms for the user flow, while throughput increased by 4× because the system no longer blocked on synchronous calls. The architecture also handled spikes gracefully; during a 30‑minute traffic surge we saw only a 2% error rate compared to 18% in the old design. I learned that decoupling via events not only improves performance but also gives clear observability and easier scaling for ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
