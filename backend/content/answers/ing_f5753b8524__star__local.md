---
qid: ing_f5753b8524__star__local
question: 'Explain: Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 303
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:39:19-05:00'
sources: []
---

**Situation:**  
At my previous company we built a real‑time ad fraud detection platform that needed to flag duplicate click requests within milliseconds for millions of users per day. Our initial approach was to query a Redis cache for every incoming click, but the latency ballooned as the keyspace grew.

**Task:**  
I had to design a lightweight pre‑filtering layer that could reject obvious duplicates before hitting Redis, keeping overall latency under 5 ms while maintaining a false positive rate below 1%.

**Action:**  
I introduced a Bloom filter: a bit array of size 10 million bits with three independent hash functions. Each click’s user ID + ad ID was hashed into the array; if all three bits were set, we sent the request to Redis, otherwise we dropped it outright. We updated the filter asynchronously via a background worker that inserted new keys every second. I also added a counting Bloom variant so we could expire old entries after 24 hours without a full reset.

**Result:**  
The system cut Redis lookups by ~70%, reducing total request latency from 12 ms to 4 ms on average, and lowered our infrastructure cost by 30%. The false positive rate stayed at 0.8% as measured in A/B tests. I learned how probabilistic data structures can dramatically improve throughput when tuned correctly for the use case.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
