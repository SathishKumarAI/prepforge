---
qid: ing_38e8aa5d32__star__local
question: 'Explain: Protecting a resource with a lock — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 364
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:22:29-05:00'
sources: []
---

**Situation:** In my last role I was building a real‑time recommendation engine that processed user events in microservices. A nightly batch job updated the shared cache of top items; if two jobs ran simultaneously the cache would become corrupted and downstream services would see stale data.

**Task:** I had to implement a reliable distributed lock so only one instance could write to the cache at a time, without introducing a single point of failure or blocking latency.

**Action:** I chose Redis as the coordination layer because it’s already in our stack and offers atomic `SETNX` with expiration. I wrapped the lock logic in a lightweight library that:
1. Generates a UUID token for each holder.
2. Calls `SETNX key token EX 30s` to acquire the lock; if it fails, retries every 100 ms up to 5 attempts.
3. Uses Lua scripting (`DEL key IF value==token`) to release the lock safely, ensuring only the owner can delete it.
4. Monitors for lock loss and triggers a graceful abort of the batch job.

I also added health‑checks to detect Redis outages; if unavailable we fall back to a local mutex with exponential backoff, accepting eventual consistency for rare edge cases.

**Result:** After deployment the cache update latency dropped from 250 ms (when two jobs conflicted) to under 50 ms. Cache corruption incidents fell to zero, and our SLA for data freshness improved from 92% to 99.9%. I learned that choosing the right coordination primitive (atomic Redis commands + safe release logic) can turn a fragile system into a resilient one without adding heavy infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
