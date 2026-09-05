---
qid: ing_6162b85a43__star__local
question: 'Explain: Production Uses — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 317
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:42:42-05:00'
sources: []
---

**Situation:**  
In my last role I was leading the data ingestion pipeline for a real‑time fraud detection service that processed ~2 M events per minute from payment gateways. Our deduplication step was bottlenecked by a relational cache lookup, causing latency spikes during peak hours.

**Task:**  
I needed to reduce the per‑event lookup cost and keep the overall processing time under 50 ms while still guaranteeing <0.1% false positives for duplicate detection.

**Action:**  
I introduced a Bloom filter layer in front of the cache. Using Redis Streams I streamed event IDs into a probabilistic bitmap built with a 1 Mbit array and two hash functions (C++ implementation). The filter was refreshed every hour to account for new transaction types. I wrapped the lookup logic in a microservice that first checked the Bloom filter; only when it returned “possible duplicate” did we hit the Redis cache. I also added a fallback path that re‑validates with the full database if needed, ensuring zero false negatives.

**Result:**  
The average per‑event latency dropped from 110 ms to 32 ms during traffic peaks, and CPU usage fell by ~35%. False positives were measured at 0.08%, meeting our SLA. I learned how to balance memory footprint against error rate and the importance of integrating probabilistic data structures into a larger system architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
