---
qid: ing_f18f859ff4__star__local
question: 'Explain: Initialize the Filter — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 380
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:31:23-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building a real‑time fraud detection pipeline that had to check every transaction against a blacklist of compromised accounts. The blacklist contained over 10 million entries and we needed sub‑millisecond lookups while keeping memory usage below 2 GB on our Kafka consumers.

**Task** – I was responsible for designing the in‑memory filter that would pre‑screen transactions before they hit the heavy ML model, ensuring low latency and high accuracy with minimal false positives.

**Action** – I chose a Bloom filter because of its space efficiency. First, I calculated the optimal size (m) and number of hash functions (k) using the formula m = -(n ln p)/(ln 2)^2 for 1 % false‑positive rate, yielding ~12 million bits (~1.5 MB). I implemented the filter in Rust, leveraging the `twox-hash` crate for fast non‑cryptographic hashing and pre‑allocating a contiguous bit array to avoid GC pauses. To keep it up‑to‑date, I set up a scheduled job that streamed changes from our Redis cache into the Bloom filter via a lightweight Kafka topic, rebuilding only the delta bits each hour.

**Result** – The filter reduced model invocations by 87 %, cutting processing time from 18 ms to 2.5 ms per transaction. Memory footprint stayed under 1.6 MB, and the false‑positive rate remained below 0.9 %. I learned that careful parameter tuning and incremental updates are key to deploying Bloom filters at scale without compromising accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
