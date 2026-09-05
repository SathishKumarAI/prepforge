---
qid: ing_065c9519b2__star__local
question: 'Explain: More HLL details — My favorite algorithm (and data structure):
  HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 368
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:41:34-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup we were building a real‑time fraud detection engine that needed to count unique IP addresses per hour across millions of transactions. The naive set approach blew up memory; the existing Bloom filter gave us only a probability, not an exact cardinality.

**Task**  
I had to deliver a scalable, low‑memory counter that could provide the distinct‑count estimate within 1 % error, with less than 2 MB per hour of data, and integrate it into our Spark streaming pipeline without adding latency.

**Action**  
I chose HyperLogLog (HLL) because its probabilistic counters use a fixed number of registers regardless of input size. I implemented the HLL sketch in Scala, using the open‑source *stream-lib* library for efficient hashing and register updates. Each incoming transaction’s IP was hashed with Murmur3, mapped to a register index, and the leading zero count updated. In Spark, I aggregated sketches per hour via the `reduceByKey` operation and merged them with the HLL merge function, preserving the 1 % accuracy bound. I also added a sanity‑check routine that compared HLL estimates against a small exact set for drift detection.

**Result**  
The new solution reduced memory usage from ~200 MB to ~2 MB per hour (a 99 % savings) and kept processing latency under 50 ms, meeting SLA targets. Accuracy stayed within ±0.8 %. I learned that choosing the right probabilistic data structure can turn a seemingly intractable scaling problem into an elegant, production‑ready solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
