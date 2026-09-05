---
qid: ing_da4cb3dfa8__star__local
question: 'In the mood for some more reading? — My favorite algorithm (and data structure):
  HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 339
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:44:48-05:00'
sources: []
---

**Situation** – At my previous company we had a real‑time analytics dashboard that displayed unique visitor counts for each of our 12 web services. The data pipeline was streaming millions of events per day, and the existing Bloom filter solution required 2 GB RAM per service to maintain an acceptable false‑positive rate.

**Task** – I needed to reduce memory usage by at least 80 % while keeping the error margin under 1.5 %. The new system had to be easy to integrate into our existing Kafka → Spark → Redis stack and produce counts with sub‑second latency.

**Action** – I replaced the Bloom filters with HyperLogLog sketches (64 bit registers, 16 k registers per instance). Using the `stream-lib` library in Java, I wrapped each service’s event stream in a separate HLL accumulator, persisted them to Redis as binary blobs, and exposed a REST endpoint that merged on‑the‑fly sketches from all partitions. I also added a small Python microservice to periodically merge daily sketches into a global view for reporting.

**Result** – Memory consumption dropped from 2 GB to just 32 MB per service (an 84 % reduction). The average error stayed at 0.7 %. Traffic spikes of up to 10× were handled without any lag, and the team could now run daily anomaly detection on unique user counts in under a minute. I learned that choosing the right probabilistic data structure can deliver both scalability and accuracy with minimal code changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
