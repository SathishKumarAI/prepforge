---
qid: ing_181627c288__star__local
question: 'Explain: What that means is you do kwow — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 345
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:16:50-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, we had to build a real‑time fraud detection engine that scanned every transaction against millions of merchant locations and user addresses. The latency target was under 50 ms per check, and the system needed to scale from 10⁴ to 10⁷ requests per day.

**Task:**  
I was tasked with designing an architecture that could ingest geospatial data at scale, perform fast nearest‑neighbor lookups, and support continuous updates as new merchants opened or moved.

**Action:**  
I chose a distributed key‑value store (Cassandra) for persistence and built an in‑memory spatial index using a Hilbert curve to linearize latitude/longitude into 64‑bit keys. Each shard maintained a local R‑tree of merchant polygons, exposed via gRPC microservices. For low‑latency queries I deployed a read‑through cache on Redis with a 10 ms TTL and used asynchronous batch writes to Cassandra. We also implemented an incremental change feed that pushed updates to the in‑memory index over Kafka, keeping it fresh without downtime.

**Result:**  
The system handled 12 million daily requests with an average latency of 28 ms, meeting our SLA. The cache hit ratio grew from 45% to 78% after tuning eviction policies. I learned how spatial indexing and data partitioning can turn a seemingly intractable geospatial lookup into a scalable, low‑latency service—exactly the mindset needed for Google Maps‑style system design challenges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
